import { DEALFRONT_LOGO_SVG } from './logoSvg'
import { STEP7_CODE_SVG, STEP7_ENVELOPE_SVG, STEP7_GTM_SVG, STEP7_INFO_SVG, STEP7_AI_AGENT_SVG, STEP7_WORDPRESS_SVG } from './step7IconSvgs'
import { LuWorkflow } from 'react-icons/lu'

export function DealfrontLogo() {
  return <span className="inline-flex" dangerouslySetInnerHTML={{ __html: DEALFRONT_LOGO_SVG }} />
}

export function DealfrontMiniLogoIcon() {
  return <img src="/assets/logos/dealfront.png" alt="" className="review-channel-logo review-channel-logo--dealfront" loading="lazy" />
}

export function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          id="google-icon-shape"
          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="google-icon-clip">
        <use href="#google-icon-shape" />
      </clipPath>
      <path clipPath="url(#google-icon-clip)" d="M0 37V11l17 13z" fill="#FBBC05" />
      <path clipPath="url(#google-icon-clip)" d="M0 11l17 13 7-6.1L48 14V0H0z" fill="#EA4335" />
      <path clipPath="url(#google-icon-clip)" d="M0 37l30-23 7.9 1L48 0v48H0z" fill="#34A853" />
      <path clipPath="url(#google-icon-clip)" d="M48 48L17 24l-4-3 35-10z" fill="#4285F4" />
    </svg>
  )
}

