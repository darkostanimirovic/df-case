import { useState } from 'react'
import { DfButton } from '../primitives'
import { MethodIconGTM, MethodIconCode, MethodIconAI, MethodIconWordPress, PasteIcon } from '../icons'

function YouTubeEmbed({ videoId }) {
  return (
    <div className="install-video-embed">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

function CodeSnippet({ code, label = 'Copy code' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="install-code-snippet">
      <div className="install-code-snippet-header">
        <DfButton variant="outline" size="small" onClick={handleCopy}>
          <PasteIcon /> {copied ? 'Copied!' : label}
        </DfButton>
      </div>
      <pre className="install-code-snippet-content">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function GTMTab() {
  const gtmSnippet = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->`

  return (
    <div className="install-tab-content install-tab-two-column">
      <div className="install-tab-column">
        <YouTubeEmbed videoId="D_IfNh4m_hU" />
      </div>
      <div className="install-tab-column">
        <h3>Install via Google Tag Manager</h3>
        <p>
          The recommended way to install Dealfront tracking. Add the Dealfront GTM tag to your container
          and publish the changes.
        </p>
        <CodeSnippet code={gtmSnippet} />
        <p className="install-tab-note">
          Watch the video for step-by-step installation instructions. Takes about 2 minutes.
        </p>
      </div>
    </div>
  )
}

function CodingAgentTab() {
  const agentInstruction = `Install Dealfront website tracker using the official installation guide at:
https://dealfront.com/skills/tracker-installation.md

Please follow the instructions to add the tracking script to the appropriate location in our codebase.`

  return (
    <div className="install-tab-content install-tab-single">
      <h3>Install with a Coding Agent</h3>
      <p>
        Give this instruction to GitHub Copilot, Cursor, or any AI coding assistant. The skill document 
        contains context about where to place the tracker script based on your tech stack.
      </p>
      <CodeSnippet code={agentInstruction} label="Copy instruction" />
    </div>
  )
}

function HTMLSnippetTab() {
  const htmlSnippet = `<!-- Dealfront Website Tracker -->
<script type="text/javascript">
  (function(d,e,a,l,f,r,o,n,t){
    d[f]=d[f]||function(){(d[f].q=d[f].q||[]).push(arguments)};
    r=e.createElement(a);r.async=1;r.src=l;
    o=e.getElementsByTagName(a)[0];o.parentNode.insertBefore(r,o);
  })(window,document,'script','https://cdn.dealfront.com/tracker.js','df');
  df('init', 'YOUR_ACCOUNT_ID');
</script>
<!-- End Dealfront Website Tracker -->`

  return (
    <div className="install-tab-content install-tab-single">
      <h3>Install via HTML Snippet</h3>
      <p>
        Add this tracking script directly to your website template, preferably in the <code>&lt;head&gt;</code> section
        of your HTML before the closing tag.
      </p>
      <CodeSnippet code={htmlSnippet} />
      <div className="install-tab-info">
        <strong>Note:</strong> Replace <code>YOUR_ACCOUNT_ID</code> with your actual Dealfront account ID.
        The script will load asynchronously and won't affect your page load speed.
      </div>
    </div>
  )
}

function WordPressTab() {
  return (
    <div className="install-tab-content install-tab-two-column">
      <div className="install-tab-column">
        <YouTubeEmbed videoId="9RbhwBsfx4c" />
      </div>
      <div className="install-tab-column">
        <h3>Install on WordPress</h3>
        <p>
          Use our official WordPress plugin for the easiest installation. No coding required.
        </p>
        <div className="space-y-3">
          <div className="install-tab-step">
            <strong>1.</strong> Go to your WordPress admin dashboard
          </div>
          <div className="install-tab-step">
            <strong>2.</strong> Navigate to Plugins → Add New
          </div>
          <div className="install-tab-step">
            <strong>3.</strong> Search for "Dealfront"
          </div>
          <div className="install-tab-step">
            <strong>4.</strong> Install and activate the plugin
          </div>
        </div>
        <DfButton 
          variant="outline" 
          className="mt-4"
          onClick={() => window.open('https://wordpress.org/plugins/dealfront/', '_blank')}
        >
          Visit Plugin Page
        </DfButton>
        <p className="install-tab-note">
          Watch the video tutorial for detailed instructions.
        </p>
      </div>
    </div>
  )
}

export function InstallMethodTabs({ selectedGoal }) {
  // Define all tabs
  const getAllTabs = () => {
    const allTabs = [
      {
        id: 'gtm',
        label: 'Google Tag Manager',
        icon: <MethodIconGTM />,
        component: GTMTab,
      },
      {
        id: 'agent',
        label: 'Coding Agent',
        icon: <MethodIconAI />,
        component: CodingAgentTab,
      },
      {
        id: 'html',
        label: 'HTML Snippet',
        icon: <MethodIconCode />,
        component: HTMLSnippetTab,
      },
      {
        id: 'wordpress',
        label: 'WordPress',
        icon: <MethodIconWordPress />,
        component: WordPressTab,
      },
    ]

    // Reorder tabs based on goal (all tabs always visible)
    if (selectedGoal === 'identify-visitors') {
      // Coding Agent first for goal 1
      return allTabs.sort((a, b) => {
        if (a.id === 'agent') return -1
        if (b.id === 'agent') return 1
        return 0
      })
    } else {
      // GTM first for goals 2 and 3
      return allTabs.sort((a, b) => {
        if (a.id === 'gtm') return -1
        if (b.id === 'gtm') return 1
        return 0
      })
    }
  }

  const tabs = getAllTabs()
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const activeTabData = tabs.find((tab) => tab.id === activeTab)
  const ActiveComponent = activeTabData?.component

  return (
    <div className="install-method-tabs">
      <div className="install-method-tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`install-method-tab ${activeTab === tab.id ? 'install-method-tab--active' : ''}`.trim()}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="install-method-tab-icon">{tab.icon}</span>
            <span className="install-method-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="install-method-tabs-body">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  )
}
