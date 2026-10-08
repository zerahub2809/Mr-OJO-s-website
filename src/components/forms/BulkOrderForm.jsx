import { useState } from 'react';
import { bulkProductOptions } from '../../data/products.js';
import { waLink, EMAIL } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';

const frequencies = ['One-time order', 'Weekly', 'Monthly', 'Quarterly', 'Twice a year'];

const initialState = {
  name: '',
  phone: '',
  email: '',
  product: bulkProductOptions[0],
  packaging: '',
  quantity: '',
  frequency: 'Monthly',
  startDate: '',
  destination: '',
  notes: '',
};

/**
 * Bulk order forecasting form (PRD §5.B):
 * customers state estimated monthly/quarterly needs and the enquiry is
 * delivered to the business via a pre-filled WhatsApp message.
 */
export default function BulkOrderForm() {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      'BULK ORDER FORECAST — Iya Sade Oke Ogun Heritage',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Product: ${form.product}`,
      form.packaging ? `Packaging size: ${form.packaging}` : null,
      `Estimated quantity: ${form.quantity}`,
      `Order frequency: ${form.frequency}`,
      form.startDate ? `Preferred start: ${form.startDate}` : null,
      form.destination ? `Delivery destination: ${form.destination}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(waLink(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <div className="form-card" id="bulk-form">
      {sent && (
        <div className="form-success" role="status">
          <Icon name="check" size={20} />
          <span>
            Thank you, {form.name || 'valued customer'}! Your forecast has been prepared and
            WhatsApp is opening with your details. If the chat did not open,{' '}
            <a href={`mailto:${EMAIL}`}>email us instead</a> — we respond within one working day.
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-grid" aria-label="Bulk order forecasting form">
        <div className="form-field">
          <label htmlFor="bulk-name">
            Full name / business name <span>*</span>
          </label>
          <input
            id="bulk-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Mama Nkechi Stores Ltd"
            value={form.name}
            onChange={update}
          />
        </div>

        <div className="form-field">
          <label htmlFor="bulk-phone">
            Phone / WhatsApp number <span>*</span>
          </label>
          <input
            id="bulk-phone"
            name="phone"
            type="tel"
            required
            placeholder="0803 000 0000"
            value={form.phone}
            onChange={update}
          />
        </div>

        <div className="form-field">
          <label htmlFor="bulk-email">Email (optional)</label>
          <input
            id="bulk-email"
            name="email"
            type="email"
            placeholder="you@business.com"
            value={form.email}
            onChange={update}
          />
        </div>

        <div className="form-field">
          <label htmlFor="bulk-product">
            Product of interest <span>*</span>
          </label>
          <select
            id="bulk-product"
            name="product"
            value={form.product}
            onChange={update}
            required
          >
            {bulkProductOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="bulk-packaging">Preferred packaging size</label>
          <input
            id="bulk-packaging"
            name="packaging"
            type="text"
            placeholder="e.g. 25kg bags, 5L buckets"
            value={form.packaging}
            onChange={update}
          />
        </div>

        <div className="form-field">
          <label htmlFor="bulk-quantity">
            Estimated quantity per cycle <span>*</span>
          </label>
          <input
            id="bulk-quantity"
            name="quantity"
            type="text"
            required
            placeholder="e.g. 20 bags (50kg) / 300kg"
            value={form.quantity}
            onChange={update}
          />
          <span className="form-hint">Use bags, kilograms or litres — whatever is easiest.</span>
        </div>

        <div className="form-field">
          <label htmlFor="bulk-frequency">
            Order frequency <span>*</span>
          </label>
          <select
            id="bulk-frequency"
            name="frequency"
            value={form.frequency}
            onChange={update}
            required
          >
            {frequencies.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="bulk-start">Preferred start date</label>
          <input
            id="bulk-start"
            name="startDate"
            type="date"
            value={form.startDate}
            onChange={update}
          />
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="bulk-destination">Delivery destination</label>
          <input
            id="bulk-destination"
            name="destination"
            type="text"
            placeholder="e.g. Ibadan, Lagos Island, Abuja warehouse…"
            value={form.destination}
            onChange={update}
          />
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="bulk-notes">Additional notes</label>
          <textarea
            id="bulk-notes"
            name="notes"
            placeholder="Festive-season orders, labelling requirements, delivery schedule, budget…"
            value={form.notes}
            onChange={update}
          />
        </div>

        <div className="form-field form-field--full">
          <button type="submit" className="btn btn--primary btn--lg">
            <Icon name="whatsapp" size={18} /> Submit Forecast via WhatsApp
          </button>
          <div className="form-note">
            <Icon name="info" size={17} />
            <span>
              Your forecast helps us reserve sourcing capacity at Saki &amp; Oje Owode ahead of
              peak season. Bulk buyers who book 2–4 weeks early get guaranteed dispatch slots and
              priority pricing.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
