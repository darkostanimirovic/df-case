import { useEffect, useState } from 'react'
import { REVIEW_FLOW_STEPS } from '../constants/reviewFlowSteps'
import {
  GOAL_CARDS,
  CRM_OPTIONS,
  DEFAULT_CRM,
  ICP_SEGMENTS,
  AFTER_PERSONAS,
  AFTER_DEFAULT_PAGES,
  GOAL_DEFAULT_DESTINATION,
} from '../constants/onboardingData'
import {
  BeforeStepOne,
  BeforeStepTwo,
  BeforeStepThree,
  BeforeStepFour,
  BeforeStepFive,
  BeforeStepSix,
  BeforeStepSeven,
  AfterStepOne,
  AfterStepTwo,
  AfterStepThree,
  AfterStepFour,
  AfterStepFive,
  AfterStepSix,
  AfterStepSeven,
} from './steps'
import { LaserPointer } from '../components/LaserPointer'

function renderBeforeStep(stepId, nav) {
  switch (stepId) {
    case 1:
      return (
        <BeforeStepOne
          companyName={nav.companyName}
          websiteUrl={nav.websiteAddress}
          onCompanyNameChange={nav.onCompanyNameChange}
          onWebsiteChange={nav.onWebsiteChange}
          nav={nav}
        />
      )
    case 2:
      return <BeforeStepTwo nav={nav} />
    case 3:
      return <BeforeStepThree nav={nav} />
    case 4:
      return <BeforeStepFour nav={nav} />
    case 5:
      return <BeforeStepFive nav={nav} />
    case 6:
      return <BeforeStepSix nav={nav} />
    case 7:
      return <BeforeStepSeven />
    default:
      return null
  }
}

function ReviewPane({ label, children }) {
  return (
    <section className="review-pane">
      <div className="review-pane-marker">{label}</div>
      <div className="review-pane-content">{children}</div>
    </section>
  )
}

export function UxReviewPage({ stepIndex, onSetStepIndex, viewMode = 'split' }) {
  const [companyName, setCompanyName] = useState('')
  const [websiteAddress, setWebsiteAddress] = useState('')
  const [selectedGoal, setSelectedGoal] = useState(GOAL_CARDS[0].id)
  const [selectedDestination, setSelectedDestination] = useState('slack')
  const [selectedCrm, setSelectedCrm] = useState(
    CRM_OPTIONS.includes(DEFAULT_CRM) ? DEFAULT_CRM : CRM_OPTIONS[0],
  )
  const [selectedIcps, setSelectedIcps] = useState([ICP_SEGMENTS[0].id])
  const [selectedPersonas, setSelectedPersonas] = useState([AFTER_PERSONAS[0].id])
  const [pages, setPages] = useState(AFTER_DEFAULT_PAGES)
  const [alertEnabled, setAlertEnabled] = useState(() => AFTER_DEFAULT_PAGES.map((_, idx) => idx < 2))
  const [installDeferred, setInstallDeferred] = useState(false)
  const [laserModeActive, setLaserModeActive] = useState(false)

  const currentStep = REVIEW_FLOW_STEPS[stepIndex]
  const isFirstStep = stepIndex === 0
  const isLastStep = stepIndex === REVIEW_FLOW_STEPS.length - 1

  function goPrevStep() {
    onSetStepIndex((current) => Math.max(current - 1, 0))
  }

  function goNextStep() {
    onSetStepIndex((current) => Math.min(current + 1, REVIEW_FLOW_STEPS.length - 1))
  }

  function toggleIcp(id) {
    setSelectedIcps((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const nav = {
    onBack: goPrevStep,
    onNext: goNextStep,
    disableBack: isFirstStep,
    disableNext: isLastStep,
    companyName,
    onCompanyNameChange: setCompanyName,
    websiteAddress,
    onWebsiteChange: setWebsiteAddress,
  }

  function updatePage(index, value) {
    setPages((current) => current.map((entry, i) => (i === index ? value : entry)))
  }

  function toggleAlert(index) {
    setAlertEnabled((current) => current.map((isEnabled, i) => (i === index ? !isEnabled : isEnabled)))
  }

  function handleSelectGoal(goalId) {
    setSelectedGoal(goalId)
    const recommended = GOAL_DEFAULT_DESTINATION[goalId]
    if (recommended) {
      setSelectedDestination(recommended)
    }
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      const tagName = event.target?.tagName
      const isTyping = tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT'
      if (isTyping) return

      // Toggle laser mode with 'L' key
      if (event.key.toLowerCase() === 'l') {
        event.preventDefault()
        setLaserModeActive((prev) => !prev)
        return
      }

      // Don't allow navigation shortcuts when laser mode is active
      if (laserModeActive) return

      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'n') {
        event.preventDefault()
        onSetStepIndex((current) => Math.min(current + 1, REVIEW_FLOW_STEPS.length - 1))
      }
      if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'p') {
        event.preventDefault()
        onSetStepIndex((current) => Math.max(current - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onSetStepIndex, laserModeActive])

  return (
    <div className="ux-review-page">
      <div className={`ux-review-grid ${viewMode === 'after' ? 'after-only' : ''} ${viewMode === 'before' ? 'before-only' : ''}`.trim()}>
        {viewMode !== 'after' ? (
          <ReviewPane label="Before">
            {renderBeforeStep(currentStep.id, nav)}
          </ReviewPane>
        ) : null}

        {viewMode !== 'before' ? (
          <ReviewPane label="After">
            {currentStep.id === 1 ? (
              <AfterStepOne
                companyName={companyName}
                websiteUrl={websiteAddress}
                onCompanyNameChange={setCompanyName}
                onWebsiteChange={setWebsiteAddress}
                nav={nav}
              />
            ) : null}
            {currentStep.id === 2 ? <AfterStepTwo selectedGoal={selectedGoal} onSelectGoal={handleSelectGoal} nav={nav} /> : null}
            {currentStep.id === 3 ? (
              <AfterStepThree
                selectedGoal={selectedGoal}
                selectedDestination={selectedDestination}
                onSelectDestination={setSelectedDestination}
                selectedCrm={selectedCrm}
                onSelectCrm={setSelectedCrm}
                nav={nav}
              />
            ) : null}
            {currentStep.id === 4 ? (
              <AfterStepFour
                selectedDestination={selectedDestination}
                selectedCrm={selectedCrm}
                pages={pages}
                onPageChange={updatePage}
                alertEnabled={alertEnabled}
                onToggleAlert={toggleAlert}
                nav={nav}
              />
            ) : null}
            {currentStep.id === 5 ? (
              <AfterStepFive
                selectedGoal={selectedGoal}
                selectedIcps={selectedIcps}
                onToggleIcp={toggleIcp}
                nav={nav}
              />
            ) : null}
            {currentStep.id === 6 ? <AfterStepSix selectedPersonas={selectedPersonas} onSelectPersonas={setSelectedPersonas} nav={nav} /> : null}
            {currentStep.id === 7 ? (
              <AfterStepSeven
                selectedGoal={selectedGoal}
                selectedDestination={selectedDestination}
                selectedCrm={selectedCrm}
                selectedIcps={selectedIcps}
                selectedPersonas={selectedPersonas}
                pages={pages}
                installDeferred={installDeferred}
                onInstallLater={() => setInstallDeferred(true)}
              />
            ) : null}
          </ReviewPane>
        ) : null}
      </div>
      <LaserPointer isActive={laserModeActive} onDeactivate={() => setLaserModeActive(false)} />
    </div>
  )
}
