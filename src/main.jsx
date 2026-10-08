import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/tokens.css';
import './styles/base.css';
import './styles/buttons.css';
import './styles/header.css';
import './styles/layout.css';
import './styles/forms.css';
import './styles/components.css';
import './styles/components2.css';
import './styles/components3.css';
import './styles/hero.css';
import './styles/pages.css';
import './styles/pages2.css';
import './styles/responsive.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
