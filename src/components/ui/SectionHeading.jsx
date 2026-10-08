/** Reusable section heading: eyebrow + title + optional subtitle. */
export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`section-heading${center ? ' center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  );
}
