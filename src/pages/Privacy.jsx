import { memo } from 'react';
import { profile } from '../data/portfolio';
import PageShell, { PageHero, SectionHeading } from '../components/PageShell';

const sections = [
  ['Contact form', 'If the server-backed form is configured, it sends your name, email address, project type, and message to Bhavya for the sole purpose of responding to your inquiry. The hidden honeypot field is used only to reject obvious spam.'],
  ['Retention', 'Inquiry data should be retained only as long as needed to respond, manage a working relationship, or meet a legal obligation. You may request deletion through the email address below.'],
  ['Analytics', 'This portfolio does not transmit personal form content to analytics. Runtime performance values shown on the System page are calculated in your browser. Any future analytics integration must be privacy-conscious and disclosed here before activation.'],
  ['Third parties', 'The live contact endpoint can use Resend as an email processor when configured by the site owner. External project, GitHub, and LinkedIn links are governed by their respective privacy policies.'],
  ['Offline storage', 'The optional service worker caches public site assets so previously visited pages can recover during a network interruption. It does not cache submitted contact messages.'],
  ['Your choices', `You can use the direct email link instead of the form, disable JavaScript, clear this site's cached data in your browser, or ask about access and deletion at ${profile.email}.`],
];

function Privacy() {
  return (
    <PageShell title="Privacy" description="Plain-language privacy details for contact inquiries, analytics, caching, and third-party links." className="privacy-page">
      <PageHero eyebrow="Privacy / plain language" title={<>Your message is<br />not a data product.</>} lede="This page describes what the portfolio can collect, why it is needed, and the choices available to you." meta={[
        { label: 'Last updated', value: '19 Jul 2026' },
        { label: 'Form purpose', value: 'Reply to inquiries' },
        { label: 'Deletion contact', value: profile.email },
      ]} />
      <section className="mission-section privacy-content">
        <SectionHeading index="01" eyebrow="Data practice" title="Minimum data, explicit purpose." />
        <div>{sections.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h2>{title}</h2><p>{copy}</p></article>)}</div>
        <aside><strong>Questions or deletion requests</strong><a href={`mailto:${profile.email}`}>{profile.email}</a></aside>
      </section>
    </PageShell>
  );
}

export default memo(Privacy);
