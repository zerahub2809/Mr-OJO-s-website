import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Icon from '../components/ui/Icon.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';

import {
  waLink,
  DEFAULT_WA_MESSAGE,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  ADDRESS,
  BUSINESS_HOURS,
} from '../data/site.js';

const channels = [
  {
    icon: 'whatsapp',
    title: 'WhatsApp (fastest)',
    value: PHONE_DISPLAY,
    href: waLink(DEFAULT_WA_MESSAGE),
    external: true,
    note: 'Order confirmations, photos and delivery updates',
  },
  {
    icon: 'phone',
    title: 'Call us',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    note: 'For urgent and same-day orders',
  },
  {
    icon: 'mail',
    title: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    note: 'Quotes, partnerships and documentation requests',
  },
  {
    icon: 'pin',
    title: 'Our location',
    value: ADDRESS,
    href: null,
    note: 'Farm sourcing across Saki, Oje Owode & Oke Ogun',
  },
];

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact / Order"
        description="Contact Iya Sade Oke Ogun Heritage — WhatsApp, phone, email and an order form for Elubo, fresh yam, garri, maize and bulk enquiries."
      />

      <PageHero
        eyebrow="Contact / Order"
        title="Let’s get your order started"
        lead="Message us on WhatsApp, call directly, or fill the form — we respond within one working day, usually much faster."
        crumbLabel="Contact / Order"
      />

      <section className="section section--white">
        <div className="container split">
          <div>
            <span className="eyebrow">Reach Us</span>
            <h2>Every channel, one team</h2>
            <p className="lead">
              Whether you are buying one bucket of elubo or forecasting 50 bags a month, the
              same team handles your order with the same care.
            </p>

            <div className="grid" style={{ gridTemplateColumns: '1fr', gap: 16 }}>
              {channels.map((channel) => {
                const body = (
                  <>
                    <span className="card__icon" style={{ marginBottom: 0, width: 44, height: 44 }}>
                      <Icon name={channel.icon} size={20} />
                    </span>
                    <span>
                      <strong style={{ display: 'block', color: 'var(--green-deep)' }}>
                        {channel.title}
                      </strong>
                      <span style={{ fontSize: '0.92rem' }}>{channel.value}</span>
                      <br />
                      <span style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
                        {channel.note}
                      </span>
                    </span>
                  </>
                );

                return channel.href ? (
                  <a
                    key={channel.title}
                    className="card"
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noopener noreferrer' : undefined}
                    style={{ display: 'flex', gap: 16, alignItems: 'center', textDecoration: 'none' }}
                  >
                    {body}
                  </a>
                ) : (
                  <div
                    key={channel.title}
                    className="card"
                    style={{ display: 'flex', gap: 16, alignItems: 'center' }}
                  >
                    {body}
                  </div>
                );
              })}
            </div>

            <div className="form-note">
              <Icon name="clock" size={17} />
              <span>
                <strong>Business hours:</strong> {BUSINESS_HOURS}. WhatsApp messages sent
                outside these hours are answered first thing the next working day.
              </span>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Order Form"
              title="Send us your order or enquiry"
              subtitle="Fill the form and your message opens in WhatsApp, pre-written — nothing is lost and no account is needed."
            />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
