import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { randomUUID } from 'node:crypto'

const ALLOWED_TAGS = [
  'en_Ads',
  'en_Advertising',
  'en_Adwords',
  'en_Affiliate Marketing',
  'en_B2b',
  'en_B2c',
  'en_Blogging',
  'en_Blogs',
  'en_Brand',
  'en_Brand Awareness',
  'en_Brand Development',
  'en_Brand Identity',
  'en_Brand Management',
  'en_Brand Strategy',
  'en_Branding',
  'en_Campaigns',
  'en_Capital Markets',
  'en_Content Creation',
  'en_Content Development',
  'en_Content Management',
  'en_Content Strategy',
  'en_Content Writing',
  'en_Copywriting',
  'en_Customer Acquisition',
  'en_Customer Engagement',
  'en_Customer Experience',
  'en_Digital Advertising',
  'en_Digital Marketing',
  'en_Digital Strategy',
  'en_Direct Mail',
  'en_Direct Marketing',
  'en_Email Campaigns',
  'en_Email Marketing',
  'en_Event Marketing',
  'en_Facebook',
  'en_Facebook Ads',
  'en_Google',
  'en_Google Ads',
  'en_Google Adwords',
  'en_Google Analytics',
  'en_Hubspot',
  'en_Inbound Marketing',
  'en_Instagram',
  'en_Internet Marketing',
  'en_Lead Generation',
  'en_Linkedin',
  'en_Local Seo',
  'en_Logo Design',
  'en_Loyalty',
  'en_Marine',
  'en_Maritime',
  'en_Mark',
  'en_Market Analysis',
  'en_Market Research',
  'en_Marketing',
  'en_Marketing Agency',
  'en_Marketing Automation',
  'en_Marketing Campaigns',
  'en_Marketing Communications',
  'en_Marketing Consulting',
  'en_Marketing Materials',
  'en_Marketing Plans',
  'en_Marketing Services',
  'en_Marketing Strategies',
  'en_Marketing Strategy',
  'en_Marketplace',
  'en_Martial Arts',
  'en_Messaging',
  'en_Newsletters',
  'en_Online Advertising',
  'en_Paid Advertising',
  'en_Paid Search',
  'en_Pay Per Click',
  'en_Positioning',
  'en_Ppc',
  'en_Public Relations',
  'en_Reputation Management',
  'en_Retargeting',
  'en_Sales Funnels',
  'en_Search Engine Marketing',
  'en_Sem',
  'en_Seo',
  'en_Seo Services',
  'en_Shopify',
  'en_Social Media',
  'en_Social Media Advertising',
  'en_Social Media Management',
  'en_Social Media Marketing',
  'en_Social Media Strategy',
  'en_Strategic Marketing',
  'en_Trade Marks',
  'en_Twitter',
  'en_User Experience',
  'en_Video Marketing',
  'en_Website Design',
  'en_Website Development',
  'en_markers',
  'en_market leader',
  'en_market value',
  'en_market value appraisal',
  'en_marketing concept',
  'en_stock market',
]

const ALLOWED_TAG_SET = new Set(ALLOWED_TAGS)

const GTM_ANALYZER_SYSTEM_PROMPT = [
  'You are a website go-to-market analyzer. You look at website landing pages and detect the Ideal Customer Profiles, keywords and industries relevant for the website.',
  '',
  'You will extract these elements:',
  '',
  '1. ICPs (Ideal Customer Profiles)',
  'ICP has these JSON properties:',
  '- "title": A short title for the profile, such as "Compliance Officer" or "Retention Manager"',
  '- "reasoning": 1 short sentence that explains why the landing page seems to target this persona',
  '- "confidence": 0-1 range. 0 being not confident at all, and 1 being extremely confident (such as the persona directly addressed in primary messaging, title or subtitle or use cases)',
  '',
  '2. Primary industries',
  'Extract top 10 LinkedIn Industry Codes (v2) that the website belongs to. Each industry should have the name, code and confidence.',
  '',
  '3. Tags',
  'Select tags that best represent the intent or business model of this website, from the following list of allowed tags:',
  '"""',
  ...ALLOWED_TAGS.map((tag) => `- "${tag}",`),
  '"""',
  '',
  'Max 6 tags. For each one output confidence. 0 being very unconfident, 1 being directly relevant for the category, as seen in primary messaging and/or positioning. Only consider those tags that seem to represent what the website/company is positioning them in. E.g. don\'t use Social Media just because they have a link to Instagram -- it would have to be that they provide social media services or building a social network. Only include tags with confidence higher than 0.6. Don\'t use "Marketing" unless the company offers marketing services. Or User Experience just because they have UX, they need to offer those services.',
  '',
  'Return an array of objects sorted by confidence high to low, like so:',
  '',
  '```',
  '{',
  '   "icps":[',
  '      {',
  '         "title":"...",',
  '         "reasoning":"...",',
  '         "confidence":0.9',
  '      }',
  '   ],',
  '   "industries":[',
  '      {',
  '         "industry":"Events Services",',
  '         "code": "110",',
  '         "confidence":0.76',
  '      }',
  '   ],',
  '   "tags":[',
  '      {"name": "keyword1", "confidence": 0.84},',
  '      {"name": "keyword2", "confidence": 0.74}',
  '   ]',
  '}',
  '```',
].join('\n')

