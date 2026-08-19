function Media() {
  return (
    <div className="page">
      <h2>Media</h2>
      <p>
        Icons and animated images.
      </p>

      <wa-card>
        <div slot="header"><strong>Icons</strong></div>
        <p>Font Awesome icons rendered via <code>wa-icon</code>.</p>
        <div className="demo-stack">
          <div className="badge-row" style={{ fontSize: '1.5rem' }}>
            <wa-icon name="house" label="Home" />
            <wa-icon name="gear" label="Settings" />
            <wa-icon name="bell" label="Notifications" />
            <wa-icon name="envelope" label="Mail" />
            <wa-icon name="magnifying-glass" label="Search" />
            <wa-icon name="star" label="Star" />
            <wa-icon name="circle-check" label="Check" />
            <wa-icon name="triangle-exclamation" label="Warning" />
          </div>
          <p>Solid vs regular variants:</p>
          <div className="badge-row" style={{ fontSize: '1.5rem' }}>
            <wa-icon name="heart" variant="solid" label="Solid heart" />
            <wa-icon name="heart" variant="regular" label="Regular heart" />
            <wa-icon name="star" variant="solid" label="Solid star" />
            <wa-icon name="star" variant="regular" label="Regular star" />
            <wa-icon name="bookmark" variant="solid" label="Solid bookmark" />
            <wa-icon name="bookmark" variant="regular" label="Regular bookmark" />
          </div>
          <p>Sizes scale with <code>font-size</code>:</p>
          <div className="badge-row" style={{ alignItems: 'center' }}>
            <wa-icon name="globe" label="Small" style={{ fontSize: '1rem' }} />
            <wa-icon name="globe" label="Medium" style={{ fontSize: '1.5rem' }} />
            <wa-icon name="globe" label="Large" style={{ fontSize: '2rem' }} />
            <wa-icon name="globe" label="Extra large" style={{ fontSize: '3rem' }} />
          </div>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Animated Image</strong></div>
        <p>
          Displays a GIF or WEBP with play/pause controls. Requires a
          real animated image URL in the <code>src</code> attribute.
        </p>
        <wa-animated-image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
          alt="Rotating Earth"
          style={{ maxWidth: '200px' }}
        />
      </wa-card>
    </div>
  );
}

export default Media;
