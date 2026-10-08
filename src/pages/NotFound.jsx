import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta.jsx';
import Icon from '../components/ui/Icon.jsx';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you requested could not be found." />
      <section className="page-hero">
        <div className="container center">
          <span className="eyebrow">404</span>
          <h1 style={{ marginInline: 'auto' }}>This path leads back to the farm</h1>
          <p className="lead" style={{ marginInline: 'auto' }}>
            The page you are looking for doesn’t exist or has moved. Head back home or browse
            our products.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 26 }}>
            <Link to="/" className="btn btn--gold">
              Back to Home
            </Link>
            <Link to="/products" className="btn btn--outline-light">
              Shop Products <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
