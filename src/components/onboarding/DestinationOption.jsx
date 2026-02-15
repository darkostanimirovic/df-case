import {
  DealfrontMiniLogoIcon,
  IntegrationsIcon,
  MailChannelIcon,
  SlackLogoIcon,
  SparklesIcon,
} from '../icons'
import { SelectIndicator } from './SelectIndicator'

export function DestinationOption({ option, selected, onSelect, expanded = false, children }) {
  const iconByDestination = {
    email: <MailChannelIcon />,
    slack: <SlackLogoIcon />,
    crm: <IntegrationsIcon />,
    dashboard: <DealfrontMiniLogoIcon />,
  }
  const hasExpandableContent = Boolean(children)

  return (
    <div className={`review-destination-option-wrap ${selected ? 'review-destination-option-wrap--selected' : ''}`.trim()}>
      <button
        type="button"
        className="review-destination-option"
        onClick={() => onSelect(option.id)}
        aria-pressed={selected}
      >
        <div className="review-destination-content">
          <span className={`review-destination-icon review-destination-icon--${option.id}`}>
            {iconByDestination[option.id] || <SparklesIcon />}
          </span>
          <span className="review-destination-copy">
            <span className="review-destination-label">{option.label}</span>
            <span className="review-destination-helper">{option.helper}</span>
          </span>
          <SelectIndicator selected={selected} mode="radio" />
        </div>
      </button>

      {hasExpandableContent ? (
        <div className={`review-destination-expand ${expanded ? 'is-open' : ''}`.trim()}>
          {children}
        </div>
      ) : null}
    </div>
  )
}
