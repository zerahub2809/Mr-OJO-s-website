/**
 * Central site configuration.
 * IMPORTANT: Replace WHATSAPP_NUMBER / PHONE_DISPLAY / EMAIL / ADDRESS
 * with the real business details before going live.
 */
export const BRAND = {
  name: 'Iya Sade Oke Ogun Heritage',
  shortName: 'Iya Sade',
  tagline: 'Heritage Taste from the Heart of Oke Ogun',
  promise: 'Premium farm produce sourced from Saki, Oje Owode and across Oke Ogun.',
};

/* WhatsApp number in international format, digits only (no + or spaces). */
export const WHATSAPP_NUMBER = '2348030000000';
export const PHONE_DISPLAY = '+234 803 000 0000';
export const PHONE_TEL = '+2348030000000';
export const EMAIL = 'orders@iyasadeokeogunheritage.com';
export const ADDRESS = 'Saki, Oyo State, Nigeria';
export const BUSINESS_HOURS = 'Mon – Sat: 8:00am – 6:00pm (WAT)';

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const DEFAULT_WA_MESSAGE =
  'Hello Iya Sade Oke Ogun Heritage! I would like to place an order / make an enquiry.';

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Shop / Products' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/delivery-pricing', label: 'Delivery & Pricing' },
  { to: '/quality-standards', label: 'Quality & Standards' },
  { to: '/demand-insights', label: 'Demand Insights' },
];

export const NAV_MORE_LINKS = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
];

export const NAV_MOBILE_LINKS = [
  ...NAV_LINKS,
  ...NAV_MORE_LINKS,
  { to: '/contact', label: 'Contact / Order' },
];
