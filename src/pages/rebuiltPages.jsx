import { AppShell, AuthShell } from '../components/layout'
import {
  BackContinueFooter,
  CheckedCheckbox,
  DfBadge,
  DfButton,
  DfInput,
  DfLabel,
  HintLabel,
  IconActionButtons,
  OnboardingCard,
} from '../components/primitives'
import {
  AngleDownIcon,
  ChevronLeftSmallIcon,
  EnvelopeIcon,
  GoogleIcon,
  InfoCircleIcon,
  MethodIconCode,
  MethodIconGTM,
  PasteIcon,
  SparklesIcon,
  XIcon,
} from '../components/icons'

const roles = ['Sales', 'Executive', 'Webmaster', 'Marketing', 'Operations', 'Marketing Agency', 'Other']
const salesSizes = ['1', '2-4', '5-20', '20+', 'No team']
const crmSystems = ['Pipedrive', 'Dynamics 365', 'Zoho', 'HubSpot', 'Salesforce', 'None', 'Other']
const highIntentRows = ['/pricing', '/enterprise', '/book-demo', '/solutions', '/customer-stories', '/product', '/contact-sales']

const icpItems = [
  {
    name: 'Enterprise & Mid-Market Software Development Teams',
    industries: ['Administrative and Support Services', 'Collection Agencies', 'Events Services', 'Facilities Services', 'Janitorial Services', 'Landscaping Services', 'Fundraising', '+92 More'],
    size: ['IT Services and IT Consulting', 'IT System Custom Software Development', 'Software Development', 'Internet Marketplace Platforms', '3-10', '11-50', '51-200', '201-500'],
  },
  {
    name: 'High-Growth Startups & Scale-Ups',
    industries: ['Computer Software', 'SaaS', 'B2B Services', 'FinTech', 'AI & ML'],
    size: ['11-50', '51-200', '201-500'],
  },
]

const personaItems = [
  {
    name: 'Platform Engineer',
    departments: ['Engineering'],
    seniority: ['Top Management'],
    keywords: ['Platform Engineer', 'Staff Software Engineer', 'Principal Engineer', 'VP of Engineering'],
  },
  {
    name: 'Co-Founder & CTO',
    departments: ['Management'],
    seniority: ['Top Management'],
    keywords: ['Co-Founder & CTO', 'Head of Engineering', 'VP of Product'],
  },
  {
    name: 'CTO / VP of Engineering',
    departments: ['Management', 'Engineering'],
    seniority: ['Top Management'],
    keywords: ['CTO', 'VP of Engineering', 'Director of Engineering', 'Software Engineering Manager'],
  },
  {
    name: 'Lead Developer / Architect',
    departments: ['Engineering'],
    seniority: ['Manager', 'Senior'],
    keywords: ['Lead Developer', 'Software Architect', 'Principal Developer'],
  },
  {
    name: 'Frontend Developer / Design Engineer',
    departments: ['Engineering', 'Design'],
    seniority: ['Senior', 'Mid-Level'],
    keywords: ['Frontend Developer', 'Design Engineer', 'UI Engineer'],
  },
  {
    name: 'Product Manager',
    departments: ['Product'],
    seniority: ['Manager', 'Senior'],
    keywords: ['Product Manager', 'Head of Product', 'Director of Product'],
  },
]

const trackerScriptSnippet = "<script> (function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('p1e024BoOLJaGB6d'); </script>"

function SectionIntro({ title, text }) {
  return (
    <div className="gap-single-and-half flex flex-col">
      <div className="font-semibold">{title}</div>
      <p className="text-platform-neutral-400 u-reset-p text-sm">{text}</p>
    </div>
  )
}

