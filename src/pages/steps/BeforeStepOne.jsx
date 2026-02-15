import { GlobeIcon } from '../../components/icons'
import { BackContinueFooter, DfButton, DfInput, OnboardingCard } from '../../components/primitives'

export function BeforeStepOne({ companyName, websiteUrl, onCompanyNameChange, onWebsiteChange, nav }) {
  function handleSubmit(event) {
    event.preventDefault()
    nav.onNext()
  }

  return (
    <OnboardingCard
      step={1}
      heading="Welcome to Dealfront!"
      description="Let's get your account set up."
      icon={<GlobeIcon />}
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <DfInput
          label="Company name"
          value={companyName}
          onChange={(event) => onCompanyNameChange(event.target.value)}
          placeholder="Your company name"
          inputClassName="input-text-validated"
        />
        <DfInput
          label="Website address"
          prepend="http(s)://"
          value={websiteUrl}
          onChange={(event) => onWebsiteChange(event.target.value)}
          placeholder="yourcompany.com"
          inputClassName="input-text-validated !rounded-bl-none !rounded-tl-none"
        />
        <span className="text-xs">We&apos;ll analyze your site to provide personalized insights.</span>
        <div className="flex justify-end border-t-platform-neutral-200 mt-8 border-t border-solid pt-6">
          <DfButton variant="filled" type="submit">Continue</DfButton>
        </div>
      </form>
    </OnboardingCard>
  )
}
