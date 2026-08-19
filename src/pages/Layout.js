import { useState } from 'react';

function Layout() {
  const [popupActive, setPopupActive] = useState(false);
  const [popupPlacement, setPopupPlacement] = useState('top');

  return (
    <div className="page">
      <h2>Layout Components</h2>
      <p>
        Panels, positioning, and content rendering.
      </p>

      <wa-card>
        <div slot="header"><strong>Split Panel</strong></div>
        <wa-split-panel position={40} style={{ minHeight: '200px' }}>
          <div slot="start" style={{ padding: '1rem', background: 'var(--wa-color-surface-lowered, #f5f5f5)' }}>
            <pre style={{ margin: 0 }}><code>{`<wa-split-panel>
  <div slot="start">
    Left panel
  </div>
  <div slot="end">
    Right panel
  </div>
</wa-split-panel>`}</code></pre>
          </div>
          <div slot="end" style={{ padding: '1rem' }}>
            <p style={{ margin: 0 }}>
              Drag the divider to resize. The <code>start</code> and{' '}
              <code>end</code> slots hold each panel's content.
            </p>
            <p>
              Set <code>position</code> to control the initial split.
              Add <code>snap="25% 50% 75%"</code> for detents.
            </p>
          </div>
        </wa-split-panel>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Popup</strong></div>
        <p>
          Low-level positioning primitive. Anchors one element to another
          and keeps them aligned as the page scrolls.
        </p>
        <div className="button-row" style={{ marginBottom: '1rem' }}>
          <wa-select
            label="Placement"
            value={popupPlacement}
            onChange={(e) => setPopupPlacement(e.target.value)}
            style={{ width: '10rem' }}
          >
            <wa-option value="top">Top</wa-option>
            <wa-option value="bottom">Bottom</wa-option>
            <wa-option value="left">Left</wa-option>
            <wa-option value="right">Right</wa-option>
          </wa-select>
        </div>
        <div style={{ position: 'relative', minHeight: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <wa-popup
            placement={popupPlacement}
            active={popupActive || undefined}
            distance={8}
            arrow
          >
            <wa-button
              slot="anchor"
              variant="brand"
              onClick={() => setPopupActive(!popupActive)}
            >
              {popupActive ? 'Hide Popup' : 'Show Popup'}
            </wa-button>
            <div style={{
              padding: '0.75rem 1rem',
              background: 'var(--wa-color-surface-raised, white)',
              border: '1px solid var(--wa-color-surface-border, #ddd)',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}>
              Positioned with <code>wa-popup</code>
            </div>
          </wa-popup>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Markdown</strong></div>
        <p>
          Renders markdown to HTML in the browser. Content goes in a{' '}
          <code>&lt;script type="text/markdown"&gt;</code> child.
        </p>
        <wa-markdown>
          <script type="text/markdown">{`
## Rendered Markdown

This content is **parsed and rendered** by \`wa-markdown\`.

- List item one
- List item two
- List item three

\`\`\`js
const greeting = 'Hello from markdown';
console.log(greeting);
\`\`\`
          `}</script>
        </wa-markdown>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Include</strong></div>
        <p>
          Fetches external HTML and embeds it inline.
        </p>
        <wa-callout variant="warning">
          In bundled apps (create-react-app, Vite), the <code>src</code>{' '}
          path must point to a file served by the dev server. Place the
          file in the <code>public/</code> directory and reference it
          from there.
        </wa-callout>
        <wa-include src="/include-demo.html" />
      </wa-card>
    </div>
  );
}

export default Layout;
