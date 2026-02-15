import { SparklesIcon } from '../../components/icons'
import { BackContinueFooter, OnboardingCard } from '../../components/primitives'
import { GoalCard } from '../../components/onboarding'
import { GOAL_CARDS } from '../../constants/onboardingData'

export function AfterStepTwo({ selectedGoal, onSelectGoal, nav }) {
  return (
    <OnboardingCard
      step={2}
      heading="What would you like to do first?"
      description="We'll tailor Dealfront to your workflow."
      icon={<SparklesIcon />}
    >
      <div className="space-y-3">
        {GOAL_CARDS.map((goal) => (
          <GoalCard key={goal.id} card={goal} selected={selectedGoal === goal.id} onSelect={onSelectGoal} />
        ))}
      </div>
      <BackContinueFooter onBack={nav.onBack} onNext={nav.onNext} disableBack={nav.disableBack} disableNext={nav.disableNext} />
    </OnboardingCard>
  )
}
