import { useState, useRef, useEffect } from 'react';

function Helpers() {
  const animRef = useRef(null);
  const presetRef = useRef(null);
  const randomRef = useRef(null);
  const mutationTargetRef = useRef(null);
  const mutationObserverRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const removableTagRef = useRef(null);
  const [qrValue, setQrValue] = useState('https://webawesome.com');
  const [rating, setRating] = useState(0);
  const [progress, setProgress] = useState(63);
  const [mutationLog, setMutationLog] = useState([]);
  const [childCount, setChildCount] = useState(0);
  const [panelSize, setPanelSize] = useState({ width: 0, height: 0 });
  const [showRemovable, setShowRemovable] = useState(true);

  const playAnimation = () => {
    const anim = animRef.current;
    const select = presetRef.current;
    if (!anim || !select) return;
    anim.name = select.value;
    anim.currentTime = 0;
    anim.play = true;
  };

  const addChild = () => {
    const el = document.createElement('div');
    el.textContent = `Child ${childCount + 1}`;
    el.style.padding = '0.5rem';
    el.style.background = 'var(--wa-color-surface-lowered, #f0f0f0)';
    el.style.borderRadius = '4px';
    el.style.marginTop = '0.5rem';
    mutationTargetRef.current?.appendChild(el);
    setChildCount((c) => c + 1);
  };

  const removeChild = () => {
    const target = mutationTargetRef.current;
    if (target?.lastChild) {
      target.removeChild(target.lastChild);
      setChildCount((c) => Math.max(0, c - 1));
    }
  };

  useEffect(() => {
    const el = mutationObserverRef.current;
    if (!el) return;
    const handler = (e) => {
      const records = e.detail?.mutationList || [];
      const descriptions = records.map((r) => {
        if (r.addedNodes.length) return 'Child added';
        if (r.removedNodes.length) return 'Child removed';
        return 'Mutation';
      });
      setMutationLog((prev) => [...prev.slice(-4), ...descriptions]);
    };
    el.addEventListener('wa-mutation', handler);
    return () => el.removeEventListener('wa-mutation', handler);
  }, []);

  useEffect(() => {
    const el = resizeObserverRef.current;
    if (!el) return;
    const handler = (e) => {
      const entry = e.detail?.entries?.[0];
      if (entry) {
        setPanelSize({
          width: Math.round(entry.contentRect.width),
          height: Math.round(entry.contentRect.height),
        });
      }
    };
    el.addEventListener('wa-resize', handler);
    return () => el.removeEventListener('wa-resize', handler);
  }, []);

  useEffect(() => {
    const el = removableTagRef.current;
    if (!el) return;
    const handler = () => setShowRemovable(false);
    el.addEventListener('wa-remove', handler);
    return () => el.removeEventListener('wa-remove', handler);
  }, [showRemovable]);

  return (
    <div className="page">
      <h2>Helpers</h2>
      <p>Utility components for animation, formatting, content, and observation.</p>

      {/* Animation */}
      <wa-card>
        <div slot="header"><strong>Animation</strong></div>
        <div className="demo-stack">
          <div className="anim-controls">
            <wa-select ref={presetRef} label="Preset">
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
            <wa-button variant="brand" onClick={playAnimation}>Play</wa-button>
          </div>
          <wa-animation ref={animRef} iterations={3}>
            <wa-badge variant="brand" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
              Animated Element
            </wa-badge>
          </wa-animation>
        </div>
      </wa-card>

      {/* Avatar */}
      <wa-card>
        <div slot="header"><strong>Avatar</strong></div>
        <div className="badge-row">
          <wa-avatar image="https://i.pravatar.cc/128?img=5" label="User photo" />
          <wa-avatar initials="AB" label="Initials" />
          <wa-avatar label="Default icon" />
          <wa-avatar initials="CD" label="Square" shape="square" />
          <wa-avatar initials="EF" label="Rounded" shape="rounded" />
        </div>
      </wa-card>

      {/* Carousel */}
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

      {/* Comparison */}
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

      {/* Formatting */}
      <wa-card>
        <div slot="header"><strong>Formatting</strong></div>
        <div className="demo-stack">
          <p>Date: <wa-format-date month="long" day="numeric" year="numeric" /></p>
          <p>Time: <wa-format-date hour="numeric" minute="numeric" /></p>
          <p>Currency: <wa-format-number type="currency" currency="USD" value={1299.99} /></p>
          <p>Percent: <wa-format-number type="percent" value={0.875} /></p>
          <p>Decimal: <wa-format-number value={123456.789} minimum-fraction-digits={2} /></p>
          <p>File size: <wa-format-bytes value={1048576} /></p>
          <p>Large file: <wa-format-bytes value={2147483648} /></p>
        </div>
      </wa-card>

      {/* Include */}
      <wa-card>
        <div slot="header"><strong>Include</strong></div>
        <wa-callout variant="warning">
          In bundled apps, the <code>src</code> path must point to a file
          served by the dev server. Place the file in <code>public/</code>.
        </wa-callout>
        <wa-include src="/include-demo.html" />
      </wa-card>

      {/* Markdown */}
      <wa-card>
        <div slot="header"><strong>Markdown</strong></div>
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

      {/* Intersection Observer */}
      <wa-card>
        <div slot="header"><strong>Intersection Observer</strong></div>
        <p>Scroll inside this box. Items highlight when visible.</p>
        <div style={{ height: '200px', overflow: 'auto', border: '1px solid var(--wa-color-surface-border, #ddd)', borderRadius: '4px', padding: '0.5rem' }}>
          <wa-intersection-observer intersect-class="visible">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="observe-item"
                style={{
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  background: 'var(--wa-color-surface-lowered, #f5f5f5)',
                  borderRadius: '4px',
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                Item {i + 1}
              </div>
            ))}
          </wa-intersection-observer>
        </div>
        <style>{`
          .observe-item.visible {
            background: var(--wa-color-brand-fill-quiet, #e0f0ff) !important;
            font-weight: bold;
          }
        `}</style>
      </wa-card>

      {/* Mutation Observer */}
      <wa-card>
        <div slot="header"><strong>Mutation Observer</strong></div>
        <p>Add or remove child elements. The observer logs each mutation.</p>
        <div className="button-row" style={{ marginBottom: '1rem' }}>
          <wa-button variant="brand" onClick={addChild}>Add Child</wa-button>
          <wa-button variant="neutral" onClick={removeChild} disabled={childCount === 0 || undefined}>
            Remove Child
          </wa-button>
        </div>
        <wa-mutation-observer ref={mutationObserverRef} child-list>
          <div ref={mutationTargetRef} style={{ minHeight: '2rem' }} />
        </wa-mutation-observer>
        {mutationLog.length > 0 && (
          <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--wa-color-text-quiet, #888)' }}>
            {mutationLog.map((msg, i) => (
              <div key={i}>{msg}</div>
            ))}
          </div>
        )}
      </wa-card>

      {/* Resize Observer */}
      <wa-card>
        <div slot="header"><strong>Resize Observer</strong></div>
        <p>Drag the divider. The observer reports the left panel's dimensions.</p>
        <wa-split-panel style={{ height: '150px', border: '1px solid var(--wa-color-surface-border, #ddd)', borderRadius: '4px' }}>
          <div slot="start" style={{ padding: '1rem', height: '100%' }}>
            <wa-resize-observer ref={resizeObserverRef}>
              <div style={{ height: '100%' }}>
                <strong>Left Panel</strong>
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem' }}>
                  {panelSize.width} x {panelSize.height}px
                </p>
              </div>
            </wa-resize-observer>
          </div>
          <div slot="end" style={{ padding: '1rem', height: '100%' }}>
            <strong>Right Panel</strong>
          </div>
        </wa-split-panel>
      </wa-card>

      {/* Progress */}
      <wa-card>
        <div slot="header"><strong>Progress</strong></div>
        <div className="demo-stack">
          <label>
            Adjust progress:
            <wa-slider value={progress} onChange={(e) => setProgress(e.target.value)} />
          </label>
          <wa-progress-bar value={progress} label="Upload Progress">
            {progress}%
          </wa-progress-bar>
          <div className="progress-ring-row">
            <wa-progress-ring value={progress} label="Ring" style={{ '--size': '80px' }}>
              {progress}%
            </wa-progress-ring>
            <wa-spinner style={{ fontSize: '2rem' }} />
          </div>
        </div>
      </wa-card>

      {/* QR Code */}
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

      {/* Random Content */}
      <wa-card>
        <div slot="header"><strong>Random Content</strong></div>
        <wa-random-content ref={randomRef} animation="fade">
          <wa-callout variant="brand">First random item.</wa-callout>
          <wa-callout variant="success">Second random item.</wa-callout>
          <wa-callout variant="warning">Third random item.</wa-callout>
          <wa-callout variant="danger">Fourth random item.</wa-callout>
          <wa-callout variant="neutral">Fifth random item.</wa-callout>
        </wa-random-content>
        <wa-button variant="brand" onClick={() => randomRef.current?.randomize()} style={{ marginTop: '1rem' }}>
          Randomize
        </wa-button>
      </wa-card>

      {/* Rating */}
      <wa-card>
        <div slot="header"><strong>Rating</strong></div>
        <wa-rating label="Your rating" onChange={(e) => setRating(e.target.value)} />
        <p>
          {rating > 0
            ? `You rated this ${rating} out of 5.`
            : 'Click the stars to rate.'}
        </p>
      </wa-card>

      {/* Relative Time */}
      <wa-card>
        <div slot="header"><strong>Relative Time</strong></div>
        <div className="demo-stack">
          <p>Created: <wa-relative-time date={new Date(Date.now() - 3600000).toISOString()} /></p>
          <p>Updated: <wa-relative-time date={new Date(Date.now() - 86400000).toISOString()} /></p>
          <p>Deadline: <wa-relative-time date={new Date(Date.now() + 259200000).toISOString()} /></p>
        </div>
      </wa-card>

      {/* Skeleton */}
      <wa-card>
        <div slot="header"><strong>Skeleton</strong></div>
        <div className="demo-stack">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <wa-skeleton style={{ width: '48px', height: '48px', '--border-radius': '50%' }} effect="pulse" />
            <div style={{ flex: 1 }}>
              <wa-skeleton style={{ width: '40%', marginBottom: '0.5rem' }} effect="pulse" />
              <wa-skeleton style={{ width: '70%' }} effect="pulse" />
            </div>
          </div>
          <wa-skeleton style={{ width: '100%', height: '6rem' }} effect="pulse" />
        </div>
      </wa-card>

      {/* Tag */}
      <wa-card>
        <div slot="header"><strong>Tag</strong></div>
        <div className="badge-row">
          <wa-tag variant="brand">Brand</wa-tag>
          <wa-tag variant="success">Success</wa-tag>
          <wa-tag variant="warning">Warning</wa-tag>
          <wa-tag variant="danger">Danger</wa-tag>
          <wa-tag variant="neutral">Neutral</wa-tag>
          {showRemovable && (
            <wa-tag variant="brand" with-remove ref={removableTagRef}>
              Removable
            </wa-tag>
          )}
          <wa-tag variant="neutral" pill>Pill</wa-tag>
        </div>
      </wa-card>
    </div>
  );
}

export default Helpers;
