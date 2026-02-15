import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, OnboardingCard } from '../../components/primitives'
import { IcpCard } from '../../components/onboarding'
import { ICP_SEGMENTS, ICP_STEP_CONFIG } from '../../constants/onboardingData'

export function AfterStepFive({ selectedGoal, selectedIcps, onToggleIcp, nav }) {
  const config = ICP_STEP_CONFIG[selectedGoal] || ICP_STEP_CONFIG['identify-visitors']

  return (
    <OnboardingCard
      step={5}
      heading={config.heading}
      description={config.description}
      icon={<SparklesIcon />}
    >
      <div className="space-y-3">
        {ICP_SEGMENTS.map((segment) => (
          <IcpCard
            key={segment.id}
            segment={segment}
            selected={selectedIcps.includes(segment.id)}
            onToggle={onToggleIcp}
            selectedGoal={selectedGoal}
          />
        ))}
      </div>
      <BackContinueFooter onBack={nav.onBack} onNext={nav.onNext} disableBack={nav.disableBack} disableNext={nav.disableNext} />
    </OnboardingCard>
  )
}
