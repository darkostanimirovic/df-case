// Archived channel previews kept for future exploration.
// Intentionally not used in the active flow.
export function ChannelPreviewMocks({ selectedDestination, selectedCrm = 'HubSpot' }) {
  if (selectedDestination === 'email') {
    return (
      <div className="review-channel-preview review-channel-preview--email review-channel-preview--animate">
        <div className="review-gmail-list">
          <div className="review-gmail-row">
            <span className="review-gmail-checkbox" />
            <div className="review-gmail-content">
              <div className="review-gmail-top">
                <strong>Dealfront</strong>
                <span className="review-gmail-time">2:52 PM</span>
              </div>
              <div className="review-gmail-subject">[High Intent] Acme Corp visited /pricing 3 times today</div>
              <div className="review-gmail-snippet">Suggested contacts: VP Sales, Head of RevOps. Last seen 2 minutes ago.</div>
            </div>
            <span className="review-gmail-star" />
          </div>

          <div className="review-gmail-row">
            <span className="review-gmail-checkbox" />
            <div className="review-gmail-content">
              <div className="review-gmail-top">
                <strong>Dealfront</strong>
                <span className="review-gmail-time">2:35 PM</span>
              </div>
              <div className="review-gmail-subject">Weekly account signal summary ready</div>
              <div className="review-gmail-snippet">12 matching companies this week. 4 viewed pricing, 3 viewed demo pages.</div>
            </div>
            <span className="review-gmail-star" />
          </div>
        </div>
      </div>
    )
  }

  if (selectedDestination === 'slack') {
    return (
      <div className="review-channel-preview review-channel-preview--slack review-channel-preview--animate">
        <div className="review-slack-card">
          <div className="review-slack-app-icon">
            <span />
          </div>
          <div className="review-slack-body">
            <div className="review-slack-meta">
              <strong>HubSpot</strong>
              <span className="review-slack-app-badge">APP</span>
              <span>8:14 PM</span>
            </div>
            <div className="review-slack-headline">New Docs Site sign-up with marketing consent!</div>
            <div className="review-slack-email-line">
              mcooper2@kcnsc.doe.gov <span>from Kcnsc Doe</span>
            </div>
            <div className="review-slack-details">
              <strong>Primary Use Case</strong> Data Classification
              <br />
              <strong>Department:</strong> Other
            </div>
            <div className="review-slack-action">
              <span className="review-slack-action-accent" />
              <button type="button">View contact in HubSpot</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedDestination === 'crm') {
    return (
      <div className="review-channel-preview review-channel-preview--crm review-channel-preview--animate">
        <div className="review-crm-flow">
          <div className="review-crm-node">Visitor event: Acme Corp viewed /pricing</div>
          <div className="review-crm-arrow">→</div>
          <div className="review-crm-node">{selectedCrm}: create/update company + activity</div>
          <div className="review-crm-arrow">→</div>
          <div className="review-crm-node">Assign task to account owner</div>
        </div>
      </div>
    )
  }

  return (
    <div className="review-channel-preview review-channel-preview--dashboard review-channel-preview--animate">
      <div className="review-dashboard-head">Dealfront custom feed</div>
      <div className="review-dashboard-item">Acme Corp visited /pricing • Score 84</div>
      <div className="review-dashboard-item">Northstar Labs visited /demo • Score 77</div>
      <div className="review-dashboard-item">Signal API triggered • 3 contacts suggested</div>
    </div>
  )
}
