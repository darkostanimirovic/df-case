import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, DfButton, OnboardingCard } from '../../components/primitives'
import { AFTER_PERSONAS } from '../../constants/onboardingData'

function HierarchyBar({ level, label }) {
  const bars = Array(5)
    .fill(0)
    .map((_, i) => i < level)

  return (
    <div className="persona-hierarchy">
      <div className="persona-hierarchy-bars">
        {bars.map((filled, i) => (
          <div key={i} className={`persona-hierarchy-bar ${filled ? 'persona-hierarchy-bar--filled' : ''}`.trim()} />
        ))}
      </div>
      <div className="persona-hierarchy-label">{label}</div>
    </div>
  )
}

function EngagementModule({ persona, isAdded, onToggle }) {
  return (
    <div className={`persona-engage-module ${isAdded ? 'persona-engage-module--selected' : ''}`.trim()}>
      <div className="persona-engage-head">
        <div className="persona-engage-title">{persona.name}</div>
        <DfButton
          variant={isAdded ? 'filled' : 'outline'}
          size="small"
          className={isAdded ? 'bg-platform-primary-600 text-white min-w-24' : 'min-w-24'}
          onClick={onToggle}
        >
          {isAdded ? 'Added Buyer' : 'Add Buyer'}
        </DfButton>
      </div>

      <div className="persona-engage-count">
        <span className="persona-engage-count-number">{persona.contactCount.toLocaleString()}</span> contacts available
        after install
      </div>

      <div className="persona-engage-body">
        <div className="persona-engage-sections-row">
          <div className="persona-engage-section">
            <div className="persona-engage-label">Roles include:</div>
            <div className="persona-engage-roles">
              {persona.roles.map((role) => (
                <div key={role} className="persona-engage-role">
                  {role}
                </div>
              ))}
            </div>
          </div>

          <div className="persona-engage-section">
            <div className="persona-engage-label">Buying power:</div>
            <div className="persona-engage-value">{persona.budgetInfluence}</div>
            <HierarchyBar level={persona.hierarchyLevel} label={persona.hierarchyLabel} />
          </div>
        </div>

        <div className="persona-engage-insight">💡 {persona.explanation}</div>
      </div>
    </div>
  )
}

export function AfterStepSix({ selectedPersonas, onSelectPersonas, nav }) {
  const handleToggle = (personaId) => {
    if (selectedPersonas.includes(personaId)) {
      onSelectPersonas(selectedPersonas.filter((id) => id !== personaId))
    } else {
      onSelectPersonas([...selectedPersonas, personaId])
    }
  }

  return (
    <OnboardingCard
      step={6}
      heading="Choose Who You Want to Engage"
      description="When companies from your ICP visit, we'll surface the right people inside them."
      icon={<SparklesIcon />}
    >
      <div className="space-y-4 mt-5">
        {AFTER_PERSONAS.map((persona) => (
          <EngagementModule
            key={persona.id}
            persona={persona}
            isAdded={selectedPersonas.includes(persona.id)}
            onToggle={() => handleToggle(persona.id)}
          />
        ))}
      </div>

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
