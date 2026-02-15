import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, DfButton, DfLabel, OnboardingCard } from '../../components/primitives'
import { BeforeCrmIcon } from '../../components/onboarding'
import { BEFORE_CRM_SYSTEMS, BEFORE_SALES_SIZES } from '../../constants/onboardingData'

export function BeforeStepThree({ nav }) {
  return (
    <OnboardingCard
      step={3}
      heading="Tell us about your sales operations"
      description="Help us understand your current setup."
      icon={<SparklesIcon />}
    >
      <form className="space-y-6">
        <div className="space-y-2">
          <DfLabel>How big is your sales team?</DfLabel>
          <div className="grid grid-cols-5 gap-2">
            {BEFORE_SALES_SIZES.map((size) => (
              <DfButton key={size} variant="outline" className="justify-center">
                {size}
              </DfButton>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <DfLabel>Which CRM system does your company use?</DfLabel>
          <div className="grid grid-cols-4 gap-2">
            {BEFORE_CRM_SYSTEMS.map((crm) => (
              <DfButton key={crm} variant="outline" className="flex !h-full flex-col items-center justify-center gap-1 !py-4">
                <BeforeCrmIcon crm={crm} />
                <span>{crm}</span>
              </DfButton>
            ))}
          </div>
        </div>
      </form>
      <BackContinueFooter onBack={nav.onBack} onNext={nav.onNext} disableBack={nav.disableBack} disableNext={nav.disableNext} />
    </OnboardingCard>
  )
}
