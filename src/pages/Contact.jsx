import { memo, useMemo, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import PageShell, { PageHero, SectionHeading } from '../components/PageShell';
import { profile } from '../data/portfolio';
import { availability } from '../data/siteContent';
import { trackEvent } from '../utils/analytics';

const initialForm = {
  name: '',
  email: '',
  projectType: '',
  timeline: '',
  message: '',
  website: '',
  consent: false,
};

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Please enter at least two characters.';
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid reply email.';
  if (!form.projectType) errors.projectType = 'Choose the closest project type.';
  if (form.message.trim().length < 30) errors.message = 'A little more context helps—please use at least 30 characters.';
  if (!form.consent) errors.consent = 'Please confirm that Bhavya may use these details to reply.';
  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copied, setCopied] = useState(false);
  const progress = useMemo(() => {
    const fields = [form.name, form.email, form.projectType, form.message, form.consent];
    return Math.round((fields.filter(Boolean).length / fields.length) * 100);
  }, [form]);

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ state: 'error', message: 'Review the highlighted fields and try again.' });
      document.getElementById(`contact-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    setStatus({ state: 'sending', message: 'Sending your project signal...' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          timeline: form.timeline,
          message: form.message,
          website: form.website,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'The secure form endpoint is not available on this deployment.');
      setForm(initialForm);
      setStatus({ state: 'success', message: 'Message sent. Your project context is now in Bhavya’s inbox.' });
      trackEvent('contact_success', { project_type: form.projectType });
    } catch (error) {
      setStatus({ state: 'error', message: `${error.message} You can still use the direct email link below.` });
      trackEvent('contact_failure', { reason: 'delivery_unavailable' });
    }
  };

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio inquiry${form.name ? ` from ${form.name}` : ''}`)}&body=${encodeURIComponent(`${form.message}\n\nReply to: ${form.email}\nProject type: ${form.projectType}\nTimeline: ${form.timeline || 'Not specified'}`)}`;

  return (
    <PageShell title="Contact" description="Start a scoped React, full-stack, or creative frontend project conversation with Bhavya Lohami." className="contact-page">
      <PageHero
        eyebrow="Contact / open channel"
        title={<>Tell me what<br />must work.</>}
        lede="The best first message names the user, current stage, desired outcome, constraints, and the part you want me to own."
        meta={[
          { label: 'Status', value: availability.status },
          { label: 'Timezone', value: availability.timezone },
          { label: 'Channel', value: availability.preferredContact.channel },
        ]}
      />
      <section className="mission-section contact-mission">
        <SectionHeading index="01" eyebrow="Project brief" title="Enough context to make the first reply useful." copy="Fields marked required are validated in your browser and again by the same-origin endpoint when it is configured." />
        <div className="contact-mission__grid">
          <aside>
            <div className="contact-progress"><span>Brief completeness</span><strong>{progress}%</strong><i><b style={{ width: `${progress}%` }} /></i></div>
            <h2>A strong fit usually involves</h2>
            <ul>{availability.relevantWork.map((item) => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}</ul>
            <div className="contact-direct">
              <span>Direct channel</span><a href={`mailto:${profile.email}`}><FiMail aria-hidden="true" />{profile.email}</a>
              <button type="button" onClick={async () => { await navigator.clipboard?.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1600); }}><FiCopy aria-hidden="true" />{copied ? 'Copied' : 'Copy email'}</button>
              <p><FiMapPin aria-hidden="true" />{availability.location}</p>
            </div>
          </aside>
          <form onSubmit={submit} noValidate>
            <div className="contact-form__row">
              <label htmlFor="contact-name"><span>Name *</span><input id="contact-name" name="name" value={form.name} onChange={update} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />{errors.name && <small id="contact-name-error">{errors.name}</small>}</label>
              <label htmlFor="contact-email"><span>Email *</span><input id="contact-email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />{errors.email && <small id="contact-email-error">{errors.email}</small>}</label>
            </div>
            <div className="contact-form__row">
              <label htmlFor="contact-projectType"><span>Project type *</span><select id="contact-projectType" name="projectType" value={form.projectType} onChange={update} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? 'contact-projectType-error' : undefined}><option value="">Choose one</option><option>React / Next.js product</option><option>Full-stack workflow</option><option>Creative frontend</option><option>Performance or accessibility</option><option>Other / still framing</option></select>{errors.projectType && <small id="contact-projectType-error">{errors.projectType}</small>}</label>
              <label htmlFor="contact-timeline"><span>Timeline</span><select id="contact-timeline" name="timeline" value={form.timeline} onChange={update}><option value="">Not fixed yet</option><option>Within 4 weeks</option><option>1–3 months</option><option>3–6 months</option><option>Ongoing collaboration</option></select></label>
            </div>
            <label htmlFor="contact-message"><span>Project context *</span><textarea id="contact-message" name="message" rows="9" value={form.message} onChange={update} placeholder="What are you building, who is it for, and what must change?" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />{errors.message && <small id="contact-message-error">{errors.message}</small>}</label>
            <label className="contact-honeypot" aria-hidden="true"><span>Website</span><input name="website" value={form.website} onChange={update} tabIndex="-1" autoComplete="off" /></label>
            <label className="contact-consent" htmlFor="contact-consent"><input id="contact-consent" name="consent" type="checkbox" checked={form.consent} onChange={update} aria-invalid={Boolean(errors.consent)} /><span>I agree that these details may be used to reply to this inquiry. See the <a href="/privacy">privacy note</a>.</span></label>
            {errors.consent && <small id="contact-consent-error">{errors.consent}</small>}
            <div className="contact-form__submit"><button type="submit" className="lunar-button lunar-button--primary" disabled={status.state === 'sending'}><FiSend aria-hidden="true" />{status.state === 'sending' ? 'Sending...' : 'Send project signal'}</button><a href={mailto}>Use email client <FiArrowUpRight aria-hidden="true" /></a></div>
            <p className={`contact-status contact-status--${status.state}`} role="status" aria-live="polite">{status.message}</p>
          </form>
        </div>
      </section>
      <section className="mission-section contact-expectation"><span>Response expectation</span><p>{availability.responseExpectation}</p></section>
    </PageShell>
  );
}

export default memo(Contact);
