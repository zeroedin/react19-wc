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
          <div slot="header"><strong>Form Controls</strong></div>
          <p>
            Inputs, selects, sliders, checkboxes, color pickers, date
            and time fields.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/forms">Explore Forms</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Feedback</strong></div>
          <p>
            Callouts, badges, tags, avatars, icons, skeletons, and
            formatted values.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/feedback">View Feedback</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Interactive</strong></div>
          <p>
            Accordions, tabs, dialogs, drawers, dropdowns, popovers,
            and copy buttons.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/interactive">Try Interactive</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Media</strong></div>
          <p>
            Carousels, animations, comparisons, QR codes, and zoomable
            frames.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/media">View Media</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Navigation</strong></div>
          <p>
            Breadcrumbs, trees, scrollers, and dividers.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/navigation">View Navigation</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Layout</strong></div>
          <p>
            Split panels, popups, markdown rendering, and includes.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/layout">View Layout</wa-button>
          </div>
        </wa-card>

        <wa-card className="nav-card">
          <div slot="header"><strong>Observers</strong></div>
          <p>
            Intersection, mutation, and resize observers with live
            output.
          </p>
          <div slot="footer">
            <wa-button variant="brand" href="/observers">View Observers</wa-button>
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
