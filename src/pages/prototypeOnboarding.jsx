import { useMemo, useState } from 'react'
import { AppShell } from '../components/layout'
import { DfButton, DfInput } from '../components/primitives'

function SkeletonLine({ w = 'w-full' }) {
  return <div className={`df-skeleton h-3 ${w}`.trim()} />
}

function SkeletonCard() {
  return (
    <div className="rounded border border-solid border-platform-neutral-200 bg-white p-4 space-y-3">
      <div className="flex items-center gap-3">
        <div className="df-skeleton h-10 w-10 rounded" />
        <div className="flex-1 space-y-2">
          <SkeletonLine w="w-3/5" />
          <SkeletonLine w="w-2/5" />
        </div>
      </div>
      <SkeletonLine w="w-4/5" />
      <SkeletonLine w="w-3/4" />
    </div>
  )
}

function CompanyRow({ company }) {
  return (
    <div className="rounded border border-solid border-platform-neutral-200 bg-white p-4 flex items-center gap-4">
      <div className="h-10 w-10 rounded bg-platform-neutral-100 overflow-hidden flex items-center justify-center">
        {company.logoUrl ? (
          <img src={company.logoUrl} alt="" className="h-10 w-10 object-cover" />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-platform-neutral-700 truncate">{company.companyName || company.tradeName}</div>
        <div className="text-xs text-platform-neutral-400 truncate">
          {company.url ? (
            <a className="link link-blue-light-mode" href={company.url} target="_blank" rel="noreferrer noopener">
              {company.url.replace(/^https?:\/\//, '')}
            </a>
          ) : null}
          {company.location || company.countryCode ? (
            <span className="ml-2">
              {company.location ? company.location : null}
              {company.location && company.countryCode ? ', ' : null}
              {company.countryCode ? company.countryCode : null}
            </span>
          ) : null}
        </div>
      </div>
      <DfButton variant="outline" size="small">
        View
      </DfButton>
    </div>
  )
}

function ContactRow({ contact }) {
  const name = contact.fullName || [contact.firstName, contact.lastName].filter(Boolean).join(' ')
  return (
    <div className="rounded border border-solid border-platform-neutral-200 bg-white p-4 flex items-start justify-between gap-4">
      <div className="min-w-0">
        <div className="font-semibold text-platform-neutral-700 truncate">{name || 'Unknown contact'}</div>
        <div className="text-xs text-platform-neutral-400 truncate">
          {contact.jobTitle ? <span>{contact.jobTitle}</span> : null}
          {contact.jobTitle && contact.companyName ? <span className="mx-1">·</span> : null}
          {contact.companyName ? <span>{contact.companyName}</span> : null}
        </div>
        <div className="text-xs text-platform-neutral-400 mt-2">
          {contact.email ? <span className="mr-3">{contact.email}</span> : null}
          {contact.phone ? <span>{contact.phone}</span> : null}
        </div>
      </div>
      <DfButton variant="outline" size="small">
        Add
      </DfButton>
    </div>
  )
}

export function PrototypeOnboardingPage({ onNavigate }) {
  const [websiteUrl, setWebsiteUrl] = useState('vercel.com')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const companies = data?.dealfront?.companies?.results || []
  const contacts = data?.dealfront?.contacts?.results || []
  const mappedTags = data?.mappedTags || data?.mappedKeywords || []
  const selectedTags = data?.selectedTags || []
  const selectionWarning = data?.selectionWarning || null
  const analysis = data?.analysis || null

  const loadingLabel = useMemo(() => {
    if (status !== 'loading') return null
    return 'Analyzing your website with Groq browser tool, mapping tags, and fetching matches…'
  }, [status])

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setStatus('loading')
    setData(null)

    try {
      const resp = await fetch('/api/prototype/search', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ websiteUrl }),
      })
      const json = await resp.json()
      if (!resp.ok) throw new Error(json?.error || 'Request failed')
      setData(json)
      setStatus('done')
    } catch (err) {
      setError(err?.message || 'Unknown error')
      setStatus('error')
    }
  }

  return (
    <AppShell>
      <div className="bg-platform-neutral-100 w-full flex-1">
        <div className="text-platform-neutral-600 flex max-w-[980px] w-full flex-col gap-2 mx-auto px-6 py-6">
          <section className="full-screen-panel full-screen-panel--wide flex flex-col gap-2.5 !mx-0 mt-4">
            <div className="full-screen-panel__main--with-shadow bg-white">
              <article className="full-screen-panel-body flex-column gap-double flex">
                <div className="gap-single flex flex-col">
                  <h2 className="u-reset-heading font-platform-header text-platform-neutral-700 text-lg font-semibold">
                    Find your best-fit companies instantly
                  </h2>
                  <p className="u-reset-p text-sm">
                    Enter your website URL. We infer ICPs, LinkedIn industries, and tags with Groq, then fetch matching companies and contacts from Dealfront.
                  </p>
                </div>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <DfInput
                        label="Your website"
                        value={websiteUrl}
                        onChange={(ev) => setWebsiteUrl(ev.target.value)}
                        inputClassName="input-text-validated"
                        placeholder="example.com"
                      />
                    </div>
                    <DfButton variant="filled" type="submit" className="whitespace-nowrap">
                      Next
                    </DfButton>
                  </div>
                  {loadingLabel ? <div className="text-xs text-platform-neutral-400">{loadingLabel}</div> : null}
                  {error ? <div className="text-xs text-platform-danger">{error}</div> : null}
                </form>

                {status === 'loading' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="space-y-3">
                      <div className="font-semibold text-platform-neutral-700">Companies</div>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <SkeletonCard key={`c-skel-${i}`} />
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div className="font-semibold text-platform-neutral-700">Contacts</div>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <SkeletonCard key={`p-skel-${i}`} />
                      ))}
                    </div>
                  </div>
                ) : null}

                {status === 'done' ? (
                  <div className="space-y-6 pt-4">
                    {analysis ? (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded border border-solid border-platform-neutral-200 bg-white p-4 space-y-2">
                          <div className="font-semibold text-platform-neutral-700">ICPs</div>
                          <div className="space-y-2">
                            {(analysis.icps || []).slice(0, 6).map((icp) => (
                              <div key={icp.title} className="text-sm">
                                <div className="font-semibold text-platform-neutral-700">{icp.title}</div>
                                <div className="text-xs text-platform-neutral-400">{icp.reasoning}</div>
                              </div>
                            ))}
                            {!(analysis.icps || []).length ? <div className="text-xs text-platform-neutral-400">None</div> : null}
                          </div>
                        </div>

                        <div className="rounded border border-solid border-platform-neutral-200 bg-white p-4 space-y-2">
                          <div className="font-semibold text-platform-neutral-700">Industries</div>
                          <div className="space-y-2">
                            {(analysis.industries || []).slice(0, 10).map((ind, idx) => (
                              <div key={ind.industry} className="text-sm text-platform-neutral-700">
                                {idx + 1}. {ind.industry}
                                {ind.code ? (
                                  <>
                                    {' '}
                                    <span className="text-xs text-platform-neutral-400">[{ind.code}]</span>
                                  </>
                                ) : null}{' '}
                                <span className="text-xs text-platform-neutral-400">({Math.round((ind.confidence || 0) * 100)}%)</span>
                              </div>
                            ))}
                            {!(analysis.industries || []).length ? <div className="text-xs text-platform-neutral-400">None</div> : null}
                          </div>
                        </div>

                        <div className="rounded border border-solid border-platform-neutral-200 bg-white p-4 space-y-2">
                          <div className="font-semibold text-platform-neutral-700">Groq tags</div>
                          <div className="space-y-2">
                            {(analysis.tags || analysis.keywords || []).slice(0, 6).map((tag) => (
                              <div key={tag.name} className="text-sm text-platform-neutral-700">
                                {tag.name}{' '}
                                <span className="text-xs text-platform-neutral-400">({Math.round((tag.confidence || 0) * 100)}%)</span>
                              </div>
                            ))}
                            {!((analysis.tags || analysis.keywords || []).length) ? <div className="text-xs text-platform-neutral-400">None</div> : null}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {selectionWarning ? (
                      <div className="rounded border border-solid border-platform-neutral-200 bg-platform-neutral-50 p-3 text-xs text-platform-neutral-600">
                        {selectionWarning}
                      </div>
                    ) : null}

                    <div className="rounded border border-solid border-platform-neutral-200 bg-platform-neutral-50 p-4">
                      <div className="text-xs text-platform-neutral-400">Selected tags (Groq)</div>
                      <div className="text-sm text-platform-neutral-700 mt-1">
                        {selectedTags.length ? selectedTags.join(', ') : 'None'}
                      </div>
                    </div>

                    <div className="rounded border border-solid border-platform-neutral-200 bg-platform-neutral-50 p-4">
                      <div className="text-xs text-platform-neutral-400">Mapped Dealfront tags</div>
                      <div className="text-sm text-platform-neutral-700 mt-1">
                        {mappedTags.length ? mappedTags.join(', ') : 'None'}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-platform-neutral-700">Companies</div>
                          <div className="text-xs text-platform-neutral-400">{companies.length} shown</div>
                        </div>
                        <div className="space-y-3">
                          {companies.map((c) => (
                            <CompanyRow key={c.id} company={c} />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-platform-neutral-700">Contacts</div>
                          <div className="text-xs text-platform-neutral-400">{contacts.length} shown</div>
                        </div>
                        <div className="space-y-3">
                          {contacts.map((c) => (
                            <ContactRow key={c.id} contact={c} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <div className="text-sm text-platform-neutral-600">
                        Want alerts when these companies visit your website?
                      </div>
                      <DfButton
                        variant="filled"
                        className="bg-platform-primary-600 hover:bg-platform-primary-700 text-white"
                        type="button"
                        onClick={() => onNavigate?.('step-7')}
                      >
                        Alert when they visit my website
                      </DfButton>
                    </div>
                  </div>
                ) : null}
              </article>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  )
}
