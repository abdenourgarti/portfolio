import React from 'react';
import ReactDOM from 'react-dom/client';
import 'lenis/dist/lenis.css';
import './index.css';
import './scroll';
import App from './App';
import { LangProvider } from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
