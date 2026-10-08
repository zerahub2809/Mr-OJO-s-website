import { Link } from 'react-router-dom';

import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Icon from '../components/ui/Icon.jsx';
import CTABand from '../components/shared/CTABand.jsx';

const steps = [
  {
    icon: 'search',
    title: 'Choose your products',
    text: 'Browse the catalogue for sizes and prices — 1L cups, 5L buckets, 25kg and 50kg bags. Note the exact product, size and quantity you need.',
  },
  {
    icon: 'chat',
    title: 'Send your order on WhatsApp',
    text: 'Tap any “Order on WhatsApp” button. Your message arrives pre-filled with the product and price, so you only add quantity and delivery location.',
  },
  {
    icon: 'clipboard',
    title: 'Confirm stock, price & lead time',
    text: 'We reply with current stock, final price, delivery fee and dispatch date. Festive and bulk orders get a written schedule.',
  },
  {
    icon: 'money',
    title: 'Pay securely',
    text: 'Pay by bank transfer to the account confirmed in our chat. You receive a payment confirmation before your order is released.',
  },
  {
    icon: 'truck',
    title: 'Dispatch & delivery',
    text: 'Orders are sealed, labelled and dispatched — same day within Oke Ogun, 1–3 days to Ibadan and Lagos, nationwide via trusted carriers.',
  },
  {
    icon: 'star',
    title: 'Receive, inspect & enjoy',
    text: 'Check your packaging seal and batch code on arrival. Not satisfied? Report within 24 hours and we make it right.',
  },
];

const faqs = [
  {
    q: 'Do I need an account to order?',
    a: 'No. Ordering happens directly on WhatsApp or through the contact form — no registration, no checkout pages.',
  },
  {
    q: 'Can I order outside Nigeria?',
    a: 'Yes — diaspora customers can arrange orders for family members in Nigeria, and we are building export channels for international bulk deliveries. Contact us for current options.',
  },
  {
    q: 'What if an item is out of season?',
    a: 'We will show you the nearest available alternative and the expected date for your item — for example, fresh yam availability peaks from July to December.',
  },
  {
    q: 'Do you offer consignment or credit terms?',
    a: 'Established wholesale customers with order history can request a payment schedule. Mention it in your enquiry and we will review it.',
  },
];

export default function HowItWorks() {
  return (
    <>
      <PageMeta
        title="How It Works"
        description="How to order from Iya Sade Oke Ogun Heritage — choose products, order on WhatsApp, confirm your quote, pay and receive delivery nationwide."
      />

      <PageHero
        eyebrow="How It Works"
        title="Six simple steps from tap to table"
        lead="No accounts, no complicated checkout. A clear WhatsApp conversation, a written quote and a sealed, labelled delivery."
        crumbLabel="How It Works"
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="The Process"
            title="How ordering works"
            subtitle="Every order follows the same transparent path — so you always know what you are paying for and when it will arrive."
          />
          <div className="steps steps--4">
            {steps.slice(0, 4).map((step) => (
              <div className="step" key={step.title}>
                <span className="step__icon">
                  <Icon name={step.icon} size={22} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="steps steps--4" style={{ marginTop: 22 }}>
            {steps.slice(4).map((step) => (
              <div className="step" key={step.title}>
                <span className="step__icon">
                  <Icon name={step.icon} size={22} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
            <div className="step" style={{ background: 'var(--cream)' }}>
              <span className="step__icon" style={{ background: 'var(--green)', color: 'var(--soft-gold)' }}>
                <Icon name="repeat" size={22} />
              </span>
              <h3>Reorder anytime</h3>
              <p>Send “same as last time” on WhatsApp — repeat orders take under a minute.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
          />
          <div className="grid grid--2">
            {faqs.map((faq) => (
              <div className="card" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn--primary">
              Ask a Question <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Start your first order"
        text="Send us a message now — we will confirm stock, price and delivery for your location within minutes during business hours."
      />
    </>
  );
}
