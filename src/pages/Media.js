import { useState, useRef } from 'react';

function Media() {
  const [qrValue, setQrValue] = useState('https://webawesome.com');
  const animRef = useRef(null);
  const presetRef = useRef(null);
  const randomRef = useRef(null);

  const playAnimation = () => {
    const anim = animRef.current;
    const select = presetRef.current;
    if (!anim || !select) return;
    anim.name = select.value;
    anim.currentTime = 0;
    anim.play = true;
  };

  return (
    <div className="page">
      <h2>Media Components</h2>
      <p>
        Carousels, animations, image comparison, QR codes, and more.
      </p>

      <wa-card>
        <div slot="header"><strong>Carousel</strong></div>
        <wa-carousel navigation pagination loop mouse-dragging style={{ '--aspect-ratio': '3/1' }}>
          <wa-carousel-item>
            <div style={{ background: 'var(--wa-color-brand-fill-loud)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '1.5rem' }}>
              Slide 1
            </div>
          </wa-carousel-item>
          <wa-carousel-item>
            <div style={{ background: 'var(--wa-color-success-fill-loud)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '1.5rem' }}>
              Slide 2
            </div>
          </wa-carousel-item>
          <wa-carousel-item>
            <div style={{ background: 'var(--wa-color-warning-fill-loud)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '1.5rem' }}>
              Slide 3
            </div>
          </wa-carousel-item>
          <wa-carousel-item>
            <div style={{ background: 'var(--wa-color-danger-fill-loud)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '1.5rem' }}>
              Slide 4
            </div>
          </wa-carousel-item>
        </wa-carousel>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Animation</strong></div>
        <div className="demo-stack">
          <div className="anim-controls">
            <wa-select
              ref={presetRef}
              label="Preset"
            >
              <wa-option value="bounce">Bounce</wa-option>
              <wa-option value="flash">Flash</wa-option>
              <wa-option value="headShake">Head Shake</wa-option>
              <wa-option value="heartBeat">Heart Beat</wa-option>
              <wa-option value="jello">Jello</wa-option>
              <wa-option value="pulse">Pulse</wa-option>
              <wa-option value="rubberBand">Rubber Band</wa-option>
              <wa-option value="shakeX">Shake X</wa-option>
              <wa-option value="shakeY">Shake Y</wa-option>
              <wa-option value="swing">Swing</wa-option>
              <wa-option value="tada">Tada</wa-option>
              <wa-option value="wobble">Wobble</wa-option>
              <wa-option value="flip">Flip</wa-option>
              <wa-option value="hinge">Hinge</wa-option>
            </wa-select>
            <wa-button variant="brand" onClick={playAnimation}>
              Play
            </wa-button>
          </div>
          <wa-animation
            ref={animRef}
            iterations={3}
          >
            <wa-badge variant="brand" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
              Animated Element
            </wa-badge>
          </wa-animation>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Comparison</strong></div>
        <wa-comparison>
          <div slot="before" style={{ background: 'var(--wa-color-brand-fill-quiet)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', fontSize: '1.25rem' }}>
            Before
          </div>
          <div slot="after" style={{ background: 'var(--wa-color-success-fill-quiet)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', fontSize: '1.25rem' }}>
            After
          </div>
        </wa-comparison>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>QR Code</strong></div>
        <wa-input
          label="Value"
          value={qrValue}
          onInput={(e) => setQrValue(e.target.value)}
          with-clear
        />
        <wa-qr-code value={qrValue} size={200} style={{ marginTop: '1rem' }} />
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Random Content</strong></div>
        <div className="demo-stack">
          <wa-random-content ref={randomRef} animation="fade">
            <wa-callout variant="brand">First random item.</wa-callout>
            <wa-callout variant="success">Second random item.</wa-callout>
            <wa-callout variant="warning">Third random item.</wa-callout>
            <wa-callout variant="danger">Fourth random item.</wa-callout>
            <wa-callout variant="neutral">Fifth random item.</wa-callout>
          </wa-random-content>
          <wa-button variant="brand" onClick={() => randomRef.current?.randomize()}>
            Randomize
          </wa-button>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Zoomable Frame</strong></div>
        <wa-zoomable-frame
          src="https://example.com"
          style={{ height: '300px', width: '100%' }}
        />
      </wa-card>
    </div>
  );
}

export default Media;
