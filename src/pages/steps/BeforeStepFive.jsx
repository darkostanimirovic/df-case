import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, DfBadge, DfButton, OnboardingCard } from '../../components/primitives'

const BEFORE_ICP_ITEMS = [
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

function BeforeEntityCard({ title, groups }) {
  return (
    <div className="review-entity-card">
      <div className="review-entity-card-title">{title}</div>
      {groups.map((group) => (
        <div key={`${title}-${group.title}`} className="review-entity-group">
          <div className="review-entity-group-title">{group.title}</div>
          <div className="review-badge-wrap">
            {group.values.map((value) => (
              <DfBadge key={`${group.title}-${value}`}>{value}</DfBadge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function BeforeStepFive({ nav }) {
  return (
    <OnboardingCard
      step={5}
      heading="Your Ideal Customer Profiles"
      description="We've identified your best-fit prospects based on your current customer patterns."
      icon={<SparklesIcon />}
    >
      <div className="space-y-4">
        {BEFORE_ICP_ITEMS.map((item) => (
          <BeforeEntityCard
            key={item.name}
            title={item.name}
            groups={[
              { title: 'Industries', values: item.industries },
              { title: 'Company Attributes', values: item.attributes },
            ]}
          />
        ))}
      </div>
      <DfButton variant="outline" className="mt-5 w-full">
        Add Ideal Customer Profile
      </DfButton>
      <BackContinueFooter onBack={nav.onBack} onNext={nav.onNext} disableBack={nav.disableBack} disableNext={nav.disableNext} />
    </OnboardingCard>
  )
}
