import { useState, useRef, useEffect } from 'react';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [progress, setProgress] = useState(63);
  const [showRemovable, setShowRemovable] = useState(true);
  const removableRef = useRef(null);

  useEffect(() => {
    const el = removableRef.current;
    if (!el) return;
    const handler = () => setShowRemovable(false);
    el.addEventListener('wa-remove', handler);
    return () => el.removeEventListener('wa-remove', handler);
  }, [showRemovable]);

  return (
    <div className="page">
      <h2>Feedback Components</h2>
      <p>
        Status indicators and user feedback.
      </p>

      <wa-card>
        <div slot="header"><strong>Callout Variants</strong></div>
        <div className="demo-stack">
          <wa-callout variant="brand">
            <strong>Brand</strong>:Informational message with brand styling.
          </wa-callout>
          <wa-callout variant="success">
            <strong>Success</strong>:Operation completed successfully.
          </wa-callout>
          <wa-callout variant="warning">
            <strong>Warning</strong>:Something needs your attention.
          </wa-callout>
          <wa-callout variant="danger">
            <strong>Danger</strong>:An error or destructive action.
          </wa-callout>
          <wa-callout variant="neutral">
            <strong>Neutral</strong>:General informational note.
          </wa-callout>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Badges</strong></div>
        <div className="badge-row">
          <wa-badge variant="brand">Brand</wa-badge>
          <wa-badge variant="success">Success</wa-badge>
          <wa-badge variant="warning">Warning</wa-badge>
          <wa-badge variant="danger">Danger</wa-badge>
          <wa-badge variant="neutral">Neutral</wa-badge>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Progress</strong></div>
        <div className="demo-stack">
          <label>
            Adjust progress:
            <wa-slider
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
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

      <wa-card>
        <div slot="header"><strong>Rating</strong></div>
        <wa-rating
          label="Your rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <p>
          {rating > 0
            ? `You rated this ${rating} out of 5.`
            : 'Click the stars to rate.'}
        </p>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Tags</strong></div>
        <div className="badge-row">
          <wa-tag variant="brand">Brand</wa-tag>
          <wa-tag variant="success">Success</wa-tag>
          <wa-tag variant="warning">Warning</wa-tag>
          <wa-tag variant="danger">Danger</wa-tag>
          <wa-tag variant="neutral">Neutral</wa-tag>
          {showRemovable && (
            <wa-tag variant="brand" with-remove ref={removableRef}>
              Removable
            </wa-tag>
          )}
          <wa-tag variant="neutral" pill>Pill</wa-tag>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Avatars</strong></div>
        <div className="badge-row">
          <wa-avatar
            image="https://i.pravatar.cc/128?img=5"
            label="User photo"
          />
          <wa-avatar initials="AB" label="User initials" />
          <wa-avatar label="Default icon" />
          <wa-avatar initials="CD" label="Square avatar" shape="square" />
          <wa-avatar initials="EF" label="Rounded avatar" shape="rounded" />
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Icons</strong></div>
        <div className="badge-row">
          <wa-icon name="house" label="Home" />
          <wa-icon name="gear" label="Settings" />
          <wa-icon name="bell" label="Notifications" />
          <wa-icon name="envelope" label="Mail" />
          <wa-icon name="magnifying-glass" label="Search" />
          <wa-icon name="star" label="Star" />
          <wa-icon name="circle-check" label="Check" />
          <wa-icon name="triangle-exclamation" label="Warning" />
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Skeleton</strong></div>
        <div className="demo-stack">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <wa-skeleton
              style={{ width: '48px', height: '48px', '--border-radius': '50%' }}
              effect="pulse"
            />
            <div style={{ flex: 1 }}>
              <wa-skeleton style={{ width: '40%', marginBottom: '0.5rem' }} effect="pulse" />
              <wa-skeleton style={{ width: '70%' }} effect="pulse" />
            </div>
          </div>
          <wa-skeleton style={{ width: '100%', height: '6rem' }} effect="pulse" />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <wa-skeleton style={{ width: '30%' }} effect="pulse" />
            <wa-skeleton style={{ width: '30%' }} effect="pulse" />
            <wa-skeleton style={{ width: '30%' }} effect="pulse" />
          </div>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Relative Time</strong></div>
        <div className="demo-stack">
          <p>
            Created: <wa-relative-time date={new Date(Date.now() - 3600000).toISOString()} />
          </p>
          <p>
            Updated: <wa-relative-time date={new Date(Date.now() - 86400000).toISOString()} />
          </p>
          <p>
            Deadline: <wa-relative-time date={new Date(Date.now() + 259200000).toISOString()} />
          </p>
        </div>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Formatting</strong></div>
        <div className="demo-stack">
          <p>
            Date: <wa-format-date month="long" day="numeric" year="numeric" />
          </p>
          <p>
            Time: <wa-format-date hour="numeric" minute="numeric" />
          </p>
          <p>
            Currency: <wa-format-number type="currency" currency="USD" value={1299.99} />
          </p>
          <p>
            Percent: <wa-format-number type="percent" value={0.875} />
          </p>
          <p>
            Decimal: <wa-format-number value={123456.789} minimum-fraction-digits={2} />
          </p>
          <p>
            File size: <wa-format-bytes value={1048576} />
          </p>
          <p>
            Large file: <wa-format-bytes value={2147483648} />
          </p>
        </div>
      </wa-card>

    </div>
  );
}

export default Feedback;
