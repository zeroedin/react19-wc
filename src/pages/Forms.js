import { useState, useRef, useCallback } from 'react';

function Forms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [framework, setFramework] = useState('');
  const [experience, setExperience] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [newsletter, setNewsletter] = useState(false);
  const [interests, setInterests] = useState([]);
  const [age, setAge] = useState('');
  const [comments, setComments] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('#0969da');
  const [birthday, setBirthday] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [submitted, setSubmitted] = useState(null);
  const dialogRef = useRef(null);

  const handleInterestChange = useCallback((e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setInterests((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitted({
      name, email, framework, experience, sliderValue, newsletter,
      interests, age, comments, favoriteColor, birthday, meetingTime, otpValue,
    });
    dialogRef.current.open = true;
  }, [name, email, framework, experience, sliderValue, newsletter,
      interests, age, comments, favoriteColor, birthday, meetingTime, otpValue]);

  const handleReset = useCallback(() => {
    setName('');
    setEmail('');
    setFramework('');
    setExperience('');
    setSliderValue(50);
    setNewsletter(false);
    setInterests([]);
    setAge('');
    setComments('');
    setFavoriteColor('#0969da');
    setBirthday('');
    setMeetingTime('');
    setOtpValue('');
    setSubmitted(null);
  }, []);

  return (
    <div className="page">
      <h2>Form Controls</h2>
      <p>
        Form elements bound to React state with <code>onChange</code>{' '}
        and <code>onInput</code>.
      </p>

      <wa-card>
        <div slot="header"><strong>Developer Survey</strong></div>

        <form onSubmit={handleSubmit} className="demo-form">
          <wa-input
            label="Full Name"
            placeholder="Jane Doe"
            value={name}
            onInput={(e) => setName(e.target.value)}
            with-clear
            required
          />

          <wa-input
            label="Email"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            with-clear
            required
          />

          <wa-select
            label="Favorite Framework"
            placeholder="Pick one"
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            with-clear
            required
          >
            <wa-option value="react">React</wa-option>
            <wa-option value="vue">Vue</wa-option>
            <wa-option value="angular">Angular</wa-option>
            <wa-option value="svelte">Svelte</wa-option>
            <wa-option value="solid">Solid</wa-option>
          </wa-select>

          <wa-radio-group
            label="Experience Level"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <wa-radio value="beginner">Beginner</wa-radio>
            <wa-radio value="intermediate">Intermediate</wa-radio>
            <wa-radio value="advanced">Advanced</wa-radio>
          </wa-radio-group>

          <wa-slider
            label={`Satisfaction: ${sliderValue}%`}
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
          />

          <wa-switch
            checked={newsletter || undefined}
            onChange={(e) => setNewsletter(e.target.checked)}
          >
            Subscribe to newsletter
          </wa-switch>

          <div className="button-row">
            <wa-button type="submit" variant="brand">Submit</wa-button>
            <wa-button variant="neutral" onClick={handleReset}>Reset</wa-button>
          </div>
        </form>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Checkbox Group</strong></div>
        <wa-checkbox-group
          label="Interests"
          onChange={handleInterestChange}
        >
          <wa-checkbox value="frontend">Frontend</wa-checkbox>
          <wa-checkbox value="backend">Backend</wa-checkbox>
          <wa-checkbox value="devops">DevOps</wa-checkbox>
          <wa-checkbox value="design">Design</wa-checkbox>
          <wa-checkbox value="mobile">Mobile</wa-checkbox>
        </wa-checkbox-group>
        <p>Selected: {interests.length > 0 ? interests.join(', ') : '(none)'}</p>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Number Input</strong></div>
        <wa-number-input
          label="Age"
          min={13}
          max={120}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {age && <p>You entered: {age}</p>}
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Textarea</strong></div>
        <wa-textarea
          label="Comments"
          placeholder="Tell us what you think..."
          value={comments}
          onInput={(e) => setComments(e.target.value)}
          resize="auto"
          with-count
          maxlength={280}
        />
        {comments && <p>Preview: {comments}</p>}
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Color Picker</strong></div>
        <wa-color-picker
          label="Favorite Color"
          value={favoriteColor}
          onChange={(e) => setFavoriteColor(e.target.value)}
        />
        <p>
          Selected:{' '}
          <span style={{
            backgroundColor: favoriteColor,
            color: `contrast-color(${favoriteColor})`,
            padding: '0.125rem 0.5rem',
            borderRadius: '4px',
          }}>
            {favoriteColor}
          </span>
        </p>
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Known Date</strong></div>
        <wa-known-date
          label="Birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        {birthday && <p>You entered: {birthday}</p>}
      </wa-card>

      <wa-card>
        <div slot="header"><strong>Time Input</strong></div>
        <wa-time-input
          label="Preferred Meeting Time"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
        />
        {meetingTime && <p>Selected: {meetingTime}</p>}
      </wa-card>

      <wa-card>
        <div slot="header"><strong>OTP Input</strong></div>
        <wa-otp-input
          label="Verification Code"
          length={6}
          onChange={(e) => setOtpValue(e.target.value)}
        />
        {otpValue && <p>Entered: {otpValue}</p>}
      </wa-card>

      <wa-callout variant="neutral">
        <strong>Key Pattern</strong><br />
        Web Awesome form controls fire native <code>input</code> and{' '}
        <code>change</code> events. Use <code>onInput</code> for real-time
        updates (every keystroke) and <code>onChange</code> for committed
        changes (blur or selection).
      </wa-callout>

      <wa-dialog label="Survey Results" ref={dialogRef}>
        {submitted && (
          <dl className="result-list">
            <dt>Name</dt>
            <dd>{submitted.name || '(empty)'}</dd>
            <dt>Email</dt>
            <dd>{submitted.email || '(empty)'}</dd>
            <dt>Framework</dt>
            <dd>{submitted.framework || '(none)'}</dd>
            <dt>Experience</dt>
            <dd>{submitted.experience || '(none)'}</dd>
            <dt>Satisfaction</dt>
            <dd>{submitted.sliderValue}%</dd>
            <dt>Newsletter</dt>
            <dd>{submitted.newsletter ? 'Yes' : 'No'}</dd>
            <dt>Interests</dt>
            <dd>{submitted.interests.length > 0 ? submitted.interests.join(', ') : '(none)'}</dd>
            <dt>Age</dt>
            <dd>{submitted.age || '(empty)'}</dd>
            <dt>Comments</dt>
            <dd>{submitted.comments || '(empty)'}</dd>
            <dt>Favorite Color</dt>
            <dd>
              <span style={{ color: submitted.favoriteColor }}>{submitted.favoriteColor}</span>
            </dd>
            <dt>Birthday</dt>
            <dd>{submitted.birthday || '(empty)'}</dd>
            <dt>Meeting Time</dt>
            <dd>{submitted.meetingTime || '(empty)'}</dd>
            <dt>OTP</dt>
            <dd>{submitted.otpValue || '(empty)'}</dd>
          </dl>
        )}
        <wa-button slot="footer" variant="brand" data-dialog="close">
          Close
        </wa-button>
      </wa-dialog>
    </div>
  );
}

export default Forms;
