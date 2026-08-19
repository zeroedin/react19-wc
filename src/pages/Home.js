function Home() {
  return (
    <div className="page">
      <h2>Welcome</h2>
      <p>
        <strong>Web Awesome</strong> web components used directly in a{' '}
        <strong>React 19</strong> application. No framework wrappers.
      </p>

      <div className="card-grid">
        <wa-card className="nav-card">
          <div slot="header"><strong>Actions</strong></div>
          <p>Buttons, button groups, and copy buttons.</p>
          <div slot="footer">
            <wa-button variant="brand" href="/actions">View Actions</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Forms</strong></div>
          <p>
            Inputs, selects, checkboxes, color pickers, date and time
            fields.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/forms">Explore Forms</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Layout</strong></div>
          <p>Dividers, split panels, and zoomable frames.</p>
          <div slot="footer">
            <wa-button variant="brand" href="/layout">View Layout</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Navigation</strong></div>
          <p>Breadcrumbs, dropdowns, tabs, trees, and pagination.</p>
          <div slot="footer">
            <wa-button variant="brand" href="/navigation">View Navigation</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Feedback</strong></div>
          <p>
            Callouts, badges, dialogs, drawers, popovers, toasts,
            and tooltips.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/feedback">View Feedback</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Media</strong></div>
          <p>Icons and animated images.</p>
          <div slot="footer">
            <wa-button variant="brand" href="/media">View Media</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Helpers</strong></div>
          <p>
            Animations, avatars, carousels, formatters, observers,
            progress, and more.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/helpers">View Helpers</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Tutorial</strong></div>
          <p>
            Integrating Web Awesome with React 19. Setup, events,
            slots, and patterns.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/tutorial">Start Tutorial</wa-button>
          </div>
        </wa-card>
      </div>

    </div>
  );
}

export default Home;
