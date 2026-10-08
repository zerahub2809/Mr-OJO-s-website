import { Link } from 'react-router-dom';

import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Icon from '../components/ui/Icon.jsx';
import CTABand from '../components/shared/CTABand.jsx';

const sources = [
  {
    place: 'Saki',
    text: 'Our home base. Deep red laterite soils and generational yam farmers supply the bulk of our fresh yam and the white yam used for elubo.',
    icon: 'farm',
  },
  {
    place: 'Oje Owode',
    text: 'A trusted wet-market corridor where we consolidate graded tubers and grains directly from smallholder cooperatives.',
    icon: 'handshake',
  },
  {
    place: 'Wider Oke Ogun',
    text: 'Communities across Oyo State’s 10 local government areas supplement our maize, garri and sesame supply through the year.',
    icon: 'pin',
  },
];

const standards = [
  { icon: 'clipboard', title: 'NAFDAC-Oriented Practices', text: 'Labelling, packaging and hygiene aligned with NAFDAC requirements for processed foods.' },
  { icon: 'shield', title: 'Good Hygienic Practices (GHP)', text: 'Clean surfaces, protected drying, PPE and documented handling at every stage.' },
  { icon: 'sparkle', title: 'Clean, Moisture-Controlled Processing', text: 'Drying targets moisture levels that prevent mould and extend natural shelf life.' },
];

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="The story of Iya Sade Oke Ogun Heritage — our heritage, our source in Saki, Oje Owode and Oke Ogun, and our commitment to quality and global food standards."
      />

      <PageHero
        eyebrow="About Us"
        title="Heritage, honesty and high standards in every batch"
        lead="From a family kitchen in Oke Ogun to homes, restaurants and bulk buyers across Nigeria — this is the story of how we farm, process and deliver."
        crumbLabel="About Us"
      />

      {/* Our Story */}
      <section className="section" id="story">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>The Iya Sade Heritage</h2>
            <p className="lead">
              The name Iya Sade carries the warmth of a mother who feeds her family well. What
              began as small batches of elubo prepared for neighbours in Saki has grown into a
              heritage brand trusted for consistency, cleanliness and authentic taste.
            </p>
            <p>
              We stayed small in one important way: we never moved sourcing far from home.
              Every sack of yam, every basket of maize and every fry of garri still comes from
              people we know by name in Oke Ogun. What changed is the standard around them —
              raised-tray drying, double sieving, moisture checks, sealed packaging and batch
              coding so any pack you buy can be traced back to its week of production.
            </p>
            <p>
              Today we serve households, restaurants, schools, religious institutions and
              wholesale buyers — locally and for the diaspora — with the same promise: pure
              produce, honestly weighed, professionally handled.
            </p>
            <Link to="/gallery" className="btn btn--outline">
              See Our Story in Pictures <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="split__media" style={{ background: 'linear-gradient(150deg, #d4a017, #5d4037)' }}>
            <div className="split__media-caption">
              <strong>“Feed people the way nature intended.”</strong>
              <span>The founding principle of Iya Sade Oke Ogun Heritage.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Source */}
      <section className="section section--white" id="source">
        <div className="container">
          <SectionHeading
            eyebrow="Our Source"
            title="Saki, Oje Owode & Oke Ogun"
            subtitle="Proximity to our farms is our quality advantage. Short hauls mean fresher tubers, faster processing and full visibility over how produce is handled."
          />
          <div className="grid grid--3">
            {sources.map((item) => (
              <div className="card" key={item.place}>
                <span className="card__icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3>{item.place}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Quality & Global Standards summary */}
      <section className="section section--green" id="standards">
        <div className="container split split--reverse">
          <div
            className="split__media"
            style={{
              background: 'linear-gradient(150deg, #103f14, #0b2e0e)',
              border: '1px solid rgba(245,215,110,.3)',
            }}
          >
            <div className="split__media-caption">
              <strong>Quality &amp; Global Standards</strong>
              <span>Local compliance today, export readiness tomorrow.</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Quality &amp; Global Standards</span>
            <h2>Built to Nigerian standards, benchmarked globally</h2>
            <p className="lead">
              We treat food safety as a promise to the family eating our product — not a
              checkbox. Our processes follow Nigerian regulations today and are structured
              around international frameworks so that export readiness is a step, not a leap.
            </p>
            <ul className="feature-list">
              {standards.map((item) => (
                <li key={item.title}>
                  <Icon name="check" size={18} />
                  <span>
                    <strong>{item.title}</strong> — {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/quality-standards" className="btn btn--gold">
              View Full Standards Page <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Experience the heritage yourself"
        text="Order a pack of our sun-dried elubo or fresh graded yam today and taste the difference honest sourcing makes."
      />
    </>
  );
}
