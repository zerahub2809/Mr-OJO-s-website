import { Link } from 'react-router-dom';
import { formatNaira } from '../../data/products.js';
import { waLink } from '../../data/site.js';
import Icon from './Icon.jsx';

/**
 * Product card with sizes, prices, status badges (High Demand / Limited Stock)
 * and a WhatsApp order button.
 */
export default function ProductCard({ product }) {
  const firstSize = product.sizes[0];
  const orderMessage =
    `Hello Iya Sade Oke Ogun Heritage! I would like to order *${product.name}*\n` +
    `(${firstSize.label} — ${formatNaira(firstSize.price)}).\n` +
    `Please confirm availability and delivery details.`;

  return (
    <article className="product-card" id={product.id}>
      <div className="product-card__media" style={{ background: product.gradient }}>
        <Icon name={product.icon} size={72} />
        <div className="product-card__badges">
          {product.badges.map((badge) => (
            <span key={badge.label} className={`badge badge--${badge.type}`}>
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <ul className="size-list">
          {product.sizes.map((size) => (
            <li key={size.label}>
              <span>{size.label}</span>
              <strong>{formatNaira(size.price)}</strong>
            </li>
          ))}
        </ul>

        <div className="product-card__actions">
          <a
            className="btn btn--whatsapp btn--block"
            href={waLink(orderMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={17} /> Order on WhatsApp
          </a>
          <Link to="/contact" className="btn btn--outline btn--block btn--sm">
            Enquire / Request Bulk Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
