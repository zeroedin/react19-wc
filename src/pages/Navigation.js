function Navigation() {
  return (
    <div className="page">
      <h2>Navigation</h2>
      <p>
        Breadcrumbs, trees, scrollers, and dividers.
      </p>

      <wa-card>
        <div slot="header"><strong>Breadcrumb</strong></div>
        <wa-breadcrumb>
          <wa-breadcrumb-item href="/">Home</wa-breadcrumb-item>
          <wa-breadcrumb-item href="/navigation">Navigation</wa-breadcrumb-item>
          <wa-breadcrumb-item>Breadcrumb</wa-breadcrumb-item>
        </wa-breadcrumb>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Scroller</strong></div>
        <p>Scroll horizontally to see more items. Shadow indicators appear at the edges.</p>
        <wa-scroller>
          <div className="scroller-content">
            <wa-tag>HTML</wa-tag>
            <wa-tag>CSS</wa-tag>
            <wa-tag>JavaScript</wa-tag>
            <wa-tag>TypeScript</wa-tag>
            <wa-tag>React</wa-tag>
            <wa-tag>Vue</wa-tag>
            <wa-tag>Angular</wa-tag>
            <wa-tag>Svelte</wa-tag>
            <wa-tag>Solid</wa-tag>
            <wa-tag>Lit</wa-tag>
            <wa-tag>Web Components</wa-tag>
            <wa-tag>Stencil</wa-tag>
            <wa-tag>Preact</wa-tag>
            <wa-tag>Qwik</wa-tag>
            <wa-tag>Astro</wa-tag>
            <wa-tag>Next.js</wa-tag>
            <wa-tag>Remix</wa-tag>
            <wa-tag>Nuxt</wa-tag>
          </div>
        </wa-scroller>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Tree</strong></div>
        <wa-tree>
          <wa-tree-item expanded>
            src/
            <wa-tree-item expanded>
              pages/
              <wa-tree-item>Home.js</wa-tree-item>
              <wa-tree-item>Forms.js</wa-tree-item>
              <wa-tree-item>Feedback.js</wa-tree-item>
              <wa-tree-item>Interactive.js</wa-tree-item>
              <wa-tree-item>Navigation.js</wa-tree-item>
              <wa-tree-item>Tutorial.js</wa-tree-item>
            </wa-tree-item>
            <wa-tree-item>App.js</wa-tree-item>
            <wa-tree-item>App.css</wa-tree-item>
            <wa-tree-item>index.js</wa-tree-item>
            <wa-tree-item>webawesome.js</wa-tree-item>
          </wa-tree-item>
          <wa-tree-item>
            public/
            <wa-tree-item>index.html</wa-tree-item>
            <wa-tree-item>favicon.ico</wa-tree-item>
          </wa-tree-item>
          <wa-tree-item>package.json</wa-tree-item>
        </wa-tree>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Divider</strong></div>
        <p>Horizontal divider between content sections:</p>
        <wa-divider />
        <p>Content below the divider.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '3rem' }}>
          <span>Left</span>
          <wa-divider orientation="vertical" />
          <span>Center</span>
          <wa-divider orientation="vertical" />
          <span>Right</span>
        </div>
      </wa-card>
    </div>
  );
}

export default Navigation;
