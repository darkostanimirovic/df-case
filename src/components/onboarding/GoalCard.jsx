import { SelectIndicator } from './SelectIndicator'

export function GoalCard({ card, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`review-goal-card ${selected ? 'review-goal-card--selected' : ''}`.trim()}
      onClick={() => onSelect(card.id)}
      aria-pressed={selected}
    >
      <div className="review-goal-card-top">
        <span className="review-goal-card-title">{card.title}</span>
        <SelectIndicator selected={selected} mode="radio" />
      </div>
      <p className="review-goal-card-subtitle">{card.subtitle}</p>
    </button>
  )
}
