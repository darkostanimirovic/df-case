import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, DfButton, DfInput, DfLabel, OnboardingCard } from '../../components/primitives'
import { BEFORE_ROLES } from '../../constants/onboardingData'

export function BeforeStepTwo({ nav }) {
  return (
    <OnboardingCard
      step={2}
      heading="Tell us about yourself"
      description="Help us personalize your Dealfront experience for better recommendations."
      icon={<SparklesIcon />}
    >
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DfInput label="First name" placeholder="John" inputClassName="input-text-validated" />
          <DfInput label="Last name" placeholder="Doe" inputClassName="input-text-validated" />
        </div>
        <div className="space-y-2">
          <DfLabel>Phone number</DfLabel>
          <div className="review-phone-input">
            <div className="review-phone-prefix">
              <span className="text-lg">🇷🇸</span>
              <span className="text-sm font-medium">+381</span>
            </div>
            <DfInput type="tel" placeholder="601234567" className="flex-1" />
          </div>
        </div>
        <div className="space-y-2">
          <DfLabel>What&apos;s your role?</DfLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {BEFORE_ROLES.map((role) => (
              <DfButton key={role} variant="outline" className="justify-center">
                {role}
              </DfButton>
            ))}
          </div>
        </div>
      </form>
      <BackContinueFooter onBack={nav.onBack} onNext={nav.onNext} disableBack={nav.disableBack} disableNext={nav.disableNext} />
    </OnboardingCard>
  )
}
