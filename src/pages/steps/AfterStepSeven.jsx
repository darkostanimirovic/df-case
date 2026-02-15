import { CheckIcon } from '../../components/icons'
import { DfButton } from '../../components/primitives'
import { BeforeAfterCard, InstallMethodTabs } from '../../components/onboarding'
import { getDestinationDisplayLabel } from '../../utils/onboardingHelpers'
import { AFTER_ICP_OPTIONS, ICP_SEGMENTS, AFTER_PERSONAS } from '../../constants/onboardingData'

export function AfterStepSeven({ 
  selectedGoal, 
  selectedDestination, 
  selectedCrm, 
  selectedIcps, 
  selectedPersonas = [],
  pages, 
  installDeferred, 
  onInstallLater 
}) {
  // Use first selected ICP for display, or default
  const firstIcpId = selectedIcps && selectedIcps.length > 0 ? selectedIcps[0] : 'devops-leaders'
  const icp = AFTER_ICP_OPTIONS.find((item) => item.id === firstIcpId) || AFTER_ICP_OPTIONS[0]
  const icpCount = selectedIcps ? selectedIcps.length : 0
  const destinationLabel = getDestinationDisplayLabel(selectedDestination, selectedCrm)

  // Calculate total companies across all selected ICPs
  const totalCompanies = selectedIcps
    .map(id => ICP_SEGMENTS.find(seg => seg.id === id))
    .filter(Boolean)
    .reduce((sum, seg) => sum + seg.companies, 0)

  // Calculate total contacts across all selected personas
  const totalContacts = selectedPersonas
    .map(id => AFTER_PERSONAS.find(p => p.id === id))
    .filter(Boolean)
    .reduce((sum, persona) => sum + persona.contactCount, 0)

  // Build ICP summary text
  const icpSummaryText = icpCount > 1 
    ? `${icpCount} ICPs selected (${icp.name} + ${icpCount - 1} more)`
    : icp.name

  return (
    <BeforeAfterCard>
      <div className="review-install-layout">
        <div className="review-install-copy">
          <h1>Start getting alerts when {icp.name.toLowerCase()} from {totalCompanies.toLocaleString()} target companies visit your website.</h1>
        </div>

        {/* Signal Stats */}
        <div className="review-signal-stats">
          <div className="review-signal-stat">
            <div className="review-signal-stat-value">{totalCompanies.toLocaleString()}</div>
            <div className="review-signal-stat-label">Companies in your ICP{icpCount > 1 ? 's' : ''}</div>
          </div>
          {totalContacts > 0 && (
            <div className="review-signal-stat">
              <div className="review-signal-stat-value">{totalContacts.toLocaleString()}</div>
              <div className="review-signal-stat-label">Buyer contacts available</div>
            </div>
          )}
        </div>

        <div className="review-summary-panel">
          <div className="review-summary-row">
            <CheckIcon /> ICP selected: {icpSummaryText}
          </div>
          <div className="review-summary-row">
            <CheckIcon /> Pages monitored: {pages.slice(0, 2).join(', ')}
          </div>
          <div className="review-summary-row">
            <CheckIcon /> Alert destination: {destinationLabel}
          </div>
          <div className="review-summary-row review-summary-row--muted">Tracking: Not active</div>
        </div>

        <div className="review-proof-block">
          &quot;Teams reaching out within 24h of pricing-page visits increase close rates by 18-25%.&quot;
        </div>

        {/* Tabbed Install Methods */}
        <InstallMethodTabs selectedGoal={selectedGoal} />

        <div className="review-install-ctas">
          <DfButton variant="outline">Send instructions to developer</DfButton>
          <button type="button" className="unstyled-button link link-blue-light-mode text-sm" onClick={onInstallLater}>
            I&apos;ll install later
          </button>
        </div>

        {installDeferred ? (
          <div className="review-warning-banner">
            Tracking not active. Estimated {icp.weeklyMatches} will appear once installed.
          </div>
        ) : null}
      </div>
    </BeforeAfterCard>
  )
}
