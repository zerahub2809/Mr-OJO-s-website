import App from '/src/App.jsx';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { renderToString } from 'react-dom/server';

/** Render a route to HTML string; throws on component/render errors. */
export function render(route) {
  return renderToString(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
}
