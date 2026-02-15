import { SparklesIcon, XIcon } from '../../components/icons'
import { BackContinueFooter, DfButton, DfInput, OnboardingCard } from '../../components/primitives'

const BEFORE_HIGH_INTENT_ROWS = ['/pricing', '/enterprise', '/book-demo', '/solutions', '/customer-stories']

export function BeforeStepFour({ nav }) {
  return (
    <OnboardingCard
      step={4}
      heading="Your High-Intent Pages"
      description="We've analyzed your website and found these pages with the strongest buying intent."
      icon={<SparklesIcon />}
    >
      <form className="space-y-3">
        {BEFORE_HIGH_INTENT_ROWS.map((path, idx) => (
          <div key={`${path}-${idx}`} className="flex items-center gap-2">
            <DfInput
              prepend="vercel.com"
              placeholder="/page_name"
              value={path}
              className="flex-1"
              inputClassName="input-text-validated !h-[38px] !border-none !rounded-bl-none !rounded-tl-none"
            />
            <DfButton variant="text" size="small" className="w-8 !px-0" aria-label="Delete page">
              <XIcon />
            </DfButton>
          </div>
        ))}
      </form>
      <DfButton variant="outline" className="mt-5 w-full">
        Add High-Intent Page
      </DfButton>
      <BackContinueFooter onBack={nav.onBack} onNext={nav.onNext} disableBack={nav.disableBack} disableNext={nav.disableNext} />
    </OnboardingCard>
  )
}
