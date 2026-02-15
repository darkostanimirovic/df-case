import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, DfButton, DfInput, OnboardingCard } from '../../components/primitives'
import { getDestinationDisplayLabel } from '../../utils/onboardingHelpers'

export function AfterStepFour({
  selectedDestination,
  selectedCrm,
  pages,
  onPageChange,
  alertEnabled,
  onToggleAlert,
  nav,
}) {
  const destinationLabel = getDestinationDisplayLabel(selectedDestination, selectedCrm)
  const channelLineByDestination = {
    email: "We'll email you when companies visit them.",
    slack: "We'll alert your team in Slack when companies visit them.",
    crm: `We'll send these visits into ${selectedCrm} CRM when companies visit them.`,
    dashboard: "We'll surface these visits in your Dealfront dashboard.",
  }
  const channelLine = channelLineByDestination[selectedDestination] || `We'll notify you on ${destinationLabel} when companies visit them.`
  const deliveryHintByDestination = {
    email: 'The alert email includes company context, key pages viewed, and suggested contacts.',
    slack: 'Slack alerts include company fit, visited page, and quick action links for reps.',
    crm: `${selectedCrm} receives the visitor event so your workflow can create tasks and ownership.`,
    dashboard: 'Dealfront custom feeds keep these visits prioritized until you connect downstream tools.',
  }

  return (
    <OnboardingCard
      step={4}
      heading="Set up alerts to high-intent pages"
      description={channelLine}
      icon={<SparklesIcon />}
    >
      <form className="space-y-3">
        {pages.map((path, idx) => (
          <div key={`${path}-${idx}`} className="flex items-center gap-2">
            <DfInput
              prepend="vercel.com"
              placeholder="/page_name"
              value={path}
              onChange={(event) => onPageChange(idx, event.target.value)}
              className="flex-1"
              inputClassName="input-text-validated !rounded-bl-none !rounded-tl-none font-mono"
            />
            <DfButton
              variant={alertEnabled[idx] ? 'filled' : 'outline'}
              size="small"
              className={alertEnabled[idx] ? 'bg-platform-primary-600 text-white min-w-28' : 'min-w-28'}
              onClick={() => onToggleAlert(idx)}
            >
              {alertEnabled[idx] ? 'Remove alert' : 'Add alert'}
            </DfButton>
          </div>
        ))}
      </form>
      <p className="review-subtle-copy">{deliveryHintByDestination[selectedDestination]}</p>
      <BackContinueFooter onBack={nav.onBack} onNext={nav.onNext} disableBack={nav.disableBack} disableNext={nav.disableNext} />
    </OnboardingCard>
  )
}
