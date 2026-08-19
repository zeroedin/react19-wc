import { useState, useRef, useEffect } from 'react';

function Observers() {
  const [mutationLog, setMutationLog] = useState([]);
  const [childCount, setChildCount] = useState(0);
  const mutationTargetRef = useRef(null);
  const [panelSize, setPanelSize] = useState({ width: 0, height: 0 });
  const resizeRef = useRef(null);

  useEffect(() => {
    const el = resizeRef.current;
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

  return (
    <div className="page">
      <h2>Observers</h2>
      <p>
        Declarative wrappers around browser observer APIs.
      </p>

      <wa-card>
        <div slot="header"><strong>Intersection Observer</strong></div>
        <p>
          Scroll down inside this box. Items gain a highlight when they
          enter the viewport.
        </p>
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

      <wa-card>
        <div slot="header"><strong>Mutation Observer</strong></div>
        <p>
          Add or remove child elements. The observer logs each mutation.
        </p>
        <div className="button-row" style={{ marginBottom: '1rem' }}>
          <wa-button variant="brand" onClick={addChild}>Add Child</wa-button>
          <wa-button variant="neutral" onClick={removeChild} disabled={childCount === 0 || undefined}>
            Remove Child
          </wa-button>
        </div>
        <wa-mutation-observer
          child-list
          onWaMutation={(e) => {
            const records = e.detail?.mutationList || [];
            const descriptions = records.map((r) => {
              if (r.addedNodes.length) return 'Child added';
              if (r.removedNodes.length) return 'Child removed';
              return 'Mutation';
            });
            setMutationLog((prev) => [...prev.slice(-4), ...descriptions]);
          }}
        >
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

      <wa-card>
        <div slot="header"><strong>Resize Observer</strong></div>
        <p>
          Drag the divider. The observer reports the left panel's dimensions.
        </p>
        <wa-split-panel style={{ height: '150px', border: '1px solid var(--wa-color-surface-border, #ddd)', borderRadius: '4px' }}>
          <div slot="start" style={{ padding: '1rem', height: '100%' }}>
            <wa-resize-observer ref={resizeRef}>
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
    </div>
  );
}

export default Observers;
