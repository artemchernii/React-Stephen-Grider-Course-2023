import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button';

function App() {
    const clickHandler = (e) => {
        console.log(e);
        console.log('click handler');
    };
    return (
        <>
            <h1>Hello JSX</h1>
            <Button text={'New Button'} onClickHandler={clickHandler}></Button>
        </>
    );
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
