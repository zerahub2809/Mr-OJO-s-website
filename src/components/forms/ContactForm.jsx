import { useState } from 'react';
import { waLink, EMAIL } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';

const subjects = [
  'Order enquiry',
  'Bulk / wholesale quote',
  'Delivery & pricing question',
  'Quality / standards question',
  'Partnership (diaspora & export)',
  'Other',
];

const initialState = { name: '', phone: '', email: '', subject: subjects[0], message: '' };

/** Contact / order form — submits through a pre-filled WhatsApp message. */
export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      `NEW ENQUIRY — ${form.subject}`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(waLink(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <div className="form-card">
      {sent && (
        <div className="form-success" role="status">
          <Icon name="check" size={20} />
          <span>
            Thank you, {form.name || 'valued customer'}! WhatsApp is opening with your message
            ready to send. If nothing opened, email us at{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-grid" aria-label="Contact form">
        <div className="form-field">
          <label htmlFor="contact-name">
            Full name <span>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={update}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-phone">
            Phone / WhatsApp <span>*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            placeholder="0803 000 0000"
            value={form.phone}
            onChange={update}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email (optional)</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={update}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-subject">
            Subject <span>*</span>
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={update}
            required
          >
            {subjects.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="contact-message">
            Your message <span>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder="Tell us what you need — product, size, quantity, delivery location…"
            value={form.message}
            onChange={update}
          />
        </div>

        <div className="form-field form-field--full">
          <button type="submit" className="btn btn--primary btn--lg">
            <Icon name="whatsapp" size={18} /> Send via WhatsApp
          </button>
          <div className="form-note">
            <Icon name="lock" size={17} />
            <span>
              Your details are used only to respond to this enquiry. We never sell or share
              customer order data.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
