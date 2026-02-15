import { useMemo, useState } from 'react'
import { ComponentShowcase } from './componentShowcase'
import { PrototypeOnboardingPage } from './prototypeOnboarding'
import {
  Step1WelcomePage,
  Step2ContactInfoPage,
  Step3CompanyDetailsPage,
  Step4HighIntentPagesPage,
  Step5IdealCustomerProfilesPage,
  Step6BuyerPersonasPage,
  Step7InstallTrackerPage,
  Step71GoogleTagManagerInstallPage,
  Step72HtmlCodeInstallPage,
} from './rebuiltPages'

export function ComponentsPage() {
  const [activeView, setActiveView] = useState('components')

  const views = useMemo(
    () => [
      { key: 'components', label: 'Components', render: () => <ComponentShowcase /> },
      { key: 'prototype', label: 'Prototype', render: () => <PrototypeOnboardingPage /> },
      { key: 'step-1', label: 'Step 1', render: () => <Step1WelcomePage /> },
      { key: 'step-2', label: 'Step 2', render: () => <Step2ContactInfoPage /> },
      { key: 'step-3', label: 'Step 3', render: () => <Step3CompanyDetailsPage /> },
      { key: 'step-4', label: 'Step 4', render: () => <Step4HighIntentPagesPage /> },
      { key: 'step-5', label: 'Step 5', render: () => <Step5IdealCustomerProfilesPage /> },
      { key: 'step-6', label: 'Step 6', render: () => <Step6BuyerPersonasPage /> },
      { key: 'step-7', label: 'Step 7', render: () => <Step7InstallTrackerPage /> },
      { key: 'step-7-1', label: 'Step 7.1', render: () => <Step71GoogleTagManagerInstallPage /> },
      { key: 'step-7-2', label: 'Step 7.2', render: () => <Step72HtmlCodeInstallPage /> },
    ],
    [],
  )

  const current = useMemo(() => views.find((view) => view.key === activeView) ?? views[0], [activeView, views])

  return (
    <div className="rebuild-app">
      <div className="rebuild-toolbar">
        {views.map((view) => (
          <button
            key={view.key}
            type="button"
            onClick={() => setActiveView(view.key)}
            className={`rebuild-toolbar-btn ${activeView === view.key ? 'active' : ''}`.trim()}
          >
            {view.label}
          </button>
        ))}
      </div>
      <div className="rebuild-stage">{current.render()}</div>
    </div>
  )
}
