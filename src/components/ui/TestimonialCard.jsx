import Icon from './Icon.jsx';

/** Testimonial card with stars, quote and author. */
export default function TestimonialCard({ item }) {
  return (
    <article className="testimonial">
      <div className="testimonial__quote" aria-hidden="true">
        “
      </div>
      <div className="testimonial__stars" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="testimonial__text">{item.text}</p>
      <div className="testimonial__author">
        <span className="testimonial__avatar" style={{ background: item.color }}>
          {item.initials}
        </span>
        <span>
          <span className="testimonial__name">{item.name}</span>
          <br />
          <span className="testimonial__role">{item.role}</span>
        </span>
        <span style={{ marginLeft: 'auto', color: 'var(--leaf)' }} aria-hidden="true">
          <Icon name="check" size={18} />
        </span>
      </div>
    </article>
  );
}
