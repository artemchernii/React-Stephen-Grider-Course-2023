import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const rootEl = document.querySelector('#root');
const reactRoot = ReactDOM.createRoot(rootEl);

reactRoot.render(<App />);
