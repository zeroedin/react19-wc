function Actions() {
  return (
    <div className="page">
      <h2>Actions</h2>
      <p>Buttons, button groups, and copy buttons.</p>

      <wa-card>
        <div slot="header"><strong>Button Variants</strong></div>
        <div className="demo-stack">
          <div className="button-row">
            <wa-button variant="brand">Brand</wa-button>
            <wa-button variant="neutral">Neutral</wa-button>
            <wa-button variant="success">Success</wa-button>
            <wa-button variant="warning">Warning</wa-button>
            <wa-button variant="danger">Danger</wa-button>
          </div>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Button Appearances</strong></div>
        <div className="demo-stack">
          <div className="button-row">
            <wa-button variant="brand" appearance="accent">Accent</wa-button>
            <wa-button variant="brand" appearance="filled">Filled</wa-button>
            <wa-button variant="brand" appearance="outlined">Outlined</wa-button>
            <wa-button variant="brand" appearance="plain">Plain</wa-button>
          </div>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Button Sizes</strong></div>
        <div className="button-row" style={{ alignItems: 'center' }}>
          <wa-button size="s">Small</wa-button>
          <wa-button size="m">Medium</wa-button>
          <wa-button size="l">Large</wa-button>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Button States</strong></div>
        <div className="button-row">
          <wa-button variant="brand" href="https://webawesome.com" target="_blank">
            Link (href)
          </wa-button>
          <wa-button variant="brand" disabled>Disabled</wa-button>
          <wa-button variant="brand" loading>Loading</wa-button>
          <wa-button variant="brand" pill>Pill</wa-button>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Buttons with Icons</strong></div>
        <div className="button-row">
          <wa-button variant="brand">
            <wa-icon slot="start" name="gear" />
            Settings
          </wa-button>
          <wa-button variant="success">
            Download
            <wa-icon slot="end" name="download" />
          </wa-button>
          <wa-button variant="neutral">
            <wa-icon slot="start" name="heart" />
            Favorite
            <wa-icon slot="end" name="arrow-right" />
          </wa-button>
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
              <wa-button slot="trigger" variant="brand" with-caret className="split-caret" />
              <wa-dropdown-item>Save as draft</wa-dropdown-item>
              <wa-dropdown-item>Save and publish</wa-dropdown-item>
              <wa-dropdown-item>Export</wa-dropdown-item>
            </wa-dropdown>
          </wa-button-group>
        </div>
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
    </div>
  );
}

export default Actions;
