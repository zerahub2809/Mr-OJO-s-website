import { Link } from 'react-router-dom';

import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Icon from '../components/ui/Icon.jsx';
import CTABand from '../components/shared/CTABand.jsx';

const zones = [
  {
    zone: 'Saki & Oke Ogun (Oyo State)',
    fee: '₦1,000 – ₦2,500',
    time: 'Same day / next day',
    note: 'Free delivery on bulk orders above ₦150,000',
  },
  {
    zone: 'Ibadan (all zones)',
    fee: '₦3,000 – ₦4,500',
    time: 'Within 24 hours',
    note: 'Daily dispatch, cut-off 2:00pm',
  },
  {
    zone: 'Lagos — Mainland',
    fee: '₦5,000 – ₦7,500',
    time: '1 – 2 working days',
    note: 'Third-party rider or inter-state bus',
  },
  {
    zone: 'Lagos — Island & Lekki',
    fee: '₦7,500 – ₦10,000',
    time: '1 – 2 working days',
    note: 'Doorstep delivery with tracking',
  },
  {
    zone: 'South-West & Nationwide',
    fee: 'From ₦4,000',
    time: '2 – 4 working days',
    note: 'Via trusted interstate carriers',
  },
  {
    zone: 'Bulk / Wholesale (≥10 bags)',
    fee: 'Negotiated per order',
    time: '7 – 14 days (with sourcing window)',
    note: 'Volume discounts apply',
  },
];

const pricingNotes = [
  { icon: 'money', title: 'Transparent quotes', text: 'Delivery fees are confirmed in writing before you pay — no surprise charges on arrival.' },
  { icon: 'scale', title: 'Honest weights', text: 'Buckets and bags are weighed on calibrated scales; bulk deliveries are verified on receipt.' },
  { icon: 'clock', title: 'Cut-off times', text: 'Orders confirmed before 2:00pm dispatch the same day within Oyo State.' },
];

export default function DeliveryPricing() {
  return (
    <>
      <PageMeta
        title="Delivery & Pricing"
        description="Delivery zones, fees and lead times for Iya Sade Oke Ogun Heritage — Saki, Ibadan, Lagos and nationwide delivery with transparent pricing."
      />

      <PageHero
        eyebrow="Delivery & Pricing"
        title="Fair prices, clear delivery promises"
        lead="Know your fee and your delivery window before you pay. Zones, prices and cut-off times — all in one place."
        crumbLabel="Delivery & Pricing"
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery Zones"
            title="Where we deliver & what it costs"
            subtitle="Fees below are indicative for standard retail orders. Heavy or volumetric loads (25kg/50kg bags) and special locations are quoted individually."
          />
          <div className="table-wrap">
            <table className="info-table">
              <thead>
                <tr>
                  <th scope="col">Zone</th>
                  <th scope="col">Delivery fee</th>
                  <th scope="col">Typical lead time</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                {zones.map((row) => (
                  <tr key={row.zone}>
                    <td>
                      <strong>{row.zone}</strong>
                    </td>
                    <td>{row.fee}</td>
                    <td>{row.time}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Pricing Principles"
            title="How we keep pricing honest"
          />
          <div className="grid grid--3">
            {pricingNotes.map((item) => (
              <div className="card" key={item.title}>
                <span className="card__icon card__icon--gold">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="form-note" style={{ marginTop: 30 }}>
            <Icon name="info" size={17} />
            <span>
              Product prices change with season and supply — for example, fresh yam is most
              affordable during the July–October harvest. Check our{' '}
              <Link to="/demand-insights">seasonal calendar</Link> or ask on WhatsApp for
              today’s price list.
            </span>
          </div>
        </div>
      </section>

      <CTABand
        title="Get a delivery quote for your area"
        text="Send your location, product and quantity — we reply with the exact delivery fee and dispatch date."
        secondary={{ label: 'View seasonal calendar', to: '/demand-insights' }}
      />
    </>
  );
}