export function UserIcon() {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.092 9.592a5 5 0 10-6.184 0 8.334 8.334 0 00-5.183 6.816.838.838 0 101.667.184 6.667 6.667 0 0113.25 0 .833.833 0 00.833.741h.092a.833.833 0 00.733-.916 8.333 8.333 0 00-5.208-6.825zM9 9a3.333 3.333 0 110-6.666A3.333 3.333 0 019 9z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ArrowLeftIcon() {
  return (
    <svg className="svg-inline--fa fa-arrow-left transition-transform" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 432 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-176 176z" fill="currentColor" />
    </svg>
  )
}

export function XIcon() {
  return (
    <svg className="svg-inline--fa fa-xmark transition-transform !h-4" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z" fill="currentColor" />
    </svg>
  )
}

export function PencilIcon() {
  return (
    <svg className="svg-inline--fa fa-pencil transition-transform" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M395.8 39.6c9.4-9.4 24.6-9.4 33.9 0l42.6 42.6c9.4 9.4 9.4 24.6 0 33.9L417.6 171 341 94.4l54.8-54.8zM318.4 117L395 193.6l-219 219 0-12.6c0-8.8-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16l-12.6 0 219-219zM66.9 379.5c1.2-4 2.7-7.9 4.7-11.5L96 368l0 32c0 8.8 7.2 16 16 16l32 0 0 24.4c-3.7 1.9-7.5 3.5-11.6 4.7L39.6 472.4l27.3-92.8zM452.4 17c-21.9-21.9-57.3-21.9-79.2 0L60.4 329.7c-11.4 11.4-19.7 25.4-24.2 40.8L.7 491.5c-1.7 5.6-.1 11.7 4 15.8s10.2 5.7 15.8 4l121-35.6c15.4-4.5 29.4-12.9 40.8-24.2L495 138.8c21.9-21.9 21.9-57.3 0-79.2L452.4 17zM331.3 202.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128z" fill="currentColor" />
    </svg>
  )
}

export function SparklesIcon() {
  return (
    <svg className="svg-inline--fa fa-sparkles" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M327.5 85.2c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L384 128l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L448 128l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L448 64 426.8 7.5C425.1 3 420.8 0 416 0s-9.1 3-10.8 7.5L384 64 327.5 85.2zM9.3 240C3.6 242.6 0 248.3 0 254.6s3.6 11.9 9.3 14.5L26.3 277l8.1 3.7 .6 .3 88.3 40.8L164.1 410l.3 .6 3.7 8.1 7.9 17.1c2.6 5.7 8.3 9.3 14.5 9.3s11.9-3.6 14.5-9.3l7.9-17.1 3.7-8.1 .3-.6 40.8-88.3L346 281l.6-.3 8.1-3.7 17.1-7.9c5.7-2.6 9.3-8.3 9.3-14.5s-3.6-11.9-9.3-14.5l-17.1-7.9-8.1-3.7-.6-.3-88.3-40.8L217 99.1l-.3-.6L213 90.3l-7.9-17.1c-2.6-5.7-8.3-9.3-14.5-9.3s-11.9 3.6-14.5 9.3l-7.9 17.1-3.7 8.1-.3 .6-40.8 88.3L35.1 228.1l-.6 .3-8.1 3.7L9.3 240zm83 14.5l51.2-23.6c10.4-4.8 18.7-13.1 23.5-23.5l23.6-51.2 23.6 51.2c4.8 10.4 13.1 18.7 23.5 23.5l51.2 23.6-51.2 23.6c-10.4 4.8-18.7 13.1-23.5 23.5l-23.6 51.2-23.6-51.2c-4.8-10.4-13.1-18.7-23.5-23.5L92.3 254.6zM384 384l-56.5 21.2c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L384 448l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L448 448l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L448 384l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L384 384z" fill="currentColor" />
    </svg>
  )
}

export function CheckIcon() {
  return (
    <svg className="svg-inline--fa fa-check h-3 w-3 fill-current leading-3" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z" fill="currentColor" />
    </svg>
  )
}

export function AngleDownIcon({ className = '' }) {
  return (
    <svg className={`svg-inline--fa fa-angle-down text-xl transition-colors transition-transform rotate-180 ${className}`} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M241 369c-9.4 9.4-24.6 9.4-33.9 0L47 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 369z" fill="currentColor" />
    </svg>
  )
}

export function ChevronLeftSmallIcon() {
  return (
    <svg className="svg-inline--fa fa-chevron-left fa-sm" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="currentColor" />
    </svg>
  )
}

export function PasteIcon() {
  return (
    <svg className="svg-inline--fa fa-paste" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M104.6 48 64 48C28.7 48 0 76.7 0 112l0 272c0 35.3 28.7 64 64 64l96 0 0-48-96 0c-8.8 0-16-7.2-16-16l0-272c0-8.8 7.2-16 16-16l16 0c0 17.7 14.3 32 32 32l72.4 0C202 108.4 227.6 96 256 96l62 0c-7.1-27.6-32.2-48-62-48l-40.6 0C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48zM144 56a16 16 0 1 1 32 0 16 16 0 1 1-32 0zM448 464l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L464 243.9 464 448c0 8.8-7.2 16-16 16zM256 512l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L256 128c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z" fill="currentColor" />
    </svg>
  )
}

export function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.8 3.2 2.8 14.8 0 18M12 3c-2.8 3.2-2.8 14.8 0 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function MailChannelIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SlackLogoIcon() {
  return <img src="/assets/logos/slack.png" alt="" className="review-channel-logo review-channel-logo--slack" loading="lazy" />
}

export function IntegrationsIcon() {
  return <LuWorkflow size={18} strokeWidth={2} aria-hidden="true" />
}

export function MethodIconGTM() {
  return <span dangerouslySetInnerHTML={{ __html: STEP7_GTM_SVG }} />
}

export function MethodIconCode() {
  return <span dangerouslySetInnerHTML={{ __html: STEP7_CODE_SVG }} />
}

export function EnvelopeIcon() {
  return <span dangerouslySetInnerHTML={{ __html: STEP7_ENVELOPE_SVG }} />
}

export function InfoCircleIcon() {
  return <span dangerouslySetInnerHTML={{ __html: STEP7_INFO_SVG }} />
}

export function MethodIconAI() {
  return <span dangerouslySetInnerHTML={{ __html: STEP7_AI_AGENT_SVG }} />
}

export function MethodIconWordPress() {
  return <span dangerouslySetInnerHTML={{ __html: STEP7_WORDPRESS_SVG }} />
}
