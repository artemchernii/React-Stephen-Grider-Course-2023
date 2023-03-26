import React from 'react';
import ReactDOM from 'react-dom/client';

const root = document.querySelector('#root');

const reactRoot = ReactDOM.createRoot(root);

function App() {
    return (
        <>
            <h1>Hello JSX</h1>
        </>
    );
}

reactRoot.render(<App />);
