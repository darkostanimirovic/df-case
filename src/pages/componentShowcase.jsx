import { DfBadge, DfButton, DfInput, DfStepIndicator, OnboardingCard } from '../components/primitives'
import {
  AngleDownIcon,
  ArrowLeftIcon,
  CheckIcon,
  DealfrontLogo,
  GlobeIcon,
  GoogleIcon,
  PencilIcon,
  SparklesIcon,
  UserIcon,
  XIcon,
} from '../components/icons'

export function ComponentShowcase() {
  return (
    <div className="component-showcase">
      <h1>Component Showcase</h1>
      <p className="text-platform-neutral-600 text-sm">Reusable components rebuilt from the scraped Dealfront onboarding screens.</p>

      <section className="component-showcase-section">
        <h2>Logo & Icons</h2>
        <div className="component-showcase-row mt-3">
          <DealfrontLogo />
        </div>
        <div className="icon-grid mt-3">
          {[
            ['Google', <GoogleIcon key="google" />],
            ['User', <UserIcon key="user" />],
            ['Arrow Left', <ArrowLeftIcon key="arrow" />],
            ['Close', <XIcon key="x" />],
            ['Pencil', <PencilIcon key="pencil" />],
            ['Sparkles', <SparklesIcon key="sparkles" />],
            ['Check', <CheckIcon key="check" />],
            ['Angle', <AngleDownIcon key="angle" />],
            ['Globe', <GlobeIcon key="globe" />],
          ].map(([name, icon]) => (
            <div className="icon-tile" key={name}>
              {icon}
              <span className="icon-tile-label">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="component-showcase-section">
        <h2>Buttons</h2>
        <div className="component-showcase-row mt-3">
          <DfButton variant="filled">Continue</DfButton>
          <DfButton variant="outline">Outline</DfButton>
          <DfButton variant="transparent">Back</DfButton>
          <DfButton variant="text">Text</DfButton>
          <DfButton variant="link">Link</DfButton>
        </div>
      </section>

      <section className="component-showcase-section">
        <h2>Inputs</h2>
        <div className="component-showcase-row mt-3">
          <div className="w-full max-w-md">
            <DfInput label="Your business email" type="email" placeholder="john@acme.com" inputClassName="input-text-validated" />
          </div>
          <div className="w-full max-w-md">
            <DfInput label="High-intent page" prepend="vercel.com" placeholder="/pricing" inputClassName="!h-[38px] !border-none !rounded-bl-none !rounded-tl-none" />
          </div>
        </div>
      </section>

      <section className="component-showcase-section">
        <h2>Badges & Step Indicator</h2>
        <div className="component-showcase-row mt-3">
          <DfBadge>Engineering</DfBadge>
          <DfBadge>Top Management</DfBadge>
          <DfBadge>SaaS</DfBadge>
        </div>
        <div className="mt-4">
          <DfStepIndicator step={4} />
        </div>
      </section>

      <section className="component-showcase-section">
        <h2>Card Shell</h2>
        <OnboardingCard
          step={3}
          heading="Tell us about vercel.com"
          description="Example onboarding card shell for all steps."
          icon={<SparklesIcon />}
        >
          <div className="text-sm text-platform-neutral-600">This shell wraps step-specific form and list content.</div>
        </OnboardingCard>
      </section>
    </div>
  )
}
