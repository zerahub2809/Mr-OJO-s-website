import { waLink, DEFAULT_WA_MESSAGE } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';

/** Floating WhatsApp button — PRD Phase 1 must-have. */
export default function WhatsAppFab() {
  return (
    <a
      className="fab-whatsapp"
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="whatsapp" />
      <span>Order on WhatsApp</span>
    </a>
  );
}
