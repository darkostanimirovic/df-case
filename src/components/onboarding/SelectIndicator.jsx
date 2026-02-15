import { CheckIcon } from '../icons'

export function SelectIndicator({ selected, mode = 'radio' }) {
  if (mode === 'checkbox') {
    return (
      <span
        className={`review-select-indicator review-select-indicator--checkbox ${selected ? 'is-selected' : ''}`.trim()}
        aria-hidden="true"
      >
        {selected ? <CheckIcon /> : null}
      </span>
    )
  }

  return (
    <span
      className={`review-select-indicator review-select-indicator--radio ${selected ? 'is-selected' : ''}`.trim()}
      aria-hidden="true"
    >
      <span className="review-select-indicator-dot" />
    </span>
  )
}
