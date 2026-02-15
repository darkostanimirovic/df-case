import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, DfButton, OnboardingCard } from '../../components/primitives'
import { DestinationOption } from '../../components/onboarding'
import { getGoalStep3Content } from '../../utils/onboardingHelpers'

// Import CRM_OPTIONS from constants or define locally
const CRM_OPTIONS = ['Pipedrive', 'Dynamics 365', 'Zoho', 'HubSpot', 'Salesforce', 'Other']

export function AfterStepThree({
  selectedGoal,
  selectedDestination,
  onSelectDestination,
  selectedCrm,
  onSelectCrm,
  nav,
}) {
  const step3Content = getGoalStep3Content(selectedGoal)

  return (
    <OnboardingCard
      step={3}
      heading={step3Content.heading}
      description={step3Content.description}
      icon={<SparklesIcon />}
    >
      <div className="space-y-3">
        {step3Content.options.map((option) => (
          <DestinationOption
            key={option.id}
            option={option}
            selected={selectedDestination === option.id}
            onSelect={onSelectDestination}
            expanded={option.id === 'crm' && selectedDestination === 'crm'}
          >
            {option.id === 'crm' ? (
              <div className="review-crm-inline-options">
                {CRM_OPTIONS.map((crm) => (
                  <DfButton
                    key={crm}
                    variant={selectedCrm === crm ? 'filled' : 'outline'}
                    size="small"
                    className={selectedCrm === crm ? 'bg-platform-primary-600 text-white' : ''}
                    onClick={() => onSelectCrm(crm)}
                  >
                    {crm}
                  </DfButton>
                ))}
              </div>
            ) : null}
          </DestinationOption>
        ))}
      </div>
      <BackContinueFooter onBack={nav.onBack} onNext={nav.onNext} disableBack={nav.disableBack} disableNext={nav.disableNext} />
    </OnboardingCard>
  )
}
