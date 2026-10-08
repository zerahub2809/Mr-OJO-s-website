import { Link } from 'react-router-dom';
import Icon from '../ui/Icon.jsx';
import { waLink, DEFAULT_WA_MESSAGE } from '../../data/site.js';

/** Homepage hero: heritage promise, CTAs, trust list and a quick-price card. */
export default function Hero() {
  return (
    <section className="hero">
      <span className="hero__glow hero__glow--one" aria-hidden="true" />
      <span className="hero__glow hero__glow--two" aria-hidden="true" />
      <span className="hero__ring" aria-hidden="true" />

      <div className="container hero__grid">
        <div>
          <span className="hero__eyebrow">
            <Icon name="seedling" size={15} /> Saki · Oje Owode · Oke Ogun
          </span>

          <h1>
            Heritage Taste from the <em>Heart of Oke Ogun</em>
          </h1>

          <p className="hero__lead">
            Premium Elubo (yam flour), fresh yam, garri and maize — sourced from trusted farming
            families, processed under strict hygienic practices, and delivered to homes,
            restaurants and bulk buyers across Nigeria.
          </p>

          <div className="hero__actions">
            <Link to="/products" className="btn btn--gold btn--lg">
              <Icon name="cart" size={18} /> Shop Products
            </Link>
            <a
              className="btn btn--whatsapp btn--lg"
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} /> Order on WhatsApp
            </a>
            <Link to="/quality-standards" className="btn btn--outline-light btn--lg">
              Our Quality Standards
            </Link>
          </div>

          <ul className="hero__trust">
            <li>
              <Icon name="check" size={17} /> 100% pure — no additives
            </li>
            <li>
              <Icon name="shield" size={17} /> Hygienically processed (GHP)
            </li>
            <li>
              <Icon name="truck" size={17} /> Nationwide delivery
            </li>
            <li>
              <Icon name="certificate" size={17} /> Export-ready standards
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <h3>
              <Icon name="chart" size={18} style={{ display: 'inline', verticalAlign: '-3px' }} />{' '}
              This Season at Oke Ogun
            </h3>
            <ul className="hero__card-list">
              <li>
                <span>Elubo (Yam Flour) · 5 litres</span>
                <strong>₦15,000</strong>
              </li>
              <li>
                <span>Fresh Yam · medium tuber (4–6kg)</span>
                <strong>₦8,000</strong>
              </li>
              <li>
                <span>Garri · 5 litres</span>
                <strong>₦11,000</strong>
              </li>
              <li>
                <span>Maize · 25kg bag</span>
                <strong>₦35,000</strong>
              </li>
            </ul>
          </div>

          <div className="hero__badge-float">
            <span className="card__icon card__icon--gold">
              <Icon name="calendar" size={20} />
            </span>
            <p>
              <strong>Fresh yam peak season</strong>
              July – December · book bulk orders early
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
