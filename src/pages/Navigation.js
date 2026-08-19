import { useState, useRef, useEffect } from 'react';

function Navigation() {
  const [lastAction, setLastAction] = useState(null);
  const [page, setPage] = useState(1);
  const dropdownRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;
    const handler = (e) => setLastAction(e.detail?.item?.textContent);
    el.addEventListener('wa-select', handler);
    return () => el.removeEventListener('wa-select', handler);
  }, []);

  useEffect(() => {
    const el = paginationRef.current;
    if (!el) return;
    const handler = (e) => setPage(e.detail?.page ?? 1);
    el.addEventListener('wa-page-change', handler);
    return () => el.removeEventListener('wa-page-change', handler);
  }, []);

  const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
  const pageSize = 5;
  const visibleItems = items.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="page">
      <h2>Navigation</h2>
      <p>
        Menus, tabs, trees, and wayfinding components.
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
        <div slot="header"><strong>Dropdown</strong></div>
        <wa-dropdown ref={dropdownRef}>
          <wa-button slot="trigger" with-caret>Actions</wa-button>
          <wa-dropdown-item value="edit">Edit</wa-dropdown-item>
          <wa-dropdown-item value="duplicate">Duplicate</wa-dropdown-item>
          <wa-dropdown-item type="checkbox" checked>Published</wa-dropdown-item>
          <wa-dropdown-item value="delete" variant="danger">Delete</wa-dropdown-item>
        </wa-dropdown>
        {lastAction && <p>Last action: {lastAction}</p>}
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Tabs</strong></div>
        <wa-tab-group>
          <wa-tab slot="nav" panel="overview">Overview</wa-tab>
          <wa-tab slot="nav" panel="usage">Usage</wa-tab>
          <wa-tab slot="nav" panel="api">API</wa-tab>

          <wa-tab-panel name="overview">
            <p>
              Tab groups organize content into panels. Click the tabs
              above to switch between them.
            </p>
          </wa-tab-panel>
          <wa-tab-panel name="usage">
            <pre><code>{`<wa-tab-group>
  <wa-tab slot="nav" panel="one">Tab 1</wa-tab>
  <wa-tab-panel name="one">Content</wa-tab-panel>
</wa-tab-group>`}</code></pre>
          </wa-tab-panel>
          <wa-tab-panel name="api">
            <p>
              Use <code>placement</code> to position tabs at the top,
              bottom, start, or end. Set <code>activation="manual"</code>{' '}
              to require Enter or Space to show a panel.
            </p>
          </wa-tab-panel>
        </wa-tab-group>
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
            <wa-tree-item>
              pages/
              <wa-tree-item>Home.js</wa-tree-item>
              <wa-tree-item>Forms.js</wa-tree-item>
              <wa-tree-item>Feedback.js</wa-tree-item>
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
        <div slot="header"><strong>Pagination</strong></div>
        <div className="demo-stack">
          <wa-pagination
            ref={paginationRef}
            total={items.length}
            page-size={pageSize}
            page={page}
            with-summary
          />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {visibleItems.map((item) => (
              <li key={item} style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--wa-color-surface-border, #eee)' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </wa-card>
    </div>
  );
}

export default Navigation;
