import { DfButton } from '../primitives'

export function InstallMethodCard({ icon, title, description, cta = 'Start' }) {
  return (
    <div className="review-install-method">
      <div className="review-install-method-icon">{icon}</div>
      <div className="review-install-method-copy">
        <div className="review-install-method-title">{title}</div>
        <p>{description}</p>
      </div>
      <DfButton variant="outline" size="small">
        {cta}
      </DfButton>
    </div>
  )
}
