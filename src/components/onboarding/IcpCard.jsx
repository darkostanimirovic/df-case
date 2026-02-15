import { LuBuilding2, LuChartBar, LuUser } from 'react-icons/lu'
import { DfButton } from '../primitives'
import { getIcpSummary } from '../../utils/onboardingHelpers'
import { BarList } from './BarList'

function IcpSectionHeader({ icon: Icon, label }) {
  return (
    <div className="review-icp-section-header">
      <Icon size={12} strokeWidth={2.5} />
      <span>{label}</span>
    </div>
  )
}

/**
 * ICP Card component with market coverage, company size, and common roles
 */
export function IcpCard({ segment, selected, onToggle, selectedGoal }) {
  const summary = getIcpSummary(segment, selectedGoal)

  const coverageRows = [
    { label: 'Companies', value: segment.companies },
    { label: 'Verified contacts', value: segment.contacts },
    { label: 'Decision-makers', value: segment.decisionMakers },
  ]

  // Company size data for BarList (use percent as numeric value)
  const sizeItems = segment.sizeDistribution.slice(0, 3).map((s) => ({
    label: s.range,
    value: s.percent,
  }))

  // Common roles for BarList
  const roleItems = segment.commonRoles.map((role) => ({
    label: role.title,
    value: role.count,
  }))

  return (
    <div className={`review-icp-card ${selected ? 'review-icp-card--selected' : ''}`.trim()}>
      <div className="review-icp-card-head">
        <div className="flex items-center gap-2">
          <span className="review-icp-name">{segment.name}</span>
        </div>
        <DfButton
          variant={selected ? 'filled' : 'outline'}
          size="small"
          className={selected ? 'bg-platform-primary-600 text-white min-w-24' : 'min-w-24'}
          onClick={() => onToggle(segment.id)}
        >
          {selected ? 'Added ICP' : 'Add ICP'}
        </DfButton>
      </div>

      <p className="review-icp-summary">{summary}</p>

      <div className="review-icp-columns">
        <div className="review-icp-column">
          <IcpSectionHeader icon={LuChartBar} label="Market Coverage" />
          <BarList items={coverageRows} />
        </div>
        <div className="review-icp-column">
          <IcpSectionHeader icon={LuBuilding2} label="Company Size" />
          <BarList items={sizeItems} />
        </div>
      </div>
    </div>
  )
}
