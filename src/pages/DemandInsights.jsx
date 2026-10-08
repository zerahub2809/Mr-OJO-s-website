import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Icon from '../components/ui/Icon.jsx';
import SeasonalCalendar from '../components/demand/SeasonalCalendar.jsx';
import BulkOrderForm from '../components/forms/BulkOrderForm.jsx';

import { leadTimes, highDemandPeriods } from '../data/seasonal.js';

const benefits = [
  {
    icon: 'shield',
    title: 'Transparent supply reliability',
    text: 'You always see what is in season, what is limited and when the next batch lands.',
  },
  {
    icon: 'clock',
    title: 'Early booking for bulk buyers',
    text: 'Reserve capacity weeks ahead and get a guaranteed dispatch slot during peaks.',
  },
  {
    icon: 'check',
    title: 'Reduced risk of stockouts',
    text: 'Forecast-led procurement at Saki & Oje Owode keeps shelves and depots supplied.',
  },
];

export default function DemandInsights() {
  return (
    <>
      <PageMeta
        title="Demand Insights & Forecasting"
        description="Seasonal availability calendar, expected lead times during festive peaks, and a bulk order forecasting form for Elubo, yam, garri and maize."
      />

      <PageHero
        eyebrow="Demand Insights"
        title="Plan your orders with seasonal intelligence"
        lead="See when each product is at peak quality, how long dispatch takes during high-demand periods, and book your bulk volumes before the rush."
        crumbLabel="Demand Insights"
      />

      {/* Seasonal availability calendar */}
      <section className="section section--white" id="calendar">
        <div className="container">
          <SectionHeading
            eyebrow="Seasonal Availability Calendar"
            title="When each product is at its best"
            subtitle="Peak periods mean the freshest supply and the most competitive pricing. Limited months are still available from stock — but booking ahead is wise."
          />
          <SeasonalCalendar />
        </div>
      </section>

      {/* Lead times */}
      <section className="section" id="lead-times">
        <div className="container">
          <SectionHeading
            eyebrow="Expected Lead Times"
            title="What to expect during high-demand periods"
            subtitle="Festive seasons and public holidays compress supply. These are the realistic timelines we commit to."
          />
          <div className="table-wrap">
            <table className="info-table">
              <thead>
                <tr>
                  <th scope="col">Period</th>
                  <th scope="col">Applies to</th>
                  <th scope="col">Expected lead time</th>
                </tr>
              </thead>
              <tbody>
                {leadTimes.map((row) => (
                  <tr key={row.period}>
                    <td>
                      <strong>{row.period}</strong>
                    </td>
                    <td>{row.scope}</td>
                    <td>{row.lead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            {highDemandPeriods.map((item) => (
              <div className="card" key={item.title}>
                <span className="card__icon card__icon--gold">
                  <Icon name="calendar" size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer benefits */}
      <section className="section section--green">
        <div className="container">
          <SectionHeading
            eyebrow="Why It Matters To You"
            title="Forecasting built around customer confidence"
          />
          <div className="grid grid--3">
            {benefits.map((item) => (
              <div className="benefit" key={item.title}>
                <span className="benefit__icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bulk forecasting form */}
      <section className="section" id="bulk">
        <div className="container">
          <SectionHeading
            eyebrow="Bulk Order Forecasting"
            title="Tell us what you’ll need — we’ll reserve the supply"
            subtitle="Estimated monthly or quarterly volumes let us schedule sourcing at Saki & Oje Owode ahead of demand, so your orders arrive on time even in December."
          />
          <div className="split">
            <div>
              <h3>How your forecast is used</h3>
              <ul className="feature-list">
                <li>
                  <Icon name="check" size={18} /> Volumes are matched against seasonal peak
                  supply for each product
                </li>
                <li>
                  <Icon name="check" size={18} /> Procurement plans are set for Saki &amp; Oje
                  Owode sourcing windows
                </li>
                <li>
                  <Icon name="check" size={18} /> You receive an early-booking quote with a
                  reserved dispatch slot
                </li>
                <li>
                  <Icon name="check" size={18} /> No obligation — the forecast is free and
                  non-binding
                </li>
              </ul>
              <div className="form-note">
                <Icon name="info" size={17} />
                <span>
                  Prefer to talk? Call or WhatsApp us and we will capture your forecast for you
                  in under two minutes.
                </span>
              </div>
            </div>
            <div
              className="split__media"
              style={{ background: 'linear-gradient(150deg, #d4a017, #1b5e20)' }}
            >
              <div className="split__media-caption">
                <strong>Data-driven, human-delivered</strong>
                <span>
                  Your forecast joins our historical order patterns to guide seasonal
                  procurement — the same intelligence behind our availability calendar.
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 44 }}>
            <BulkOrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
