import { useEffect } from 'react';

/**
 * Sets the document title and meta description for each page (basic SEO).
 * Usage: <PageMeta title="Our Story" description="..." />
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Iya Sade Oke Ogun Heritage`
      : 'Iya Sade Oke Ogun Heritage — Premium Elubo, Yam, Garri & Maize';
    document.title = fullTitle;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