function EntityCard({ name, groups }) {
  return (
    <div className="bg-platform-neutral-50 animate-fadeIn animate-duration-[1s] space-y-2 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <HintLabel text={name} />
        <IconActionButtons />
      </div>
      <div className="space-y-4">
        {groups.map((group) => (
          <div className="flex flex-col space-y-1" key={`${name}-${group.title}`}>
            <span className="text-xs font-bold">{group.title}</span>
            <ul className="flex flex-wrap gap-2">
              {group.values.map((value) => (
                <li key={`${group.title}-${value}`}>
                  <DfBadge>{value}</DfBadge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function InstallTrackerSupportFooter({ showAccordion = false }) {
  return (
    <div className={showAccordion ? 'space-y-4' : undefined}>
      <div className="u-text-utility u-line-height-1-4 text-platform-neutral-600 text-sm">
        <div className="pl-double-and-half relative">
          <InfoCircleIcon />
          Visit our{' '}
          <a
            className="link link-blue-light-mode inline-flex max-w-fit items-center gap-1"
            href="https://help.dealfront.com/articles/3691296-how-do-i-install-the-leadfeeder-tracker"
            target="_blank"
            rel="noreferrer noopener"
          >
            help center
          </a>{' '}
          or <a className="link link-blue-light-mode" href="mailto:support@dealfront.com?subject=Dealfront%20Tracking%20question">contact our support team</a>{' '}
          for additional help with installing the tracker. The Leadfeeder tracker also works with Consent Management Platforms (CMPs).{' '}
          <a
            className="link link-blue-light-mode"
            href="https://help.dealfront.com/articles/5882613-using-leadfeeder-tracker-with-consent-to-comply-with-gdpr"
            target="_blank"
            rel="noreferrer noopener"
          >
            Learn more
          </a>{' '}
          about easily setting up the tracker with a CMP.
        </div>
      </div>

      {showAccordion ? (
        <article className="accordion">
          <section className="accordion-section flex flex-col flex-1">
            <header className="accordion-section-head flex shrink-0 u-pad-horizontal--single gap-single !pl-0 text-sm">
              <button className="gap-single unstyled-button accordion-section-head-trigger flex u-pad-vertical--single" type="button">
                <AngleDownIcon />
              </button>
              <span className="u-min-width--fit-content">Additional tracker configuration</span>
            </header>
            <div className="accordion-section-body u-pad-horizontal--single u-pad-vertical--single border-platform-neutral-200 rounded border border-solid">
              <CheckedCheckbox />
            </div>
          </section>
        </article>
      ) : null}
    </div>
  )
}

function TrackerCodeSnippet() {
  return (
    <div className="relative rounded-sm border border-solid bg-platform-primary-50 border-platform-primary-50 flex gap-1 code-snippet--multiline pb-10">
      <code className="code-snippet__code u-text-font-size-s">{trackerScriptSnippet}</code>
      <button className="copy-btn flex flex-row gap-1 px-1 button button-text button-tiny-size unstyled-button absolute bottom-2 right-2" type="button">
        <PasteIcon />
        <span>Copy script</span>
      </button>
    </div>
  )
}

function TrackerStatusBadge() {
  return (
    <div className="flex-align-center-initial gap-single flex">
      <div className="text-sm font-semibold">Tracker status:</div>
      <span
        className="tooltip"
        aria-label='Please install the tracker and click on the "Verify installation" button to refresh the installation status'
      >
        <span className="status-indicator status-indicator--danger">Script not installed</span>
      </span>
    </div>
  )
}

export function Step1WelcomePage() {
  return (
    <AuthShell showLogin>
      <div className="platform-auth flex w-full flex-auto flex-shrink-0 flex-grow flex-col items-center justify-center">
        <div className="flex w-full flex-1 flex-col">
          <div className="bg-platform-neutral-white mx-auto flex max-w-[940px] w-full sm:my-2 md:my-0 flex-row shadow-sm border border-solid border-platform-neutral-200">
            <div className="flex min-w-0 grow flex-col justify-center p-4 md:px-8 md:py-10">
              <div className="mx-auto max-w-[500px]">
                <h1 className="u-reset-heading font-platform-header text-2xl font-semibold text-black">Start your free trial</h1>
                <p className="mt-single u-reset-p font-platform-header text-black opacity-75">
                  <span>14-day free trial. No credit card required.</span>
                </p>
                <div className="flex flex-col gap-6 mt-6 sm:mt-8">
                  <div className="flex flex-col gap-4">
                    <DfButton variant="outline">
                      <span className="inline-flex">
                        <GoogleIcon />
                      </span>
                      <span className="ml-2">Sign up with Google</span>
                    </DfButton>
                  </div>
                  <div className="text-platform-neutral-400 bg-platform-neutral-200 flex items-center justify-center uppercase opacity-60 text-xs h-8">or</div>
                  <div className="bg-platform-neutral-white px-4">
                    <form>
                      <DfInput label="Your business email" type="email" inputClassName="input-text-validated !rounded" />
                      <DfButton
                        variant="filled"
                        type="submit"
                        className="bg-green-marketing hover:bg-green-marketing-light mt-triple w-full font-semibold text-white"
                      >
                        Sign up
                      </DfButton>
                      <div className="text-font-s mt-triple text-platform-neutral-700 opacity-75">
                        By continuing with the sign up you agree to our{' '}
                        <a className="link-blue-light-mode" href="#">Terms and Conditions</a> and acknowledge our{' '}
                        <a className="link-blue-light-mode" href="#">Privacy Policy</a>.
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-none w-[388px] bg-platform-primary-600 p-7 overflow-hidden gap-4">
              <div className="font-medium font-platform-header text-center leading-8 flex justify-center items-center text-2xl text-white">
                Identify companies visiting your website
              </div>
              <div className="flex flex-col justify-center items-center -mt-[15px]">
                <div className="text-font-s flex items-center justify-center text-center font-semibold uppercase tracking-wide text-white">
                  Trusted by over 70,000 companies
                </div>
                <div className="gap-double sm:-mx-double-and-half mt-4 flex flex-wrap items-center justify-center">
                  {['HubSpot', 'monday', 'Pipedrive', 'Zapier', 'Loom'].map((name) => (
                    <span key={name} className="rounded bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-double px-triple bg-platform-neutral-100 sm:hidden text-center">
            Already have an account? <a className="link link-blue-light-mode" href="#">Log in »</a>
          </div>
        </div>
      </div>
    </AuthShell>
  )
}

export function Step2ContactInfoPage() {
  return (
    <AuthShell showProfile>
      <div className="platform-auth flex w-full flex-auto flex-shrink-0 flex-grow flex-col items-center justify-center">
        <OnboardingCard
          step={2}
          heading="Tell us about yourself"
          description="Help us personalize your Dealfront experience for better recommendations."
          icon={<SparklesIcon />}
        >
          <form>
            <fieldset className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DfInput label="First name" placeholder="John" value="" inputClassName="input-text-validated" />
                <DfInput label="Last name" placeholder="Doe" value="" inputClassName="input-text-validated" />
              </div>

              <div className="space-y-2">
                <DfLabel>Phone number</DfLabel>
                <div className="flex items-center gap-2">
                  <div className="min-w-[96px] rounded border border-solid border-platform-neutral-300 h-10 px-2 flex items-center justify-between bg-white text-platform-neutral-700">
                    <span className="text-lg">🇷🇸</span>
                    <span className="text-sm font-medium">+381</span>
                  </div>
                  <DfInput type="tel" placeholder="601234567" className="flex-1" />
                </div>
              </div>

              <div className="space-y-2">
                <DfLabel>What's your role?</DfLabel>
                <div className="flex items-center gap-2 grid grid-cols-2 md:grid-cols-4">
                  {roles.map((role) => (
                    <DfButton key={role} variant="outline" className="justify-center">
                      {role}
                    </DfButton>
                  ))}
                </div>
              </div>
            </fieldset>
          </form>
          <BackContinueFooter />
        </OnboardingCard>
      </div>
    </AuthShell>
  )
}

export function Step3CompanyDetailsPage() {
  return (
    <AuthShell showProfile>
      <div className="platform-auth flex w-full flex-auto flex-shrink-0 flex-grow flex-col items-center justify-center">
        <OnboardingCard
          step={3}
          heading="Tell us about vercel.com"
          description="Help us understand your sales operations"
          icon={<SparklesIcon />}
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <DfLabel>How big is your sales team?</DfLabel>
              <div className="flex items-center gap-2 grid grid-cols-3 md:grid-cols-5">
                {salesSizes.map((size) => (
                  <DfButton key={size} variant="outline" className="justify-center">
                    {size}
                  </DfButton>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <DfLabel>Which CRM system does your company use?</DfLabel>
              <div className="flex items-center gap-2 grid grid-cols-2 md:grid-cols-4">
                {crmSystems.map((crm) => (
                  <DfButton key={crm} variant="outline" className="flex !h-full flex-col items-center justify-center gap-1 py-3">
                    {crm}
                  </DfButton>
                ))}
              </div>
            </div>
          </form>
          <BackContinueFooter />
        </OnboardingCard>
      </div>
    </AuthShell>
  )
}

export function Step4HighIntentPagesPage() {
  return (
    <AuthShell showProfile>
      <div className="platform-auth flex w-full flex-auto flex-shrink-0 flex-grow flex-col items-center justify-center">
        <OnboardingCard
          step={4}
          heading="Your High-Intent Pages"
          description="We've analyzed your website and found these pages with the strongest buying intent."
          icon={<SparklesIcon />}
        >
          <form className="space-y-3">
            {highIntentRows.map((path, idx) => (
              <div key={`${path}-${idx}`} className="flex items-center gap-2">
                <DfInput
                  prepend="vercel.com"
                  placeholder="/page_name"
                  value={path}
                  className="flex-1"
                  inputClassName="input-text-validated !h-[38px] !border-none !rounded-bl-none !rounded-tl-none"
                />
                <DfButton variant="text" size="small" className="px-0 w-8 h-6 w-6 rounded-lg" aria-label="Delete page">
                  <XIcon />
                </DfButton>
              </div>
            ))}
          </form>
          <DfButton variant="outline" className="mt-6 w-full">
            Add High-Intent Page
          </DfButton>
          <BackContinueFooter />
        </OnboardingCard>
      </div>
    </AuthShell>
  )
}

export function Step5IdealCustomerProfilesPage() {
  return (
    <AuthShell showProfile>
      <div className="platform-auth flex w-full flex-auto flex-shrink-0 flex-grow flex-col items-center justify-center">
        <OnboardingCard
          step={5}
          heading="Your Ideal Customer Profiles"
          description="We've identified your best-fit prospects based on your current customer patterns."
          icon={<SparklesIcon />}
        >
          <div className="space-y-4">
            {icpItems.map((item) => (
              <EntityCard
                key={item.name}
                name={item.name}
                groups={[
                  { title: 'Industries', values: item.industries },
                  { title: 'Company Attributes', values: item.size },
                ]}
              />
            ))}
          </div>
          <DfButton variant="outline" className="mt-6 w-full">
            Add Ideal Customer Profile
          </DfButton>
          <BackContinueFooter />
        </OnboardingCard>
      </div>
    </AuthShell>
  )
}

export function Step6BuyerPersonasPage() {
  return (
    <AuthShell showProfile>
      <div className="platform-auth flex w-full flex-auto flex-shrink-0 flex-grow flex-col items-center justify-center">
        <OnboardingCard
          step={6}
          heading="Your Buyer Personas"
          description="These are the key decision makers from your target accounts based on your data."
          icon={<SparklesIcon />}
        >
          <div className="space-y-4">
            {personaItems.map((item) => (
              <EntityCard
                key={item.name}
                name={item.name}
                groups={[
                  { title: 'Departments', values: item.departments },
                  { title: 'Seniority', values: item.seniority },
                  { title: 'Job Title Keywords', values: item.keywords },
                ]}
              />
            ))}
          </div>
          <DfButton variant="outline" className="mt-6 w-full">
            Add Buyer Persona
          </DfButton>
          <BackContinueFooter finish />
        </OnboardingCard>
      </div>
    </AuthShell>
  )
}

export function Step7InstallTrackerPage() {
  return (
    <AppShell>
      <div className="website-install-tracker bg-platform-neutral-100 w-full flex-1">
        <div className="website-install-tracker__content-wrapper text-platform-neutral-600 flex max-w-[820px] flex-col gap-2">
          <section className="full-screen-panel full-screen-panel--wide flex flex-col gap-2.5 !mx-0 mt-4">
            <div className="full-screen-panel__main--with-shadow">
              <article className="full-screen-panel-body flex-column gap-double flex">
                <div className="gap-single flex flex-col">
                  <h2 className="u-reset-heading font-platform-header text-platform-neutral-700 text-lg font-semibold">
                    Last step: Install the Leadfeeder tracker on your website
                  </h2>
                  <p className="u-reset-p text-sm">
                    The tracker is essential for Leadfeeder to identify the companies visiting your website. It is GDPR compliant and the setup takes only 2 minutes.
                  </p>
                  <form className="flex-center flex flex-row gap-5 text-sm">
                    <strong className="whitespace-nowrap">Your website:</strong>
                    <span>vercel.com</span>
                    <div className="flex flex-row gap-4">
                      <button className="unstyled-button link link-blue-light-mode text-sm" type="button">
                        Edit
                      </button>
                    </div>
                  </form>
                </div>

                <div className="gap-triple flex flex-col">
                  <SectionIntro
                    title="Recommended installation methods"
                    text="For your website, these would work best"
                  />

                  <a href="#" className="no-underline text-inherit">
                    <div className="flex-space-between flex-align-center-initial border-platform-neutral-200 group flex h-[90px] w-full gap-6 rounded border border-solid p-5 transition-colors duration-200 hover:border-platform-primary-400 hover:bg-platform-primary-50">
                      <span className="recommended-method-box__icon flex max-h-[60px] w-[70px] justify-center">
                        <MethodIconGTM />
                      </span>
                      <span className="flex-grow--1 flex flex-col gap-1">
                        <span className="u-text-font-size-m u-text-body u-text-bold">Google Tag Manager</span>
                      </span>
                      <DfButton variant="outline">Start</DfButton>
                    </div>
                  </a>

                  <a href="#" className="no-underline text-inherit">
                    <div className="flex-space-between flex-align-center-initial border-platform-neutral-200 group flex h-[90px] w-full gap-6 rounded border border-solid p-5 transition-colors duration-200 hover:border-platform-primary-400 hover:bg-platform-primary-50">
                      <span className="recommended-method-box__icon flex max-h-[60px] w-[70px] justify-center">
                        <MethodIconCode />
                      </span>
                      <span className="flex-grow--1 flex flex-col gap-1">
                        <span className="u-text-font-size-m u-text-body u-text-bold">HTML code</span>
                      </span>
                      <DfButton variant="outline">Start</DfButton>
                    </div>
                  </a>
                </div>

                <div className="gap-single-and-half flex flex-col">
                  <SectionIntro title="Other installation methods" text="If you want to install Leadfeeder in a different way" />

                  <div className="flex flex-row gap-3">
                    <a href="#" className="text-platform-neutral-600 text-nowrap no-underline">
                      <button
                        className="box-with-badge unstyled-button border border-solid border-platform-neutral-200 hover:border-platform-primary-400 hover:bg-platform-primary-50 hover:!text-platform-neutral-600 box-with-badge--medium"
                        type="button"
                      >
                        <div className="box-with-badge__content flex-column flex whitespace-normal text-center text-xs">
                          <EnvelopeIcon />
                          Send via email
                        </div>
                      </button>
                    </a>
                    <button className="unstyled-button link link-blue-light-mode self-center text-sm" type="button">
                      Show 5 other installation options
                    </button>
                  </div>
                </div>
              </article>

              <InstallTrackerSupportFooter showAccordion />
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  )
}

export function Step71GoogleTagManagerInstallPage() {
  return (
    <AppShell>
      <div className="website-install-tracker bg-platform-neutral-100 w-full flex-1">
        <div className="website-install-tracker__content-wrapper text-platform-neutral-600 flex max-w-[820px] flex-col gap-2">
          <section className="full-screen-panel full-screen-panel--super-wide flex flex-col gap-2.5">
            <div className="full-screen-panel__main--with-shadow">
              <article className="full-screen-panel-body gap-triple flex flex-col">
                <div className="gap-single flex flex-col">
                  <h2 className="u-reset-heading font-platform-header text-platform-neutral-700 text-lg font-semibold">
                    Last step: Install the Leadfeeder tracker on your website
                  </h2>
                  <p className="u-reset-p text-sm">
                    The tracker is essential for Leadfeeder to identify the companies visiting your website. It is GDPR compliant and the setup takes only 2 minutes.
                  </p>
                  <TrackerStatusBadge />
                </div>

                <div className="gap-double flex flex-row">
                  <div className="flex-5 flex-space-between gap-double flex flex-col">
                    <div>
                      <iframe
                        className="overflow-hidden rounded"
                        title="Installing Dealfront tracker using GTM"
                        width="390"
                        height="219"
                        src="/mirror/youtube/D_IfNh4m_hU.html"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>

                    <a className="link link-blue-light-mode flex-start inline-flex items-center gap-3 text-sm font-bold font-semibold" href="#" target="_self">
                      <ChevronLeftSmallIcon />
                      <span className="website-install-tracker__back-button-text">Back</span>
                    </a>
                  </div>

                  <section className="flex flex-col gap-4 u-reset-section text-platform-neutral-700 border-solid flex-7">
                    <h2 className="u-reset-heading flex flex-row items-baseline font-xl gap-8 font-platform-header font-semibold">
                      Install Leadfeeder with Google Tag Manager
                    </h2>
                    <div className="flex flex-col gap-4">
                      <ol className="website-install-tracker__styled-list flex flex-col gap-4 text-sm">
                        <li className="website-install-tracker__styled-list-item">
                          <div className="flex-column flex gap-2">
                            <span>Copy the Website Tracker script</span>
                            <TrackerCodeSnippet />
                          </div>
                        </li>
                        <li className="website-install-tracker__styled-list-item">
                          <p className="u-reset-p">Log in to your Google Tag Manager account. Add a new tag and give it a name, e.g: "Website Tracker"</p>
                        </li>
                        <li className="website-install-tracker__styled-list-item">
                          <p className="u-reset-p">Click "Tag Configuration", select "Custom HTML" and then paste the script</p>
                        </li>
                        <li className="website-install-tracker__styled-list-item">
                          <p className="u-reset-p">Click "Triggering", select "All pages" from the list and then save the Tag</p>
                        </li>
                        <li className="website-install-tracker__styled-list-item">
                          <p className="u-reset-p">
                            Click on the Submit button, and then publish the version to make the new Tag work.
                            <ul>
                              <li className="text-platform-neutral mt-1 text-xs">
                                If you don&apos;t see the Submit, Publish buttons, ask a colleague who has the access rights to Publish these changes. The new Tag won&apos;t work unless the changes are published.
                              </li>
                            </ul>
                          </p>
                        </li>
                        <li className="website-install-tracker__styled-list-item">
                          <div className="flex-space-between flex flex-col gap-5">
                            <div className="flex-column flex gap-1">
                              <p className="u-reset-p">Finished all the steps?</p>
                              <p className="u-reset-p text-platform-neutral text-xs">
                                To verify we&apos;ll open your website to create a visit. If the tracker is correctly installed, we will redirect you to Leadfeeder in few seconds.
                              </p>
                            </div>
                            <div>
                              <button className="unstyled-button outline-none button button-default-size button-outline" type="button">
                                Verify installation
                              </button>
                            </div>
                          </div>
                        </li>
                      </ol>

                      <p className="u-text-right u-pad-top--double u-border-top text-platform-neutral-600 text-sm">
                        Need some help?{' '}
                        <a className="link link-blue-light-mode" href="#">
                          Send instructions to the website manager
                        </a>
                      </p>
                    </div>
                  </section>
                </div>
              </article>

              <InstallTrackerSupportFooter />
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  )
}

export function Step72HtmlCodeInstallPage() {
  return (
    <AppShell>
      <div className="website-install-tracker bg-platform-neutral-100 w-full flex-1">
        <div className="website-install-tracker__content-wrapper text-platform-neutral-600 flex max-w-[820px] flex-col gap-2">
          <section className="full-screen-panel full-screen-panel--super-wide flex flex-col gap-2.5">
            <div className="full-screen-panel__main--with-shadow">
              <article className="full-screen-panel-body flex-column gap-triple flex">
                <div className="gap-single flex flex-col">
                  <h2 className="u-reset-heading font-platform-header text-platform-neutral-700 text-lg font-semibold">
                    Last step: Install the Leadfeeder tracker on your website
                  </h2>
                  <p className="u-reset-p text-sm">
                    The tracker is essential for Leadfeeder to identify the companies visiting your website. It is GDPR compliant and the setup takes only 2 minutes.
                  </p>
                  <TrackerStatusBadge />
                </div>

                <div className="gap-double flex">
                  <div className="flex-5 flex-space-between gap-double flex flex-col">
                    <div>
                      <iframe
                        className="overflow-hidden rounded"
                        title="Adding Leadfeeder Tracker to your HTML site"
                        width="390"
                        height="219"
                        src="/mirror/youtube/WRhokog4Im0.html"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <a className="link link-blue-light-mode flex-start inline-flex items-center gap-3 text-sm font-bold font-semibold" href="#" target="_self">
                      <ChevronLeftSmallIcon />
                      <span className="website-install-tracker__back-button-text">Back</span>
                    </a>
                  </div>

                  <section className="flex flex-col gap-4 u-reset-section text-platform-neutral-700 border-solid flex-7">
                    <h2 className="u-reset-heading flex flex-row items-baseline font-xl gap-8 font-platform-header font-semibold">
                      Install Leadfeeder with HTML code
                    </h2>
                    <div className="flex flex-col gap-4">
                      <ol className="website-install-tracker__styled-list flex flex-col gap-4 text-sm">
                        <li className="website-install-tracker__styled-list-item">
                          <div className="flex-column flex gap-2">
                            <span>Copy the Website Tracker script</span>
                            <TrackerCodeSnippet />
                          </div>
                        </li>
                        <li className="gap-half website-install-tracker__styled-list-item flex flex-col">
                          <p className="u-reset-p">Paste it into the header or footer of your website</p>
                          <p className="u-reset-p">
                            <strong>vercel.com</strong>
                          </p>
                        </li>
                        <li className="website-install-tracker__styled-list-item">
                          <div className="flex-space-between flex flex-col gap-5">
                            <div className="flex-column flex gap-1">
                              <p className="u-reset-p">Finished all the steps?</p>
                              <p className="u-reset-p text-platform-neutral text-xs">
                                To verify we&apos;ll open your website to create a visit. If the tracker is correctly installed, we will redirect you to Leadfeeder in few seconds.
                              </p>
                            </div>
                            <div>
                              <button className="unstyled-button outline-none button button-default-size button-outline" type="button">
                                Verify installation
                              </button>
                            </div>
                          </div>
                        </li>
                      </ol>

                      <p className="u-text-right u-pad-top--double u-border-top text-platform-neutral-600 text-sm">
                        Need some help?{' '}
                        <a className="link link-blue-light-mode" href="#">
                          Send instructions to the website manager
                        </a>
                      </p>
                    </div>
                  </section>
                </div>
              </article>

              <InstallTrackerSupportFooter />
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  )
}
