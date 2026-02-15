// Before Flow Data
export const BEFORE_ROLES = ['Sales', 'Executive', 'Webmaster', 'Marketing', 'Operations', 'Marketing Agency', 'Other']
export const BEFORE_SALES_SIZES = ['1', '2-4', '5-20', '20+', 'No team']
export const BEFORE_CRM_SYSTEMS = ['Pipedrive', 'Dynamics 365', 'Zoho', 'HubSpot', 'Salesforce', 'None', 'Other']
export const CRM_OPTIONS = BEFORE_CRM_SYSTEMS.filter((crm) => crm !== 'None')
export const DEFAULT_CRM = 'HubSpot'
export const BEFORE_HIGH_INTENT_ROWS = ['/pricing', '/enterprise', '/book-demo', '/solutions', '/customer-stories']

export const BEFORE_ICP_ITEMS = [
  {
    name: 'Enterprise & Mid-Market Software Development Teams',
    industries: ['IT Services', 'Software Development', 'SaaS', 'Cloud Platforms', '+9 more'],
    attributes: ['51-200', '201-500', '500+', 'B2B'],
  },
  {
    name: 'High-Growth Startups & Scale-Ups',
    industries: ['SaaS', 'FinTech', 'AI', 'Developer Tools'],
    attributes: ['11-50', '51-200', 'Series A-C'],
  },
]

export const BEFORE_PERSONA_ITEMS = [
  {
    id: "engineering-leadership",
    name: "Engineering Decision-Makers",
    recommended: true,
    contactCount: 3104,
    seniorityLevel: "C-level / VP / Director",
    roles: ["CTO", "VP of Engineering", "Director of Engineering"],
    buyingPower: "Decision-maker",
    budgetInfluence: "78% have direct budget authority",
    explanation:
      "Typically make final purchasing decisions for technical tools and infrastructure.",
    hierarchyLevel: 5,
    hierarchyLabel: "Decision-maker",
  },
  {
    id: "technical-influencers",
    name: "Technical Evaluators",
    recommended: false,
    contactCount: 5842,
    seniorityLevel: "Senior / Lead / Principal",
    roles: [
      "Platform Engineer",
      "DevOps Lead",
      "Site Reliability Engineer",
      "Principal Engineer",
    ],
    buyingPower: "Influencer",
    budgetInfluence: "Often evaluate tools and influence purchase",
    explanation:
      "Evaluate solutions, run POCs, and strongly influence technical buying decisions.",
    hierarchyLevel: 4,
    hierarchyLabel: "Evaluator",
  },
  {
    id: "product-leadership",
    name: "Product & Growth Leaders",
    recommended: false,
    contactCount: 2680,
    seniorityLevel: "Director / Head / VP",
    roles: [
      "VP Product",
      "Head of Product",
      "Director of Product",
      "Head of Growth",
    ],
    buyingPower: "Budget holder",
    budgetInfluence: "65% control product tool budgets",
    explanation:
      "Own product strategy and often control budgets for product analytics and growth tools.",
    hierarchyLevel: 5,
    hierarchyLabel: "Budget holder",
  },
];

// Goal Cards
export const GOAL_CARDS = [
  {
    id: 'identify-visitors',
    title: 'See which companies visit my website',
    subtitle: 'Reveal anonymous visitors, surface decision-makers, and start outreach with context.',
  },
  {
    id: 'route-intent',
    title: 'Send high-intent visitors to sales',
    subtitle: 'Route buying signals to Slack or CRM so reps can respond while intent is fresh.',
  },
  {
    id: 'scoring-automation',
    title: 'Set up scoring & automation',
    subtitle: 'Score accounts, enrich contacts, and trigger downstream workflows automatically.',
  },
]

