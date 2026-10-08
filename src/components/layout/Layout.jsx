import Header from './Header.jsx';
import Footer from './Footer.jsx';
import WhatsAppFab from './WhatsAppFab.jsx';

/** Site chrome: sticky header, main content, footer, floating WhatsApp button. */
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
