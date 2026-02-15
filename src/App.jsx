import { useEffect, useMemo, useState } from 'react'
import { ComponentsPage } from './pages/componentsPage'
import { UxReviewPage } from './pages/uxReviewPage'
import { DfButton } from './components/primitives'
import { REVIEW_FLOW_STEPS } from './constants/reviewFlowSteps'

function normalizePath(pathname) {
  if (!pathname) return '/'
  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  return normalized || '/'
}

export default function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))
  const [reviewStepIndex, setReviewStepIndex] = useState(0)
  const [reviewViewMode, setReviewViewMode] = useState('split')

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const isComponentsRoute = useMemo(() => pathname === '/components', [pathname])
  const isReviewRoute = !isComponentsRoute
  const isFirstStep = reviewStepIndex === 0
  const isLastStep = reviewStepIndex === REVIEW_FLOW_STEPS.length - 1

  function goPrevStep() {
    setReviewStepIndex((current) => Math.max(current - 1, 0))
  }

  function goNextStep() {
    setReviewStepIndex((current) => Math.min(current + 1, REVIEW_FLOW_STEPS.length - 1))
  }

  return (
    <div className="workspace-root">
      <header className="workspace-nav">
        <div className="workspace-nav-brand">Dealfront onboarding prototype</div>

        <div className="workspace-nav-controls">
          {isReviewRoute ? (
            <div className="workspace-view-toggle" role="group" aria-label="Viewer mode">
              <button
                type="button"
                className={`workspace-view-toggle-btn ${reviewViewMode === 'before' ? 'active' : ''}`.trim()}
                onClick={() => setReviewViewMode('before')}
              >
                Before
              </button>
              <button
                type="button"
                className={`workspace-view-toggle-btn ${reviewViewMode === 'split' ? 'active' : ''}`.trim()}
                onClick={() => setReviewViewMode('split')}
              >
                Split
              </button>
              <button
                type="button"
                className={`workspace-view-toggle-btn ${reviewViewMode === 'after' ? 'active' : ''}`.trim()}
                onClick={() => setReviewViewMode('after')}
              >
                After
              </button>
            </div>
          ) : null}

          {isReviewRoute ? (
            <div className="workspace-stepbar-actions">
              <DfButton variant="outline" size="small" onClick={goPrevStep} disabled={isFirstStep}>
                Back
              </DfButton>
              <DfButton variant="filled" size="small" onClick={goNextStep} disabled={isLastStep}>
                Next
              </DfButton>
            </div>
          ) : null}
        </div>
      </header>

      <main className="workspace-content">
        {isReviewRoute ? (
          <UxReviewPage stepIndex={reviewStepIndex} onSetStepIndex={setReviewStepIndex} viewMode={reviewViewMode} />
        ) : (
          <ComponentsPage />
        )}
      </main>
    </div>
  )
}
