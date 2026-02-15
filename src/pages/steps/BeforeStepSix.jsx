import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, DfBadge, DfButton, OnboardingCard } from '../../components/primitives'

const BEFORE_PERSONA_ITEMS = [
  {
    name: 'Platform Engineer',
    departments: ['Engineering'],
    seniority: ['Senior', 'Lead'],
    keywords: ['Platform Engineer', 'Principal Engineer'],
  },
  {
    name: 'CTO / VP of Engineering',
    departments: ['Management', 'Engineering'],
    seniority: ['Top Management'],
    keywords: ['CTO', 'VP of Engineering', 'Director of Engineering'],
  },
  {
    name: 'Product Manager',
    departments: ['Product'],
    seniority: ['Manager', 'Senior'],
    keywords: ['Product Manager', 'Head of Product'],
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

export function BeforeStepSix({ nav }) {
  return (
    <OnboardingCard
      step={6}
      heading="Your Buyer Personas"
      description="These are the key decision makers from your target accounts."
      icon={<SparklesIcon />}
    >
      <div className="space-y-4">
        {BEFORE_PERSONA_ITEMS.map((item) => (
          <BeforeEntityCard
            key={item.name}
            title={item.name}
            groups={[
              { title: 'Departments', values: item.departments },
              { title: 'Seniority', values: item.seniority },
              { title: 'Job Title Keywords', values: item.keywords },
            ]}
          />
        ))}
      </div>
      <DfButton variant="outline" className="mt-5 w-full">
        Add Buyer Persona
      </DfButton>
      <BackContinueFooter
        finish
        onBack={nav.onBack}
        onNext={nav.onNext}
        disableBack={nav.disableBack}
        disableNext={nav.disableNext}
      />
    </OnboardingCard>
  )
}
