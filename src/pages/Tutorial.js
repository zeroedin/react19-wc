import { useParams } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const STEPS = [
  {
    title: 'Project Setup',
    content: (
      <>
        <p>Start with a new React 19 app using create-react-app:</p>
        <pre><code>{`npx create-react-app my-app
cd my-app`}</code></pre>
        <p>
          create-react-app 5.x ships React 19 by default. Then install Web Awesome:
        </p>
        <pre><code>{`npm install @awesome.me/webawesome`}</code></pre>
      </>
    ),
  },
  {
    title: 'Register Components',
    content: (
      <>
        <p>
          Web Awesome does <strong>not</strong> auto-register components from
          the main entry point. Create a central registration file that imports
          each component you use:
        </p>
        <pre><code>{`// src/webawesome.js
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/card/card.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
// ... add each component you use`}</code></pre>
        <p>Then import the theme and registrations in your entry point:</p>
        <pre><code>{`// src/index.js
import '@awesome.me/webawesome/dist/styles/themes/default.css';
import './webawesome';`}</code></pre>
        <wa-callout variant="warning">
          Web Awesome ships an autoloader (<code>webawesome.loader.js</code>)
          that watches the DOM for <code>&lt;wa-*&gt;</code> elements and
          lazy-loads their definitions over HTTP. This works for CDN-based
          or static HTML projects where the component files are served as
          static assets. Bundlers like webpack (used by create-react-app)
          don't serve <code>node_modules</code> files at those URLs, so the
          autoloader's fetch requests 404. Import each component directly
          instead.
        </wa-callout>
      </>
    ),
  },
  {
    title: 'Properties',
    content: (
      <>
        <p>
          React 18 set attributes on custom elements. Attributes are always
          strings, so passing <code>value={'{42}'}</code> wrote the string{' '}
          <code>"42"</code> to the DOM. Booleans, objects, and arrays
          required ref workarounds.
        </p>
        <p>
          React 19 sets properties. The value reaches the component as the
          original type:
        </p>
        <pre><code>{`// Strings, numbers, booleans — passed as-is
<wa-input value={name} with-clear required />
<wa-slider value={50} min={0} max={100} />

// Booleans control component state
<wa-switch checked={darkMode || undefined} />
<wa-button disabled={isLoading || undefined} />`}</code></pre>
        <wa-callout variant="brand">
          For boolean props, pass <code>true</code> to enable or{' '}
          <code>undefined</code> to disable. Passing{' '}
          <code>false</code> sets the property to <code>false</code>,
          which some components treat differently than the property
          being absent.
        </wa-callout>
        <p>
          React 18 equivalent of the same code:
        </p>
        <pre><code>{`// React 18 — every property needed a ref
const ref = useRef(null);
useEffect(() => {
  ref.current.value = name;
  ref.current.withClear = true;
}, [name]);`}</code></pre>
      </>
    ),
  },
  {
    title: 'Controlled Components',
    content: (
      <>
        <p>
          React 19 re-applies JSX props on every render. For web
          components that manage their own state, this creates
          conflicts. A prop like <code>value="bounce"</code> resets
          the component's value every time React renders, overwriting
          user interactions.
        </p>
        <pre><code>{`// Problem: React resets the select on every render
<wa-select value={animName}>

// Fix: use a ref, let the component own its state
const selectRef = useRef(null);
const value = selectRef.current?.value;
<wa-select ref={selectRef}>`}</code></pre>
        <p>
          Dialogs and drawers are the same. Setting{' '}
          <code>open</code> as a JSX prop fights the component's
          internal state. Use a ref to open, and{' '}
          <code>data-dialog="close"</code> to close:
        </p>
        <pre><code>{`const ref = useRef(null);

<wa-button onClick={() => ref.current.open = true}>
  Open
</wa-button>

<wa-dialog ref={ref} label="My Dialog">
  <wa-button slot="footer" data-dialog="close">
    Close
  </wa-button>
</wa-dialog>`}</code></pre>
        <wa-callout variant="brand">
          When a web component manages its own state (selects,
          animations, dialogs), keep React out of the loop. Use refs
          to read values and trigger actions. Only use JSX props for
          values you want React to control on every render.
        </wa-callout>
      </>
    ),
  },
  {
    title: 'Events',
    content: (
      <>
        <p>
          React 19 maps DOM events on custom elements to JSX handlers with
          the <code>on</code> + name convention. Form controls fire native{' '}
          <code>input</code> and <code>change</code> events. UI lifecycle
          events use custom names like <code>wa-show</code>.
        </p>
        <pre><code>{`// Native events → standard React handlers
<wa-input onInput={(e) => setName(e.target.value)} />
<wa-select onChange={(e) => setVal(e.target.value)}>
<wa-switch onChange={(e) => setDark(e.target.checked)} />

// Custom events → on + PascalCase
<wa-dialog onWaHide={() => setOpen(false)} />
<wa-drawer onWaShow={() => console.log('opened')} />`}</code></pre>
        <wa-callout variant="brand">
          React 19 registers event listeners for any <code>on*</code>{' '}
          prop on a custom element. <code>change</code> maps to{' '}
          <code>onChange</code>. <code>wa-hide</code> maps to{' '}
          <code>onWaHide</code>.
        </wa-callout>
      </>
    ),
  },
  {
    title: 'Slots',
    content: (
      <>
        <p>
          A web component's shadow DOM can define{' '}
          <code>&lt;slot&gt;</code> elements as placeholders. When you
          write children in the light DOM (your JSX), the browser{' '}
          <em>projects</em> them into matching slots for rendering. The
          children aren't moved into the shadow DOM. They stay where you
          wrote them. See{' '}
          <a href="https://javascript.info/slots-composition"
             target="_blank" rel="noopener noreferrer">
            javascript.info/slots-composition
          </a>{' '}
          and{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots"
             target="_blank" rel="noopener noreferrer">MDN</a>{' '}
          for the full picture.
        </p>
        <pre><code>{`{/* "header" and "footer" are named slots.
    Unslotted children go to the default slot. */}
<wa-card>
  <div slot="header">Title</div>
  Default slot content
  <div slot="footer">Footer</div>
</wa-card>`}</code></pre>
        <p>
          Because slotted content stays in the light DOM, React state,
          event handlers, and conditional rendering all work:
        </p>
        <pre><code>{`<wa-card>
  <div slot="header">
    <strong>Results</strong>
    {done && <wa-badge variant="success">Done</wa-badge>}
  </div>

  {results
    ? <ResultsList data={results} />
    : <p>Fill out the form.</p>}

  <div slot="footer">
    <wa-button onClick={handleSubmit}>Submit</wa-button>
  </div>
</wa-card>`}</code></pre>
      </>
    ),
  },
  {
    title: 'Dark Mode',
    content: (
      <>
        <p>
          Toggle <code>wa-dark</code> or <code>wa-light</code> on a parent
          element. Web Awesome uses the <code>wa-color-scheme</code>{' '}
          localStorage key to persist the preference, falling back to the
          OS setting via <code>prefers-color-scheme</code>:
        </p>
        <pre><code>{`const [dark, setDark] = useState(() => {
  const saved = localStorage.getItem('wa-color-scheme');
  if (saved) return saved === 'dark';
  return matchMedia('(prefers-color-scheme: dark)').matches;
});

const toggle = (checked) => {
  setDark(checked);
  localStorage.setItem('wa-color-scheme',
    checked ? 'dark' : 'light');
};

<div className={dark ? 'wa-dark' : 'wa-light'}>
  <wa-switch
    checked={dark || undefined}
    onChange={(e) => toggle(e.target.checked)}>
    Dark Mode
  </wa-switch>
</div>`}</code></pre>
        <p>
          Design tokens respond to the theme class. Use them in your own CSS:
        </p>
        <pre><code>{`.my-element {
  color: var(--wa-color-text-normal);
  background: var(--wa-color-surface-raised);
  border: 1px solid var(--wa-color-surface-border);
}`}</code></pre>
      </>
    ),
  },
  {
    title: 'Routing',
    content: (
      <>
        <p>
          Components like <code>wa-button</code> render{' '}
          <code>&lt;a&gt;</code> tags inside their shadow DOM when you set{' '}
          <code>href</code>. React Router's <code>&lt;Link&gt;</code> can't
          wrap these without nesting anchors. The shadow{' '}
          <code>&lt;a&gt;</code> triggers a full page reload.
        </p>
        <p>
          A click handler scoped to shadow DOM anchors solves this. It
          uses <code>composedPath()</code> to find the anchor, checks that
          it's inside a <code>ShadowRoot</code>, and routes internal links
          through React Router. Light DOM links are left for{' '}
          <code>&lt;Link&gt;</code> and <code>&lt;NavLink&gt;</code>:
        </p>
        <pre><code>{`function useInterceptShadowLinks() {
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e) {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;

      const anchor = e.composedPath().find(
        (el) => el instanceof HTMLAnchorElement
      );
      if (!anchor) return;

      // Only intercept shadow DOM anchors
      const root = anchor.getRootNode();
      if (!(root instanceof ShadowRoot)) return;

      const url = new URL(anchor.href, location.origin);
      if (url.origin !== location.origin) return;
      if (anchor.target === '_blank') return;

      e.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    }

    document.addEventListener('click', handleClick, true);
    return () =>
      document.removeEventListener('click', handleClick, true);
  }, [navigate]);
}`}</code></pre>
        <p>
          Use <code>&lt;NavLink&gt;</code> and <code>&lt;Link&gt;</code>{' '}
          for your React navigation as normal. When a web component renders
          an <code>&lt;a&gt;</code> inside its shadow DOM, the hook
          intercepts the click and routes it through React Router instead
          of triggering a full page reload.
        </p>
      </>
    ),
  },
  {
    title: 'create-react-app Quirks',
    content: (
      <>
        <p>
          create-react-app-specific setup:
        </p>
        <wa-callout variant="warning">
          <strong>ResizeObserver warning.</strong> Any code using
          ResizeObserver can trigger a "loop completed with undelivered
          notifications" message. The browser defers some resize callbacks
          to prevent infinite layout loops. create-react-app's error overlay displays
          this as a runtime error. Add this to{' '}
          <code>public/index.html</code> to suppress it:
        </wa-callout>
        <pre><code>{`<script>
  window.addEventListener('error', function(e) {
    if (e.message &&
        e.message.includes('ResizeObserver loop')) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);
</script>`}</code></pre>
      </>
    ),
  },
];

function Tutorial() {
  const { step: stepParam } = useParams();
  const paginationRef = useRef(null);
  const stepNum = parseInt(stepParam?.replace('step-', ''), 10) || 1;
  const step = Math.max(0, Math.min(STEPS.length - 1, stepNum - 1));
  const current = STEPS[step];

  useEffect(() => {
    const el = paginationRef.current;
    if (el) el.hrefTemplate = (page) => page === 1 ? '/tutorial' : `/tutorial/step-${page}`;
  }, []);

  return (
    <div className="page">
      <h2>Setup Tutorial</h2>
      <p>
        Step-by-step guide to integrating Web Awesome with React 19.
      </p>

      <wa-progress-bar
        value={((step + 1) / STEPS.length) * 100}
        label="Tutorial progress"
      >
        Step {step + 1} of {STEPS.length}
      </wa-progress-bar>

      <div className="tutorial-nav">
        <wa-button
          variant="brand"
          href={step > 0 ? (step === 1 ? '/tutorial' : `/tutorial/step-${step}`) : undefined}
          disabled={step === 0 || undefined}
        >
          Previous
        </wa-button>
        <wa-button
          variant="brand"
          href={step < STEPS.length - 1 ? `/tutorial/step-${step + 2}` : undefined}
          disabled={step === STEPS.length - 1 || undefined}
        >
          Next
        </wa-button>
      </div>

      <wa-card className="tutorial-card">
        <div slot="header">
          <div className="tutorial-header">
            <wa-badge variant="brand">{step + 1}/{STEPS.length}</wa-badge>
            <strong>{current.title}</strong>
          </div>
        </div>

        <div className="tutorial-content">
          {current.content}
        </div>

        <div slot="footer">
          <wa-pagination
            ref={paginationRef}
            total={STEPS.length}
            page-size={1}
            page={step + 1}
            sibling-count={STEPS.length}
            label="Tutorial steps"
          />
        </div>
      </wa-card>
    </div>
  );
}

export default Tutorial;
