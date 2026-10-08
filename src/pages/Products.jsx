import { Link } from 'react-router-dom';

import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import ProductCard from '../components/ui/ProductCard.jsx';
import Icon from '../components/ui/Icon.jsx';
import BulkOrderForm from '../components/forms/BulkOrderForm.jsx';
import CTABand from '../components/shared/CTABand.jsx';

import { products } from '../data/products.js';

const bulkBenefits = [
  'Volume pricing from 10 bags / 100kg upwards',
  'Reserved sourcing capacity before festive peaks',
  'Moisture-tested, batch-coded packaging for storage',
  'Flexible delivery schedule — weekly, monthly or quarterly',
];

export default function Products() {
  return (
    <>
      <PageMeta
        title="Shop / Products"
        description="Buy Elubo (yam flour), fresh yam, garri, maize and other Oke Ogun staples with transparent sizes and prices. Bulk and wholesale enquiries welcome."
      />

      <PageHero
        eyebrow="Shop / Products"
        title="Farm-fresh produce, professionally packed"
        lead="Clear sizes, transparent naira pricing and honest weights. Every product below is available for retail orders and bulk/wholesale supply."
        crumbLabel="Shop / Products"
      />

      {/* Catalogue */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="Catalogue"
            title="Our products"
            subtitle="Tap any product to jump to it, then order directly on WhatsApp — your message is pre-filled with the product and starting price."
          />

          <div className="btn-row" style={{ marginBottom: 34 }}>
            {products.map((product) => (
              <a key={product.id} href={`#${product.id}`} className="btn btn--outline btn--sm">
                {product.nav}
              </a>
            ))}
            <a href="#bulk" className="btn btn--gold btn--sm">
              Bulk / Wholesale
            </a>
          </div>

          <div className="grid grid--4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="form-note" style={{ marginTop: 30 }}>
            <Icon name="info" size={17} />
            <span>
              Prices are indicative for Phase 1 and may vary with season, size and delivery
              location. Confirm today’s price on WhatsApp before payment — we reply with a
              written quote every time.
            </span>
          </div>
        </div>
      </section>

      {/* Bulk / Wholesale */}
      <section className="section" id="bulk">
        <div className="container">
          <SectionHeading
            eyebrow="Bulk / Wholesale"
            title="Supply built for businesses"
            subtitle="Restaurants, supermarkets, schools, faith organisations and diaspora groups — tell us your monthly or quarterly need and we will reserve the supply ahead of season."
          />

          <div className="split">
            <div>
              <h3>Why buy in bulk from Iya Sade?</h3>
              <ul className="feature-list">
                {bulkBenefits.map((benefit) => (
                  <li key={benefit}>
                    <Icon name="check" size={18} /> {benefit}
                  </li>
                ))}
              </ul>
              <div className="btn-row">
                <Link to="/demand-insights" className="btn btn--outline">
                  See Seasonal Availability <Icon name="arrow" size={17} />
                </Link>
                <Link to="/delivery-pricing" className="btn btn--outline">
                  Delivery &amp; Pricing
                </Link>
              </div>
            </div>

            <div
              className="split__media"
              style={{ background: 'linear-gradient(150deg, #1b5e20, #43302a)' }}
            >
              <div className="split__media-caption">
                <strong>Early booking = guaranteed stock</strong>
                <span>
                  Lock your December and Easter supply by November and January respectively —
                  bulk orders are processed first.
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 44 }}>
            <BulkOrderForm />
          </div>
        </div>
      </section>

      <CTABand
        title="Need a price list for your business?"
        text="Send us your product list and monthly volumes — we respond with a written wholesale quote within one working day."
        secondary={{ label: 'How ordering works', to: '/how-it-works' }}
      />
    </>
  );
}
