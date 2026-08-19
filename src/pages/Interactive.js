import { useRef, useState, useEffect } from 'react';

function Interactive() {
  const dialogRef = useRef(null);
  const drawerRef = useRef(null);
  const toastRef = useRef(null);
  const dropdownRef = useRef(null);
  const [lastAction, setLastAction] = useState(null);

  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;
    const handler = (e) => setLastAction(e.detail?.item?.textContent);
    el.addEventListener('wa-select', handler);
    return () => el.removeEventListener('wa-select', handler);
  }, []);

  return (
    <div className="page">
      <h2>Interactive Components</h2>
      <p>
        State, refs, and imperative control.
      </p>

      <wa-card>
        <div slot="header"><strong>Accordion</strong></div>
        <wa-accordion>
          <wa-accordion-item label="Why React 19?">
            React 19 sets properties on custom elements and maps their events
            to JSX handlers. You can use <code>&lt;wa-button&gt;</code> the
            same way you'd use a <code>&lt;button&gt;</code>.
          </wa-accordion-item>
          <wa-accordion-item label="Why Web Awesome?">
            A full component library built on web standards. Works with React,
            Vue, Angular, Svelte, or plain HTML.
          </wa-accordion-item>
          <wa-accordion-item label="Do I need the React wrappers?">
            Web Awesome ships wrappers in <code>dist/react/</code>. React 19
            makes them redundant. Use the <code>&lt;wa-*&gt;</code> elements
            directly.
          </wa-accordion-item>
        </wa-accordion>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Tabs</strong></div>
        <wa-tab-group>
          <wa-tab slot="nav" panel="properties">Properties</wa-tab>
          <wa-tab slot="nav" panel="events">Events</wa-tab>
          <wa-tab slot="nav" panel="slots">Slots</wa-tab>
          <wa-tab slot="nav" panel="state">State Control</wa-tab>

          <wa-tab-panel name="properties">
            <p>
              React 19 sets properties on custom elements, not attributes.
              Objects, arrays, and booleans pass through without{' '}
              <code>JSON.stringify</code>.
            </p>
            <pre><code>{`<wa-input value={name} with-clear />`}</code></pre>
          </wa-tab-panel>
          <wa-tab-panel name="events">
            <p>
              React 19 maps DOM events to JSX handlers with the{' '}
              <code>on</code> + name convention. Form controls fire native{' '}
              <code>change</code> and <code>input</code> events. Lifecycle
              events like <code>wa-after-hide</code> use PascalCase.
            </p>
            <pre><code>{`// Form controls — native events
<wa-select onChange={(e) => setValue(e.target.value)}>
<wa-input onInput={(e) => setName(e.target.value)} />

// Lifecycle — custom events
<wa-dialog onWaAfterHide={() => console.log('closed')} />`}</code></pre>
          </wa-tab-panel>
          <wa-tab-panel name="slots">
            <p>
              Named slots use the <code>slot</code> attribute. Same syntax
              as vanilla HTML.
            </p>
            <pre><code>{`<wa-card>\n  <div slot="header">Title</div>\n  Body content here\n  <div slot="footer">Actions</div>\n</wa-card>`}</code></pre>
          </wa-tab-panel>
          <wa-tab-panel name="state">
            <p>
              Open dialogs and drawers by setting <code>open = true</code>{' '}
              on the ref. Close them with the <code>data-dialog</code> or{' '}
              <code>data-drawer</code> attribute. No React state needed.
            </p>
            <pre><code>{`const ref = useRef(null);\n\n<wa-button onClick={() => ref.current.open = true}>\n  Open\n</wa-button>\n\n<wa-dialog ref={ref}>\n  <wa-button slot="footer" data-dialog="close">\n    Close\n  </wa-button>\n</wa-dialog>`}</code></pre>
          </wa-tab-panel>
        </wa-tab-group>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Dialogs, Drawers, and Toasts</strong></div>
        <div className="button-row">
          <wa-button variant="brand" onClick={() => { dialogRef.current.open = true; }}>
            Open Dialog
          </wa-button>
          <wa-button variant="neutral" onClick={() => { drawerRef.current.open = true; }}>
            Open Drawer
          </wa-button>
          <wa-button variant="success" onClick={() => toastRef.current?.create('Hello from a toast!', { variant: 'brand', duration: 3000 })}>
            Show Toast
          </wa-button>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Tooltips</strong></div>
        <div className="button-row">
          <wa-button id="tip-left">Left</wa-button>
          <wa-tooltip for="tip-left" placement="left">I appear on the left</wa-tooltip>

          <wa-button id="tip-top">Top</wa-button>
          <wa-tooltip for="tip-top" placement="top">I appear on top</wa-tooltip>

          <wa-button id="tip-bottom">Bottom</wa-button>
          <wa-tooltip for="tip-bottom" placement="bottom">I appear on the bottom</wa-tooltip>

          <wa-button id="tip-right">Right</wa-button>
          <wa-tooltip for="tip-right" placement="right">I appear on the right</wa-tooltip>
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
            <code>::part(icon) {'{'} rotate: none {'}'}</code>.
          </wa-details>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Dropdown</strong></div>
        <wa-dropdown ref={dropdownRef}>
          <wa-button slot="trigger" with-caret>Actions</wa-button>
          <wa-dropdown-item value="edit">Edit</wa-dropdown-item>
          <wa-dropdown-item value="duplicate">Duplicate</wa-dropdown-item>
          <wa-divider />
          <wa-dropdown-item type="checkbox" checked>Published</wa-dropdown-item>
          <wa-divider />
          <wa-dropdown-item value="delete" variant="danger">Delete</wa-dropdown-item>
        </wa-dropdown>
        {lastAction && <p>Last action: {lastAction}</p>}
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Popover</strong></div>
        <wa-button id="popover-trigger">Click for popover</wa-button>
        <wa-popover for="popover-trigger">
          <div style={{ padding: '0.5rem' }}>
            <p style={{ margin: '0 0 0.5rem' }}>
              Popovers can hold interactive content like buttons and links.
            </p>
            <wa-button variant="brand" size="s">Take action</wa-button>
          </div>
        </wa-popover>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Copy Button</strong></div>
        <div className="demo-stack">
          <div className="button-row">
            <wa-copy-button value="npm install @awesome.me/webawesome" />
            <code>npm install @awesome.me/webawesome</code>
          </div>
          <div className="button-row">
            <wa-copy-button value="https://webawesome.com" />
            <code>https://webawesome.com</code>
          </div>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Button Group</strong></div>
        <div className="demo-stack">
          <wa-button-group label="Alignment">
            <wa-button>Left</wa-button>
            <wa-button>Center</wa-button>
            <wa-button>Right</wa-button>
          </wa-button-group>
          <wa-button-group label="Actions">
            <wa-button variant="brand">Save</wa-button>
            <wa-dropdown placement="bottom-end">
              <wa-button slot="trigger" variant="brand" with-caret />
              <wa-dropdown-item>Save as draft</wa-dropdown-item>
              <wa-dropdown-item>Save and publish</wa-dropdown-item>
              <wa-dropdown-item>Export</wa-dropdown-item>
            </wa-dropdown>
          </wa-button-group>
        </div>
      </wa-card>

      <wa-dialog label="Example Dialog" ref={dialogRef}>
        <p>
          Opened by setting <code>ref.current.open = true</code>. Closed
          with <code>data-dialog="close"</code> or the X button.
        </p>
        <wa-button slot="footer" variant="brand" data-dialog="close">
          Close
        </wa-button>
      </wa-dialog>

      <wa-drawer label="Example Drawer" ref={drawerRef}>
        <p>
          Opened by setting <code>ref.current.open = true</code>. Closed
          with <code>data-drawer="close"</code> or the X button.
        </p>
        <wa-button slot="footer" variant="brand" data-drawer="close">
          Close
        </wa-button>
      </wa-drawer>

      <wa-toast ref={toastRef} />
    </div>
  );
}

export default Interactive;
