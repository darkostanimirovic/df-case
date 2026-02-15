import { useEffect, useState } from 'react'

/**
 * BarList component with optional animated proportional bars
 * Displays a list of items with labels and values, optionally with horizontal bar charts
 */
export function BarList({ items, valueKey = 'value', labelKey = 'label', showBars = false }) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (showBars) {
      // Trigger animation after mount
      const timer = setTimeout(() => setAnimated(true), 50)
      return () => clearTimeout(timer)
    }
  }, [showBars])

  // Find max value for calculating bar proportions
  const maxValue = Math.max(...items.map((item) => item[valueKey]))

  return (
    <div className="review-bar-list">
      {items.map((item) => {
        const value = item[valueKey]
        const label = item[labelKey]
        const barPercent = maxValue > 0 ? (value / maxValue) * 100 : 0

        return (
          <div key={label} className="review-bar-list-row">
            {showBars && (
              <div
                className="review-bar-list-bar"
                style={{ width: animated ? `${barPercent}%` : '0%' }}
              />
            )}
            <span className="review-bar-list-label">{label}</span>
            <span className="review-bar-list-value">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </span>
          </div>
        )
      })}
    </div>
  )
}
