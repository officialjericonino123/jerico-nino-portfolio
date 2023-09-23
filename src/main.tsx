import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/index.css'



import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
let root;

if (rootElement) {
  root = createRoot(rootElement);
  root.render(
    <React.StrictMode>

        <App />

    </React.StrictMode>
  );
}