// Goal-Specific Content
export const GOAL_STEP3_CONTENT = {
  'identify-visitors': {
    heading: 'How would you like to review new visitor matches first?',
    description: 'Choose where Dealfront should deliver company insights so you can reach out manually.',
    options: [
      { id: 'email', label: 'Email digest', helper: 'Receive daily/weekly summaries with company names, pages visited, and quick links.' },
      { id: 'slack', label: 'Slack updates', helper: 'Post matched companies in a channel so your team can qualify visitors together.' },
      { id: 'crm', label: 'CRM handoff', helper: 'Push identified companies into CRM as accounts/leads and review visit notes there.' },
      { id: 'dashboard', label: 'Dealfront dashboard only', helper: 'Start by reviewing matched companies directly in Leadfeeder custom feeds.' },
    ],
  },
  'route-intent': {
    heading: 'Where should high-intent visitor alerts be routed?',
    description: 'This controls where sales gets notified first when target accounts hit key pages.',
    options: [
      { id: 'email', label: 'Instant email alerts', helper: 'Notify reps with high-intent visits and suggested follow-up context.' },
      { id: 'slack', label: 'Route to Slack channel', helper: 'Send real-time alerts to your sales channel for fast response.' },
      { id: 'crm', label: 'Create CRM activity', helper: 'Send matched companies to CRM and attach visit data for rep workflows.' },
      { id: 'dashboard', label: 'Queue in dashboard', helper: 'Keep alerts in Dealfront first while you finalize routing rules.' },
    ],
  },
  'scoring-automation': {
    heading: 'Where should automation outcomes be delivered first?',
    description: 'Pick the destination that will receive scored companies and trigger follow-up actions.',
    options: [
      { id: 'email', label: 'Automation status by email', helper: 'Get summaries showing which accounts matched your scoring logic.' },
      { id: 'slack', label: 'Automation feed in Slack', helper: 'Post rule matches to Slack with priority context for your team.' },
      { id: 'crm', label: 'Enroll in CRM workflows', helper: 'Send scored accounts to CRM for lifecycle stages, tasks, and ownership.' },
      { id: 'dashboard', label: 'Score in dashboard first', helper: 'Run scoring inside Dealfront now and connect downstream tools later.' },
    ],
  },
}

export const GOAL_DEFAULT_DESTINATION = {
  'identify-visitors': 'email',
  'route-intent': 'slack',
  'scoring-automation': 'crm',
}

// After Flow Data
export const AFTER_DEFAULT_PAGES = ['/pricing', '/book-demo', '/enterprise', '/solutions', '/customer-stories', '/contact-sales']

// Goal-specific ICP step configuration
export const ICP_STEP_CONFIG = {
  "identify-visitors": {
    heading: "Choose Your First Growth Segments",
    description:
      "We've identified companies that look like your best-fit buyers. When they visit your website, you'll see them instantly.",
    ctaLabel: "Start with this segment",
    footerHint:
      "You'll be able to identify these companies when they visit your site and access verified contacts instantly.",
  },
  "route-intent": {
    heading: "Choose the ICP to Activate",
    description:
      "These segments are built from your website + industry signals. They align with your CRM and can trigger routing automatically.",
    ctaLabel: "Activate this ICP",
    footerHint:
      "When companies like these show buying intent, you can route them directly to sales.",
  },
  "scoring-automation": {
    heading: "Select a Segment to Operationalize",
    description:
      "This segment can be used in scoring, enrichment, and routing workflows.",
    ctaLabel: "Operationalize this ICP",
    footerHint:
      "Fully usable across enrichment, scoring, and audience building.",
  },
};

