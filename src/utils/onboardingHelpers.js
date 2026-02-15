import { GOAL_STEP3_CONTENT } from '../constants/onboardingData'

/**
 * Get goal-specific content for step 3 (destination selection)
 */
export function getGoalStep3Content(selectedGoal) {
  return GOAL_STEP3_CONTENT[selectedGoal] || GOAL_STEP3_CONTENT['identify-visitors']
}

/**
 * Get display label for selected destination
 */
export function getDestinationDisplayLabel(selectedDestination, selectedCrm) {
  if (selectedDestination === 'crm') {
    return `${selectedCrm} CRM`
  }
  const base = {
    email: 'Email',
    slack: 'Slack',
    dashboard: 'Dealfront dashboard',
  }
  return base[selectedDestination] || 'Selected channel'
}

/**
 * Generate goal-specific ICP summary sentence
 */
export function getIcpSummary(segment, goal) {
  const dmCount = (segment.decisionMakers / 1000).toFixed(1)
  const contactsK = (segment.contacts / 1000).toFixed(1)

  switch (goal) {
    case 'identify-visitors':
      return `Get access to ${dmCount}k+ ${segment.decisionMakerLabel} and ${contactsK}k verified contacts.`
    case 'route-intent':
      return `Route ${segment.companies.toLocaleString()} matching companies directly to sales with ${contactsK}k contacts ready for outreach.`
    case 'scoring-automation':
      return `Score and enrich ${segment.companies.toLocaleString()} companies across ${contactsK}k contacts for automated workflows.`
    default:
      return `Access ${contactsK}k verified contacts across ${segment.companies.toLocaleString()} companies.`
  }
}
