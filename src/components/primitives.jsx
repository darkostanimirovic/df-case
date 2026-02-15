import { ArrowLeftIcon, CheckIcon, ChevronDownIcon, PencilIcon, SparklesIcon, XIcon } from './icons'

const baseButton = 'unstyled-button outline-none button'

const variantClasses = {
  filled: 'button-filled',
  outline: 'button-outline',
  transparent: 'button-transparent',
  text: 'button-text',
  link: 'button-link',
}

const sizeClasses = {
  default: 'button-default-size',
  small: 'button-small-size',
  tiny: 'button-tiny-size',
}

export function DfButton({
  variant = 'outline',
  size = 'default',
  className = '',
  children,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`${baseButton} ${sizeClasses[size] || sizeClasses.default} ${variantClasses[variant] || variantClasses.outline} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export function DfLabel({ children, hint = false, className = '' }) {
  return (
    <label className={`!ml-0 text-xs ${className}`.trim()}>
      <span className="text-platform-neutral-600 mb-1 block text-xs font-bold leading-5">
        {children}
        {hint ? (
          <span className="ml-1 inline-block text-platform-primary-500 align-middle">
            <SparklesIcon />
          </span>
        ) : null}
      </span>
    </label>
  )
}

export function DfInput({
  label,
  type = 'text',
  placeholder = '',
  className = '',
  inputClassName = '',
  prepend,
  value,
  onChange,
}) {
  const controlled = typeof onChange === 'function'
  return (
    <div className={`space-y-1.5 ${className}`.trim()}>
      {label ? <DfLabel>{label}</DfLabel> : null}
      <div className="gap-half changeset-input flex w-full flex-col">
        <div className="ember-basic-dropdown">
          <div data-test-changeset-input-wrap="" className={prepend ? 'flex' : undefined}>
            {prepend ? (
              <span className="flex items-center cursor-default text-platform-neutral-600 text-sm bg-platform-neutral-100 p-2.5 border-platform-neutral-300 border border-solid rounded-bl rounded-tl border-r-0">
                {prepend}
              </span>
            ) : null}
            <input
              type={type}
              {...(controlled ? { value: value ?? '', onChange } : { defaultValue: value ?? '' })}
              placeholder={placeholder}
              className={`border-platform-neutral-300 text-platform-neutral-700 font-platform-body rounded border border-solid px-2 py-2.5 text-sm outline-0 transition-colors hover:bg-platform-neutral-50 focus-visible:border-platform-neutral-600 placeholder:text-platform-neutral-400 h-10 w-full ${inputClassName}`.trim()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function DfBadge({ children }) {
  return (
    <span
      data-test-platform-badge=""
      data-test-platform-badge-style="blue-dark"
      className="font-platform-body inline-flex items-center space-x-1.5 rounded-full font-normal bg-platform-primary-500 text-platform-neutral-white px-2 py-1 text-xs"
    >
      {children}
    </span>
  )
}

export function DfStepIndicator({ step, total = 6 }) {
  return (
    <div data-test-aip-signup-step-indicator="" className="flex flex-col items-center">
      <div className="mb-2 flex items-center space-x-2">
        {Array.from({ length: total }).map((_, idx) => {
          const active = idx + 1 <= step
          const wide = idx + 1 < step
          return (
            <div
              key={`step-dot-${idx}`}
              className={`${active ? 'bg-platform-primary-500' : 'bg-platform-neutral-300'} h-2 ${wide ? 'w-6' : 'w-2'} rounded-full`}
            />
          )
        })}
      </div>
      <span className="text-platform-neutral-600 text-xs">Step {step} of {total}</span>
    </div>
  )
}

export function OnboardingCard({ children, step, heading, description, icon }) {
  return (
    <div className="mb-16 space-y-6">
      <DfStepIndicator step={step} />
      <section className="border-platform-neutral-200 w-[680px] max-w-[calc(100vw-2rem)] min-w-[320px] space-y-8 rounded-lg border border-solid bg-white p-8 shadow-sm">
        <header className="animate-fadeIn animate-duration-[1s] space-y-2 text-center">
          <div className="bg-platform-primary-200 text-platform-primary-500 mx-auto flex h-11 w-11 items-center justify-center rounded-lg">{icon}</div>
          <h1 className="font-platform-header u-reset-heading text-lg font-bold">{heading}</h1>
          <p className="u-reset-p mx-auto w-4/5 text-xs">{description}</p>
        </header>
        <main className="animate-fadeIn animate-duration-[1s]">{children}</main>
      </section>
    </div>
  )
}

export function BackContinueFooter({
  finish = false,
  onBack,
  onNext,
  disableBack = false,
  disableNext = false,
  nextLabel,
  backLabel = 'Back',
}) {
  return (
    <footer className="animate-fadeIn animate-duration-[1s] mt-6">
      <div className="flex items-center justify-between gap-2">
        <DfButton
          variant="transparent"
          className="button-default-size"
          onClick={onBack}
          disabled={disableBack}
          type="button"
        >
          <span className="inline-flex items-center gap-2 text-sm">
            <ArrowLeftIcon />
            {backLabel}
          </span>
        </DfButton>
        <DfButton variant="filled" onClick={onNext} disabled={disableNext} type="button">
          {nextLabel || (finish ? 'Finish' : 'Continue')}
        </DfButton>
      </div>
    </footer>
  )
}

export function IconActionButtons() {
  return (
    <div className="flex items-center">
      <DfButton variant="text" className="px-0 w-10 h-6 w-6 rounded-lg" aria-label="Edit">
        <PencilIcon />
      </DfButton>
      <DfButton variant="text" className="px-0 w-10 h-6 w-6 rounded-lg" aria-label="Delete">
        <XIcon />
      </DfButton>
    </div>
  )
}

export function HintLabel({ text }) {
  return (
    <div className="flex items-center">
      <label className="text-platform-neutral-600 mb-1 block text-xs font-bold leading-5">{text}</label>
      <span className="ml-1 inline-block text-platform-primary-500">
        <SparklesIcon />
      </span>
    </div>
  )
}

export function AccordionHeader({ title }) {
  return (
    <header className="accordion-section-head flex shrink-0 u-pad-horizontal--single gap-single !pl-0 text-sm">
      <button className="gap-single unstyled-button accordion-section-head-trigger flex u-pad-vertical--single" type="button">
        <AngleDownIcon />
        <span className="u-min-width--fit-content">{title}</span>
      </button>
    </header>
  )
}

export function CheckedCheckbox() {
  return (
    <div className="group relative flex items-start flex-row">
      <div className="flex items-center">
        <button
          className="flex h-5 w-5 items-center justify-center rounded border border-solid transition-colors duration-100 ease-out focus-visible:ring-platform-primary-400 focus-visible:outline-0 focus-visible:ring-4 focus-visible:ring-offset-1 hover:cursor-pointer platform-checkbox-checked bg-platform-primary-600 border-platform-primary-600 text-platform-neutral-white"
          type="button"
        >
          <span className="sr-only">Checked</span>
          <CheckIcon />
        </button>
        <label className="text-platform-neutral-600 leading-5 pl-3 block text-sm">
          <span className="font-bold">Track form submissions (Recommended)</span>
        </label>
      </div>
      <p className="text-platform-neutral-400 text-xs leading-4 pl-3">
        <span className="text-platform-neutral-600 text-sm">
          Close more deals by identifying individuals who submit forms on your website.
        </span>
      </p>
    </div>
  )
}

export function LocaleTrigger() {
  return (
    <div className="ember-view ember-basic-dropdown-trigger ember-power-select-trigger bg-transparent" role="combobox">
      <div className="flex items-center gap-2 rounded border border-solid border-platform-neutral-300 px-2 py-1 text-platform-neutral-700 text-sm">
        EN
        <ChevronDownIcon />
      </div>
    </div>
  )
}