function dealfrontPrototypeApiPlugin(env) {
  const dealfrontToken = env.DEALFRONT_BEARER_TOKEN
  const groqKey = env.GROQ_API_KEY
  const groqModel = env.GROQ_MODEL || 'openai/gpt-oss-20b'

  async function readJson(req) {
    const chunks = []
    for await (const c of req) chunks.push(c)
    const raw = Buffer.concat(chunks).toString('utf8')
    return raw ? JSON.parse(raw) : {}
  }

  function sendJson(res, status, obj) {
    res.statusCode = status
    res.setHeader('content-type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(obj))
  }

  function extractJsonFromContent(content) {
    const start = content.indexOf('{')
    const end = content.lastIndexOf('}')
    if (start === -1 || end === -1 || end <= start) {
      throw new Error('Groq returned non-JSON output')
    }
    return JSON.parse(content.slice(start, end + 1))
  }

  function normalizeAnalysis(obj) {
    const asConfidence = (v) => {
      const n = typeof v === 'number' ? v : Number(v)
      return Number.isFinite(n) ? n : 0
    }

    const icps = Array.isArray(obj?.icps) ? obj.icps : []
    const industries = Array.isArray(obj?.industries) ? obj.industries : []
    // Backward compatibility: allow either tags or keywords in model output.
    const tagLike = Array.isArray(obj?.tags) ? obj.tags : Array.isArray(obj?.keywords) ? obj.keywords : []

    const normalized = {
      icps: icps
        .map((x) => ({
          title: typeof x?.title === 'string' ? x.title : '',
          reasoning: typeof x?.reasoning === 'string' ? x.reasoning : '',
          confidence: asConfidence(x?.confidence),
        }))
        .filter((x) => x.title),
      industries: industries
        .map((x) => ({
          industry: typeof x?.industry === 'string' ? x.industry : '',
          code: x?.code == null ? '' : String(x.code),
          confidence: asConfidence(x?.confidence),
        }))
        .filter((x) => x.industry),
      tags: tagLike
        .map((x) => {
          if (typeof x === 'string') {
            return { name: x, confidence: 0.7 }
          }
          return {
            name: typeof x?.name === 'string' ? x.name : '',
            confidence: asConfidence(x?.confidence),
          }
        })
        .filter((x) => x.name && ALLOWED_TAG_SET.has(x.name)),
    }

    return normalized
  }

  async function callGroqAnalyze(websiteUrl, strictRetry = false) {
    if (!groqKey) throw new Error('Missing GROQ_API_KEY')

    const messages = [
      { role: 'system', content: GTM_ANALYZER_SYSTEM_PROMPT },
      { role: 'user', content: `Go to and analyze this website: ${websiteUrl}` },
    ]

    if (strictRetry) {
      messages.push({
        role: 'user',
        content: 'Return strictly valid JSON only, with keys: icps, industries, tags. Do not include markdown.',
      })
    }

    const body = {
      messages,
      model: groqModel,
      temperature: 0,
      max_completion_tokens: 8192,
      top_p: 1,
      stream: false,
      reasoning_effort: 'low',
      stop: null,
      tools: [{ type: 'browser_search' }],
    }

    const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${groqKey}`,
      },
      body: JSON.stringify(body),
    })

    const txt = await resp.text()
    if (!resp.ok) throw new Error(`Groq error: ${resp.status} ${txt.slice(0, 240)}`)
    const data = JSON.parse(txt)
    const content = data?.choices?.[0]?.message?.content
    if (!content) throw new Error('Groq returned no content')
    return normalizeAnalysis(extractJsonFromContent(content))
  }

  async function groqAnalyzeWebsite(websiteUrl) {
    try {
      return await callGroqAnalyze(websiteUrl, false)
    } catch {
      return callGroqAnalyze(websiteUrl, true)
    }
  }

  async function dealfrontPost(path, body) {
    if (!dealfrontToken) throw new Error('Missing DEALFRONT_BEARER_TOKEN')
    const resp = await fetch(`https://app.dealfront.com/t/backend/${path}`, {
      method: 'POST',
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json',
        authorization: `Bearer ${dealfrontToken}`,
      },
      body: JSON.stringify(body),
    })
    if (!resp.ok) {
      const txt = await resp.text()
      throw new Error(`Dealfront ${path} error: ${resp.status} ${txt.slice(0, 200)}`)
    }
    return resp.json()
  }

  async function mapTagsWithFacets(selectedTags) {
    const uniq = Array.from(new Set(selectedTags)).slice(0, 6)
    if (!uniq.length) return []

    const facets = await dealfrontPost('facets', {
      config: { values: uniq },
      currentFilter: 'KeywordFilter',
      deduplicateCompany: false,
      deduplicateEmployee: false,
      filters: {},
      profileId: null,
      searchId: 'proto',
    })

    const counts = facets?.companies?.facets?.keywords || {}
    const ranked = uniq
      .map((tag) => [tag, Number(counts[tag] || 0)])
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)

    return ranked.length ? ranked : uniq
  }

  async function searchCompaniesAndContacts(tagValues) {
    const filters = {
      KeywordFilter: {
        keywords: tagValues.map((value) => ({ mode: 'include', value })),
        operator: 'OR',
      },
    }

    const searchId = randomUUID()
    const companies = await dealfrontPost('search-companies', {
      filters,
      interests: [
        {
          count: 20,
          deduplicate: false,
          groupingMode: null,
          numFound: true,
          offset: 0,
          sorting: 'score desc',
          type: 'companies',
          wideMatch: false,
        },
      ],
      profileId: '',
      searchId,
    })

    const contacts = await dealfrontPost('search-contacts', {
      filters,
      interests: [
        {
          count: 20,
          deduplicate: false,
          include: 'companies',
          numFound: true,
          offset: 0,
          sorting: 'score desc',
          type: 'contacts',
          wideMatch: false,
        },
      ],
      profileId: '',
      searchId,
    })

    return { filters, companies, contacts }
  }

  return {
    name: 'dealfront-prototype-api',
    configureServer(server) {
      server.middlewares.use('/api/prototype/search', async (req, res) => {
        try {
          if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method Not Allowed' })

          const { websiteUrl } = await readJson(req)
          if (!websiteUrl || typeof websiteUrl !== 'string') {
            return sendJson(res, 400, { error: 'websiteUrl is required' })
          }

          let url
          try {
            url = new URL(websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`)
          } catch {
            return sendJson(res, 400, { error: 'Invalid URL' })
          }

          const analysis = await groqAnalyzeWebsite(url.toString())

          const tagObjs = Array.isArray(analysis?.tags) ? analysis.tags : []
          let selectedTags = tagObjs
            .filter((tag) => ALLOWED_TAG_SET.has(tag?.name) && (tag?.confidence ?? 0) > 0.6)
            .sort((a, b) => (b.confidence ?? 0) - (a.confidence ?? 0))
            .slice(0, 6)
            .map((tag) => tag.name)

          let selectionWarning = null
          if (!selectedTags.length) {
            selectedTags = tagObjs
              .filter((tag) => ALLOWED_TAG_SET.has(tag?.name))
              .sort((a, b) => (b.confidence ?? 0) - (a.confidence ?? 0))
              .slice(0, 1)
              .map((tag) => tag.name)
            if (selectedTags.length) {
              selectionWarning = 'Groq returned no tags above 0.6 confidence; using the top tag anyway.'
            }
          }

          if (!selectedTags.length) {
            return sendJson(res, 422, {
              error: 'Groq analysis returned no valid tags. Try another website URL.',
              analysis,
            })
          }

          let mappedTags = []
          let results = null
          try {
            mappedTags = await mapTagsWithFacets(selectedTags)
            results = await searchCompaniesAndContacts(mappedTags)
          } catch (dfError) {
            return sendJson(res, 502, {
              error: dfError?.message || 'Dealfront request failed',
              websiteUrl: url.toString(),
              analysis,
              selectedTags,
              mappedTags,
              mappedKeywords: mappedTags,
              selectionWarning,
              dealfront: null,
            })
          }

          return sendJson(res, 200, {
            websiteUrl: url.toString(),
            analysis,
            selectedTags,
            mappedTags,
            // Backward compatibility with existing UI keys.
            mappedKeywords: mappedTags,
            selectionWarning,
            dealfront: {
              filters: results.filters,
              companies: results.companies?.companies || null,
              contacts: results.contacts?.contacts || null,
            },
          })
        } catch (e) {
          return sendJson(res, 500, { error: e?.message || 'Unknown error' })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), dealfrontPrototypeApiPlugin(env)],
  }
})
