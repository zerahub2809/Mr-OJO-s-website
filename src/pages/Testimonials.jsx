import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import TestimonialCard from '../components/ui/TestimonialCard.jsx';
import Icon from '../components/ui/Icon.jsx';
import CTABand from '../components/shared/CTABand.jsx';
import { testimonials } from '../data/testimonials.js';

const trustSignals = [
  { icon: 'sparkle', label: 'Quality mentioned in 9 of 10 reviews' },
  { icon: 'repeat', label: 'Majority of buyers are repeat customers' },
  { icon: 'users', label: 'Homes, restaurants, schools & wholesalers' },
];

export default function Testimonials() {
  return (
    <>
      <PageMeta
        title="Testimonials"
        description="What customers say about Iya Sade Oke Ogun Heritage — reviews highlighting quality, hygiene, consistency and reliable delivery."
      />

      <PageHero
        eyebrow="Testimonials"
        title="Trust, earned one delivery at a time"
        lead="Real feedback from the households, restaurants and bulk buyers who buy from us again and again."
        crumbLabel="Testimonials"
      />

      <section className="section section--white">
        <div className="container">
          <div className="grid grid--3" style={{ marginBottom: 44 }}>
            {trustSignals.map((signal) => (
              <div className="trust-item" key={signal.label} style={{ justifyContent: 'center' }}>
                <span className="trust-item__icon">
                  <Icon name={signal.icon} size={22} />
                </span>
                <strong>{signal.label}</strong>
              </div>
            ))}
          </div>

          <SectionHeading
            center
            eyebrow="Customer Voices"
            title="What people say about our quality & standards"
          />

          <div className="grid grid--3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Join our happy customers"
        text="Place your first order today — we are confident you will come back for the taste, the cleanliness and the consistency."
      />
    </>
  );
}
