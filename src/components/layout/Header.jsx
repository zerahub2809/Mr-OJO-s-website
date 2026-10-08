import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, NAV_MORE_LINKS, NAV_MOBILE_LINKS, waLink, DEFAULT_WA_MESSAGE } from '../../data/site.js';
import Icon from '../ui/Icon.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isMoreActive = NAV_MORE_LINKS.some((l) => location.pathname === l.to);
  const contactActive = location.pathname === '/contact';

  return (
    <header className="header">
      <div className="container header__bar">
        <Link to="/" className="brand" aria-label="Iya Sade Oke Ogun Heritage — home">
          <span className="brand__mark" aria-hidden="true">IS</span>
          <span className="brand__text">
            <span className="brand__name">Iya Sade Oke Ogun</span>
            <span className="brand__tag">Heritage</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="nav__group">
            <span
              className={`nav__link nav__link--more${isMoreActive ? ' is-active' : ''}`}
              tabIndex={0}
              role="button"
              aria-haspopup="true"
            >
              Explore <span className="nav__caret">▼</span>
            </span>
            <div className="nav__dropdown">
              {NAV_MORE_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="header__actions">
          <Link to="/contact" className={`btn btn--sm ${contactActive ? 'btn--gold' : 'btn--primary'}`}>
            Contact / Order
          </Link>
          <a
            className="btn btn--sm btn--whatsapp"
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
          >
            <Icon name="whatsapp" size={17} />
          </a>
          <button
            type="button"
            className={`hamburger${open ? ' is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {NAV_MOBILE_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `mobile-nav__link${isActive ? ' is-active' : ''}`}
              tabIndex={open ? 0 : -1}
            >
              {link.label} <Icon name="arrow" size={16} />
            </NavLink>
          ))}
        </nav>
        <div className="mobile-nav__cta">
          <a
            className="btn btn--whatsapp btn--block"
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            <Icon name="whatsapp" size={18} /> Order on WhatsApp
          </a>
          <Link to="/contact" className="btn btn--primary btn--block" tabIndex={open ? 0 : -1}>
            Contact / Order Form
          </Link>
        </div>
      </div>
    </header>
  );
}
