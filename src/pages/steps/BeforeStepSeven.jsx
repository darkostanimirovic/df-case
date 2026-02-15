import { AngleDownIcon, EnvelopeIcon, MethodIconCode, MethodIconGTM, PencilIcon, CheckIcon } from '../../components/icons'
import { BeforeAfterCard, InstallMethodCard } from '../../components/onboarding'
import { DfButton } from '../../components/primitives'

export function BeforeStepSeven() {
  return (
    <BeforeAfterCard>
      <div className="review-install-layout">
        <div className="review-install-copy">
          <h2>Get started by installing the Leadfeeder tracker on your website</h2>
          <p>The tracker is essential for Leadfeeder to identify the companies visiting your website. It is GDPR compliant and the setup takes only 2 minutes.</p>
        </div>

        <div className="before-install-website-info">
          <div className="before-install-website-label">Your website:</div>
          <div className="before-install-website-url">checklyhq.com</div>
          <button type="button" className="unstyled-button link link-blue-light-mode text-sm">
            Edit
          </button>
        </div>

        <div className="before-install-section">
          <div className="before-install-section-header">
            <div className="before-install-section-title">Recommended installation methods</div>
            <div className="before-install-section-subtitle">For your website, these would work best</div>
          </div>
          <div className="space-y-3">
            <InstallMethodCard icon={<MethodIconGTM />} title="Google Tag Manager" description="" cta="Start" />
            <InstallMethodCard icon={<MethodIconCode />} title="HTML code" description="" cta="Start" />
          </div>
        </div>

        <div className="before-install-section">
          <div className="before-install-section-header">
            <div className="before-install-section-title">Other installation methods</div>
            <div className="before-install-section-subtitle">If you want to install Leadfeeder in a different way</div>
          </div>
          <div className="review-install-other">
            <button type="button" className="review-pill-box">
              <EnvelopeIcon />
              <span>Send via email</span>
            </button>
            <button type="button" className="unstyled-button link link-blue-light-mode text-sm">
              Show 5 other installation options
            </button>
          </div>
        </div>

        <div className="review-support-note">
          <span className="review-support-icon">
            <AngleDownIcon className="rotate-0!" />
          </span>
          <span>
            Visit our <a href="#" className="link link-blue-light-mode">help center</a> or{' '}
            <a href="#" className="link link-blue-light-mode">contact our support team</a> for additional help with installing the tracker. 
            The Leadfeeder tracker also works with Consent Management Platforms (CMPs).{' '}
            <a href="#" className="link link-blue-light-mode">Learn more</a> about easily setting up the tracker with a CMP.
          </span>
        </div>

        <details className="before-install-config">
          <summary className="before-install-config-summary">
            <AngleDownIcon />
            <span>Additional tracker configuration</span>
          </summary>
          <div className="before-install-config-content">
            <label className="before-install-config-option">
              <CheckIcon />
              <div>
                <div className="before-install-config-option-title">Track form submissions (Recommended)</div>
                <div className="before-install-config-option-desc">
                  Close more deals by identifying individuals who submit forms on your website. Track their journey before and after
                  form submission to identify how they&apos;re engaging with your website.
                </div>
              </div>
            </label>
          </div>
        </details>
      </div>
    </BeforeAfterCard>
  )
}
