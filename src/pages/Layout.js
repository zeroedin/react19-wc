function Layout() {
  return (
    <div className="page">
      <h2>Layout</h2>
      <p>
        Structural components for dividing, splitting, and framing content.
      </p>

      <wa-card>
        <div slot="header"><strong>Divider</strong></div>
        <p>Horizontal divider between content sections:</p>
        <wa-divider />
        <p>Content below the divider.</p>
        <wa-divider />
        <p>Vertical dividers separate inline elements:</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '2rem' }}>
          <span>Home</span>
          <wa-divider orientation="vertical" />
          <span>Products</span>
          <wa-divider orientation="vertical" />
          <span>About</span>
          <wa-divider orientation="vertical" />
          <span>Contact</span>
        </div>
      </wa-card>

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
        <div slot="header"><strong>Zoomable Frame</strong></div>
        <wa-zoomable-frame
          src="https://example.com"
          style={{ height: '300px' }}
        />
      </wa-card>
    </div>
  );
}

export default Layout;
