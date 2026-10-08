import { Link } from 'react-router-dom';

/** Hero banner shared by inner pages. */
export default function PageHero({ eyebrow, title, lead, crumbLabel, crumbFrom }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          {crumbFrom && (
            <>
              <Link to={crumbFrom.to}>{crumbFrom.label}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span>{crumbLabel}</span>
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
