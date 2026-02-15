import { GlobeIcon } from '../../components/icons'
import { DfButton, DfInput, OnboardingCard } from '../../components/primitives'

export function AfterStepOne({ companyName, websiteUrl, onCompanyNameChange, onWebsiteChange, nav }) {
  function handleSubmit(event) {
    event.preventDefault()
    nav.onNext()
  }

  return (
    <OnboardingCard
      step={1}
      heading="Turn website visitors into sales opportunities"
      description="Which website do you want to grow?"
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
          label="Your website"
          value={websiteUrl}
          onChange={(event) => onWebsiteChange(event.target.value)}
          placeholder="checklyhq.com"
          inputClassName="input-text-validated"
        />
        <span className="text-xs">We&apos;ll use this to detect companies visiting your site.</span>
        <div className="flex justify-end border-t-platform-neutral-200 mt-8 border-t border-solid pt-6">
          <div className="flex flex-col items-end gap-1">
            <DfButton variant="filled" type="submit">Continue →</DfButton>
          </div>
        </div>
      </form>
    </OnboardingCard>
  )
}
