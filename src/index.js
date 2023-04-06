import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from './context/books.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<Provider>
		<App />
	</Provider>
);
