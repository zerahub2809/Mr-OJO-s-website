import PageMeta from '../components/ui/PageMeta.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Icon from '../components/ui/Icon.jsx';
import CTABand from '../components/shared/CTABand.jsx';
import { galleryItems } from '../data/gallery.js';

export default function Gallery() {
  return (
    <>
      <PageMeta
        title="Gallery"
        description="Visual tour of the Iya Sade process — sourcing at Saki, sorting, sun drying, milling, hygienic packaging and nationwide delivery."
      />

      <PageHero
        eyebrow="Gallery"
        title="Our process, from farm to table"
        lead="A look at where our produce comes from and the care that goes into every stage — the same steps you’ll see documented for every batch."
        crumbLabel="Gallery"
      />

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Behind The Pack"
            title="Sourcing · Processing · Delivery"
            subtitle="Each scene below reflects a real stage of our supply chain in Oke Ogun."
          />

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                className={`gallery-item${item.tall ? ' gallery-item--tall' : ''}`}
                style={{ background: item.gradient }}
              >
                <span className="gallery-item__icon">
                  <Icon name={item.icon} size={34} />
                </span>
                <div className="gallery-item__body">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="See it for yourself"
        text="Ask for live photos or a video walkthrough of any batch before you order — transparency is part of the product."
        secondary={{ label: 'Read our quality standards', to: '/quality-standards' }}
      />
    </>
  );
}
