import { Link } from 'react-router-dom';
import { waLink, DEFAULT_WA_MESSAGE } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';

/** Gold call-to-action band used across pages. */
export default function CTABand({
  title = 'Ready to order?',
  text = 'Send us a message on WhatsApp with the product, size and quantity you need — we confirm price, stock and delivery within minutes during business hours.',
  primary = { label: 'Order on WhatsApp', to: null },
  secondary = { label: 'Contact / Order Form', to: '/contact' },
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-row">
          <a
            className="btn btn--primary btn--lg"
            href={primary.to || waLink(DEFAULT_WA_MESSAGE)}
            target={primary.to ? undefined : '_blank'}
            rel={primary.to ? undefined : 'noopener noreferrer'}
          >
            <Icon name="whatsapp" size={18} /> {primary.label}
          </a>
          {secondary && (
            <Link to={secondary.to} className="btn btn--outline btn--lg">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
