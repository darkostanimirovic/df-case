import { DealfrontLogo, UserIcon } from './icons'
import { DfButton, LocaleTrigger } from './primitives'

export function AuthHeader({ showLogin = false, showProfile = false }) {
  return (
    <div className="z-top-navigation w-full">
      <header className="font-platform-header z-top-navigation relative flex h-14 justify-between px-6">
        <div className="flex w-full items-center justify-between">
          <DealfrontLogo />
          <div className="flex items-center gap-2 flex-none" role="group">
            {showProfile ? (
              <DfButton
                variant="outline"
                className="px-0 w-10 text-platform-neutral-900 hover:text-platform-neutral-900 border-platform-neutral-300"
                aria-label="Profile"
              >
                <span className="inline-flex">
                  <UserIcon />
                </span>
              </DfButton>
            ) : null}
            <LocaleTrigger />
            {showLogin ? (
              <div className="mx-4 hidden whitespace-nowrap sm:block">
                <a className="button button-default-size button-outline hidden sm:flex" href="#" target="_self" rel="noreferrer">
                  Log in
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </div>
  )
}

export function AuthShell({ children, showLogin = false, showProfile = false }) {
  return (
    <div id="app-wrapper" className="bg-platform-neutral-100 flex min-h-[100vh] flex-col items-center !antialiased">
      <AuthHeader showLogin={showLogin} showProfile={showProfile} />
      {children}
    </div>
  )
}

export function AppHeader() {
  return (
    <header className="font-platform-header relative flex h-16 justify-between px-6 z-top-navigation sticky top-0 transition-shadow duration-200 bg-white">
      <nav className="flex w-full items-center justify-between">
        <DealfrontLogo />
        <div className="flex items-center gap-2 flex-none" role="group">
          <DfButton
            variant="outline"
            className="px-0 w-10 text-platform-neutral-900 hover:text-platform-neutral-900 border-platform-neutral-300"
            aria-label="Profile"
          >
            <span className="inline-flex">
              <UserIcon />
            </span>
          </DfButton>
          <LocaleTrigger />
        </div>
      </nav>
    </header>
  )
}

export function AppShell({ children }) {
  return (
    <div className="flex h-screen !antialiased">
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="z-main relative flex-1 overflow-auto">
          <div className="flex h-full w-full flex-col app-wrapper bg-platform-neutral-100 items-center" id="app-wrapper">
            <div className="static-notifications-container" />
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
