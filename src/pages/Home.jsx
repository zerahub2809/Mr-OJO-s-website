import { Link } from 'react-router-dom';

import PageMeta from '../components/ui/PageMeta.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import ProductCard from '../components/ui/ProductCard.jsx';
import TestimonialCard from '../components/ui/TestimonialCard.jsx';
import Icon from '../components/ui/Icon.jsx';
import Hero from '../components/home/Hero.jsx';
import TrustStrip from '../components/home/TrustStrip.jsx';
import CTABand from '../components/shared/CTABand.jsx';
import SeasonalCalendar from '../components/demand/SeasonalCalendar.jsx';

import { products } from '../data/products.js';
import { testimonials } from '../data/testimonials.js';

const qualityPillars = [
  {
    icon: 'leaf',
    title: '100% Pure Yam',
    text: 'Single-ingredient elubo milled from whole white yam — nothing else in the pack.',
  },
  {
    icon: 'shield',
    title: 'No Additives',
    text: 'Zero preservatives, colourants or bleaching agents. Just clean, natural produce.',
  },
  {
    icon: 'sparkle',
    title: 'Hygienically Processed',
    text: 'Raised-tray drying, clean milling and sealed packing under Good Hygienic Practices.',
  },
];

const steps = [
  {
    icon: 'search',
    title: 'Choose your products',
    text: 'Browse sizes and prices, then note exactly what you need.',
  },
  {
    icon: 'chat',
    title: 'Send your order',
    text: 'Tap any WhatsApp button — your selection is pre-filled for you.',
  },
  {
    icon: 'handshake',
    title: 'Confirm & pay',
    text: 'We confirm stock, delivery fee and lead time before you pay by transfer.',
  },
  {
    icon: 'truck',
    title: 'Delivered fresh',
    text: 'Your order is dispatched sealed, labelled and batch-coded to your door.',
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title=""
        description="Iya Sade Oke Ogun Heritage — premium Elubo (yam flour), fresh yam, garri and maize sourced from Saki, Oje Owode and Oke Ogun. Hygienically processed, nationwide delivery, order on WhatsApp."
      />

      <Hero />
      <TrustStrip />

      {/* Featured products */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="Shop / Products"
            title="Oke Ogun staples, packed to perfection"
            subtitle="Every batch is sorted, dried and packaged under strict hygiene controls — with clear sizes and transparent pricing so you always know what you are paying for."
          />
          <div className="grid grid--4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/products" className="btn btn--primary">
              View Full Catalogue &amp; Bulk Pricing <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage / About preview */}
      <section className="section">
        <div className="container split">
          <div className="split__media" style={{ background: 'linear-gradient(150deg, #2e7d32, #0b2e0e)' }}>
            <div className="watermark" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(245,215,110,.35), transparent 60%)' }} />
            <div className="split__media-caption">
              <strong>Saki · Oje Owode · Oke Ogun</strong>
              <span>Where our produce is grown, harvested and prepared with care.</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>A heritage of honest farming, carried forward</h2>
            <p className="lead">
              Iya Sade Oke Ogun Heritage grew from a simple belief: the best farm produce in
              Nigeria should reach your table exactly the way nature intended it — clean, pure
              and full of flavour.
            </p>
            <ul className="feature-list">
              <li>
                <Icon name="check" size={18} /> Direct sourcing from farming families in Saki,
                Oje Owode and across Oke Ogun
              </li>
              <li>
                <Icon name="check" size={18} /> Traditional knowledge combined with modern
                hygiene and food-safety standards
              </li>
              <li>
                <Icon name="check" size={18} /> Transparent pricing, honest weights and
                traceable batches
              </li>
            </ul>
            <div className="btn-row">
              <Link to="/about" className="btn btn--primary">
                Read Our Story
              </Link>
              <Link to="/gallery" className="btn btn--outline">
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Quality & standards preview */}
      <section className="section section--green">
        <div className="container">
          <SectionHeading
            eyebrow="Quality & Global Standards"
            title="Standards you can taste, trust and verify"
            subtitle="We follow global best practices in food safety and quality — from NAFDAC-aligned packaging and GHP handling to HACCP principles and ISO 22000 readiness."
          />
          <div className="grid grid--3">
            {qualityPillars.map((pillar) => (
              <div className="pillar" key={pillar.title}>
                <span className="pillar__icon">
                  <Icon name={pillar.icon} size={28} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/quality-standards" className="btn btn--gold">
              Explore Our Quality Commitments <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal availability preview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Demand Insights"
            title="Seasonal availability at a glance"
            subtitle="Know exactly when each crop is at peak quality and when to book ahead. Our seasonal calendar keeps retail shoppers and bulk buyers ahead of stockouts."
          />
          <SeasonalCalendar />
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/demand-insights" className="btn btn--primary">
              Lead Times &amp; Bulk Forecasting <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading
            center
            eyebrow="How It Works"
            title="Ordering from us takes four easy steps"
            subtitle="No accounts, no complicated checkout — just a clear message on WhatsApp and a confirmed delivery."
          />
          <div className="steps steps--4">
            {steps.map((step) => (
              <div className="step" key={step.title}>
                <span className="step__icon">
                  <Icon name={step.icon} size={22} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/how-it-works" className="btn btn--outline">
              See the Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Testimonials"
            title="Trusted by homes, restaurants and bulk buyers"
            subtitle="What customers say about our quality, consistency and standards."
          />
          <div className="grid grid--3">
            {testimonials.slice(0, 3).map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/testimonials" className="btn btn--primary">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      <CTABand />

    </>
  );
}