// ICP Segments Data
export const ICP_SEGMENTS = [
  {
    id: 'cloud-native',
    name: 'Cloud-Native Engineering Teams',
    recommended: true,
    companies: 4320,
    contacts: 12847,
    decisionMakers: 3104,
    decisionMakerLabel: 'engineering decision-makers',
    sizeDistribution: [
      { range: '51–200 employees', percent: 38 },
      { range: '201–500 employees', percent: 24 },
      { range: '500+', percent: 14 },
    ],
    industries: ['B2B SaaS', 'DevOps Consulting', 'IT Services'],
    commonRoles: [
      { title: 'Site Reliability Engineer', count: 1240 },
      { title: 'DevOps Lead', count: 892 },
      { title: 'VP Engineering', count: 972 },
    ],
    availableAttributes: [
      'Industry classification',
      'Company size bands',
      'Seniority levels',
      'Technology tags',
      'Revenue range',
    ],
    crmNote: 'Works with HubSpot & Salesforce enrichment. Can trigger Slack or email alerts.',
    automationNote: 'Usable in scoring rules. Compatible with CRM sync. Available for enrichment workflows.',
  },
  {
    id: 'revenue-ops',
    name: 'Revenue Operations Leaders',
    recommended: false,
    companies: 2980,
    contacts: 8214,
    decisionMakers: 1980,
    decisionMakerLabel: 'revenue leaders',
    sizeDistribution: [
      { range: '51–200 employees', percent: 32 },
      { range: '201–500 employees', percent: 28 },
      { range: '500+', percent: 18 },
    ],
    industries: ['Computer Software', 'IT Consulting', 'Financial Services'],
    commonRoles: [
      { title: 'Head of Revenue Operations', count: 620 },
      { title: 'VP Sales Operations', count: 740 },
      { title: 'Director of GTM', count: 620 },
    ],
    availableAttributes: [
      'Industry classification',
      'Company size bands',
      'Seniority levels',
      'Tech stack indicators',
      'Revenue range',
    ],
    crmNote: 'Works with HubSpot, Salesforce, and Dynamics. Can route to Slack channels.',
    automationNote: 'Usable in scoring rules. Compatible with CRM sync. Available for enrichment workflows.',
  },
  {
    id: 'mid-market-saas',
    name: 'Mid-Market SaaS Operators',
    recommended: false,
    companies: 3650,
    contacts: 10240,
    decisionMakers: 2560,
    decisionMakerLabel: 'SaaS decision-makers',
    sizeDistribution: [
      { range: '51–200 employees', percent: 42 },
      { range: '201–500 employees', percent: 30 },
      { range: '500+', percent: 12 },
    ],
    industries: ['SaaS', 'FinTech', 'E-Learning Providers'],
    commonRoles: [
      { title: 'Head of Growth', count: 890 },
      { title: 'Product Manager', count: 920 },
      { title: 'VP Marketing', count: 750 },
    ],
    availableAttributes: [
      'Industry classification',
      'Company size bands',
      'Seniority levels',
      'Funding stage',
      'Revenue range',
    ],
    crmNote: 'Works with HubSpot & Salesforce enrichment. Can trigger Slack or email alerts.',
    automationNote: 'Usable in scoring rules. Compatible with CRM sync. Available for enrichment workflows.',
  },
]

// Backwards compatibility mapping
export const AFTER_ICP_OPTIONS = ICP_SEGMENTS.map((seg) => ({
  id: seg.id,
  name: seg.name,
  targetCompanies: seg.companies,
  weeklyMatches: `${Math.round(seg.companies / 300)}-${Math.round(seg.companies / 200)} companies per week`,
  industries: seg.industries.map((ind) => ({ name: ind, trend: 'up', trendLabel: 'Growing', attributes: [] })),
}))

// Persona Data
export const AFTER_PERSONAS = [
  {
    id: "engineering-leadership",
    name: "Engineering Decision-Makers",
    contactCount: 3104,
    reachable: 2847,
    seniorityLevel: "C-level / VP / Director",
    buyingCommitteeRole: "Decision-maker",
    budgetInfluence: "78% have direct budget authority",
    explanation:
      "Typically make final purchasing decisions for technical tools and infrastructure.",
    hierarchyLevel: 5,
    hierarchyLabel: "Decision-maker",
    crmCompatible: true,
    roles: ["CTO", "VP of Engineering", "Director of Engineering"],
    exampleContact: {
      name: "Sarah Chen",
      title: "VP of Engineering",
      companySize: "180 employees",
      location: "Germany",
    },
  },
  {
    id: "technical-influencers",
    name: "Technical Evaluators",
    contactCount: 5842,
    reachable: 5320,
    seniorityLevel: "Senior / Lead / Principal",
    buyingCommitteeRole: "Evaluator",
    budgetInfluence: "Often involved in tool comparison and evaluation",
    explanation:
      "Evaluate solutions, run POCs, and strongly influence technical buying decisions.",
    hierarchyLevel: 4,
    hierarchyLabel: "Evaluator",
    crmCompatible: true,
    roles: ["DevOps Lead", "Platform Engineer", "Site Reliability Engineer"],
    exampleContact: {
      name: "Marcus Weber",
      title: "Principal Platform Engineer",
      companySize: "220 employees",
      location: "Netherlands",
    },
  },
  {
    id: "product-leadership",
    name: "Product & Growth Leaders",
    contactCount: 2680,
    reachable: 2450,
    seniorityLevel: "Director / Head / VP",
    buyingCommitteeRole: "Budget holder",
    budgetInfluence: "65% control product tool budgets",
    explanation:
      "Own product strategy and often control budgets for product analytics and growth tools.",
    hierarchyLevel: 5,
    hierarchyLabel: "Budget holder",
    crmCompatible: true,
    roles: ["VP Product", "Head of Growth", "Director of Product"],
    exampleContact: {
      name: "Emma Thompson",
      title: "Head of Product Growth",
      companySize: "95 employees",
      location: "United Kingdom",
    },
  },
];
