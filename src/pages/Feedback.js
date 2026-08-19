import { useRef } from 'react';

function Feedback() {
  const dialogRef = useRef(null);
  const drawerRef = useRef(null);
  const toastRef = useRef(null);

  return (
    <div className="page">
      <h2>Feedback</h2>
      <p>
        Notifications, alerts, overlays, and status indicators.
      </p>

      <wa-card>
        <div slot="header"><strong>Callouts</strong></div>
        <div className="demo-stack">
          <wa-callout variant="brand">
            <strong>Brand</strong>: Informational message with brand styling.
          </wa-callout>
          <wa-callout variant="success">
            <strong>Success</strong>: Operation completed successfully.
          </wa-callout>
          <wa-callout variant="warning">
            <strong>Warning</strong>: Something needs your attention.
          </wa-callout>
          <wa-callout variant="danger">
            <strong>Danger</strong>: An error or destructive action.
          </wa-callout>
          <wa-callout variant="neutral">
            <strong>Neutral</strong>: General informational note.
          </wa-callout>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Badges</strong></div>
        <div className="badge-row">
          <wa-badge variant="brand">Brand</wa-badge>
          <wa-badge variant="success">Success</wa-badge>
          <wa-badge variant="warning">Warning</wa-badge>
          <wa-badge variant="danger">Danger</wa-badge>
          <wa-badge variant="neutral">Neutral</wa-badge>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Details</strong></div>
        <div className="demo-stack">
          <p>
            These three share <code>name="faq"</code> so only one opens
            at a time:
          </p>
          <wa-details summary="What is a details element?" name="faq">
            A standalone expandable section. Uses the{' '}
            <code>summary</code> attribute for the trigger text.
          </wa-details>
          <wa-details summary="How do I group them?" name="faq">
            Set the same <code>name</code> attribute. Opening one
            closes the others automatically.
          </wa-details>
          <wa-details summary="Custom icons" name="faq" className="custom-detail-icons">
            <wa-icon slot="expand-icon" name="square-plus" variant="regular" />
            <wa-icon slot="collapse-icon" name="square-minus" variant="regular" />
            Uses <code>square-plus</code> / <code>square-minus</code>{' '}
            icons with rotation disabled via{' '}
            <code>::part(icon) {'{ rotate: none }'}</code>.
          </wa-details>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Dialog and Drawer</strong></div>
        <div className="button-row">
          <wa-button variant="brand" onClick={() => { dialogRef.current.open = true; }}>
            Open Dialog
          </wa-button>
          <wa-button variant="neutral" onClick={() => { drawerRef.current.open = true; }}>
            Open Drawer
          </wa-button>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Popover</strong></div>
        <wa-button id="feedback-popover-trigger">Show Popover</wa-button>
        <wa-popover for="feedback-popover-trigger">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ margin: 0 }}>
              Popovers hold interactive content like buttons and links.
            </p>
            <wa-button variant="brand" size="s">Take action</wa-button>
          </div>
        </wa-popover>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Toast</strong></div>
        <div className="button-row">
          <wa-button variant="brand" onClick={() => toastRef.current?.create('Action completed.', { variant: 'brand', duration: 3000 })}>
            Brand Toast
          </wa-button>
          <wa-button variant="success" onClick={() => toastRef.current?.create('File saved.', { variant: 'success', duration: 3000 })}>
            Success Toast
          </wa-button>
          <wa-button variant="danger" onClick={() => toastRef.current?.create('Something went wrong.', { variant: 'danger', duration: 3000 })}>
            Danger Toast
          </wa-button>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Tooltip</strong></div>
        <div className="button-row">
          <wa-button id="fb-tip-left">Left</wa-button>
          <wa-tooltip for="fb-tip-left" placement="left">I appear on the left</wa-tooltip>

          <wa-button id="fb-tip-top">Top</wa-button>
          <wa-tooltip for="fb-tip-top" placement="top">I appear on top</wa-tooltip>

          <wa-button id="fb-tip-bottom">Bottom</wa-button>
          <wa-tooltip for="fb-tip-bottom" placement="bottom">I appear on the bottom</wa-tooltip>

          <wa-button id="fb-tip-right">Right</wa-button>
          <wa-tooltip for="fb-tip-right" placement="right">I appear on the right</wa-tooltip>
        </div>
      </wa-card>

      <wa-dialog label="Example Dialog" ref={dialogRef}>
        <p>
          Opened with <code>ref.current.open = true</code>. Closed
          with <code>data-dialog="close"</code>, the X button, or Escape.
        </p>
        <wa-button slot="footer" variant="brand" data-dialog="close">
          Close
        </wa-button>
      </wa-dialog>

      <wa-drawer label="Example Drawer" ref={drawerRef}>
        <p>
          Slides in from the edge. Same open/close pattern as dialogs.
        </p>
        <wa-button slot="footer" variant="brand" data-drawer="close">
          Close
        </wa-button>
      </wa-drawer>

      <wa-toast ref={toastRef} />
    </div>
  );
}

export default Feedback;
