import { Link } from 'react-router-dom';
import {
  BRAND,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  ADDRESS,
  BUSINESS_HOURS,
} from '../../data/site.js';
import Icon from '../ui/Icon.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <span className="footer__brand-name">{BRAND.name}</span>
            <p>
              A heritage-driven supplier of premium Elubo, fresh yam, garri and maize —
              sourced from Saki, Oje Owode and communities across Oke Ogun, processed under
              strict hygienic practices.
            </p>
            <div className="footer__badges">
              <span className="footer__badge">NAFDAC-Oriented Standards</span>
              <span className="footer__badge">GHP Processed</span>
              <span className="footer__badge">No Additives</span>
              <span className="footer__badge">HACCP Principles</span>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Shop / Products</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/delivery-pricing">Delivery &amp; Pricing</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4>Standards</h4>
            <ul>
              <li><Link to="/quality-standards">Quality &amp; Global Standards</Link></li>
              <li><Link to="/quality-standards#nigerian">NAFDAC &amp; GHP Compliance</Link></li>
              <li><Link to="/quality-standards#global">ISO 22000 &amp; HACCP Readiness</Link></li>
              <li><Link to="/demand-insights">Seasonal Availability</Link></li>
              <li><Link to="/demand-insights#bulk">Bulk Order Forecasting</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="footer__contact-item">
              <Icon name="phone" size={16} />
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </div>
            <div className="footer__contact-item">
              <Icon name="mail" size={16} />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="footer__contact-item">
              <Icon name="pin" size={16} />
              <span>{ADDRESS}</span>
            </div>
            <div className="footer__contact-item">
              <Icon name="clock" size={16} />
              <span>{BUSINESS_HOURS}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {BRAND.name}. All rights reserved.
          </span>
          <span>
            Your order details are used only to fulfil your enquiry — never sold or shared.
            By submitting a form you consent to us contacting you about your order.
          </span>
          <span className="footer__credit">
            Designed by <strong>Zera-Hub</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
