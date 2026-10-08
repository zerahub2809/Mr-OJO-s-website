import { Link } from 'react-router-dom';

import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Icon from '../components/ui/Icon.jsx';
import ProcessFlow from '../components/quality/ProcessFlow.jsx';
import CTABand from '../components/shared/CTABand.jsx';

const pillars = [
  {
    icon: 'leaf',
    title: '100% Pure Yam',
    text: 'Our elubo is milled from whole white yam only — one ingredient, nothing else.',
  },
  {
    icon: 'shield',
    title: 'No Additives',
    text: 'No preservatives, no colourants, no bleaching agents in any product we sell.',
  },
  {
    icon: 'sparkle',
    title: 'Hygienically Processed',
    text: 'Raised trays, clean milling rooms, protected packing and documented GHP handling.',
  },
];

const nigerianStandards = [
  {
    title: 'NAFDAC Compliance',
    text: 'Processed products such as elubo are packed and labelled to NAFDAC requirements — product name, batch code, production and expiry dates, net content and producer details on every pack.',
    icon: 'clipboard',
  },
  {
    title: 'Good Hygienic Practices (GHP)',
    text: 'Cleanable surfaces, potable water, protective clothing, pest control and scheduled sanitation across the sourcing, drying, milling and packing areas.',
    icon: 'shield',
  },
  {
    title: 'Packaging & Labelling Standards',
    text: 'Food-grade, moisture-barrier packaging that is sealed, tamper-evident and legibly labelled for retail shelves and wholesale depots alike.',
    icon: 'package',
  },
];

const globalStandards = [
  {
    title: 'HACCP Principles',
    text: 'Hazard analysis at critical control points — biological, chemical and physical hazards identified and monitored through drying moisture, metal detection and foreign-body control.',
    icon: 'search',
  },
  {
    title: 'ISO 22000 Readiness',
    text: 'Our procedures, records and traceability system are being aligned to ISO 22000 Food Safety Management requirements as we prepare for certification.',
    icon: 'certificate',
  },
  {
    title: 'Codex Alimentarius Guidelines',
    text: 'Product specifications, contaminant limits and labelling follow Codex Alimentarius international food standards.',
    icon: 'book',
  },
  {
    title: 'Export Readiness',
    text: 'Phytosanitary inspection, Certificate of Origin, fumigation and packing-house records prepared for cross-border and diaspora shipments.',
    icon: 'globe',
  },
];

export default function QualityStandards() {
  return (
    <>
      <PageMeta
        title="Quality & Global Standards"
        description="NAFDAC compliance, Good Hygienic Practices, HACCP principles, ISO 22000 readiness, Codex Alimentarius guidelines and export readiness at Iya Sade Oke Ogun Heritage."
      />

      <PageHero
        eyebrow="Quality & Standards"
        title="Quality & Global Standards"
        lead="We follow global best practices in food safety and quality — from our farms in Saki and Oje Owode to the sealed pack in your kitchen."
        crumbLabel="Quality & Global Standards"
      />

      {/* Icon pillars */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Promise"
            title="Three guarantees on every pack"
          />
          <div className="grid grid--3">
            {pillars.map((pillar) => (
              <div className="pillar" key={pillar.title}>
                <span className="pillar__icon">
                  <Icon name={pillar.icon} size={28} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process flowchart */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Process Flow"
            title="From sourcing to packaging"
            subtitle="Five controlled stages with a quality checkpoint at each one."
          />
          <ProcessFlow />
        </div>
      </section>
      {/* Nigerian standards */}
      <section className="section section--white" id="nigerian">
        <div className="container">
          <SectionHeading
            eyebrow="Nigerian Standards"
            title="Compliance that starts at home"
            subtitle="We hold ourselves to the regulations that govern food production and sale in Nigeria."
          />
          <div className="grid grid--3">
            {nigerianStandards.map((item) => (
              <div className="card" key={item.title}>
                <span className="card__icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International / global standards aspiration */}
      <section className="section section--green" id="global">
        <div className="container">
          <SectionHeading
            eyebrow="International / Global Standards"
            title="Benchmarked against the world’s food-safety frameworks"
            subtitle="Our aspiration is clear: to be export-ready on paper and in practice, so a buyer in Lagos and a buyer abroad receive the same standard."
          />
          <div className="grid grid--4">
            {globalStandards.map((item) => (
              <div className="pillar" key={item.title}>
                <span className="pillar__icon">
                  <Icon name={item.icon} size={26} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="feature-list" style={{ marginTop: 34 }}>
            <li>
              <Icon name="check" size={18} /> Clean, moisture-controlled, additive-free
              processing at every stage
            </li>
            <li>
              <Icon name="check" size={18} /> Batch traceability from farm source to sealed
              package
            </li>
            <li>
              <Icon name="check" size={18} /> Export documentation readiness — Phytosanitary
              Certificate, Certificate of Origin, fumigation and packing records
            </li>
          </ul>
        </div>
      </section>

      {/* Commitment statement */}
      <section className="section">
        <div className="container">
          <div className="commitment">
            <blockquote>
              “We follow global best practices in food safety and quality — because every pack
              that carries our name feeds a real family.”
            </blockquote>
            <cite>Iya Sade Oke Ogun Heritage · Quality Commitment</cite>
          </div>

          <div className="center" style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn--primary">
              Request Our Quality Checklist <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Order with confidence"
        text="Every order ships sealed, labelled and batch-coded. Ask us for the batch details of your pack — we share them gladly."
        secondary={{ label: 'See seasonal availability', to: '/demand-insights' }}
      />
    </>
  );
}
