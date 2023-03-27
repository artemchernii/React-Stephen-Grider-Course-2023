import { useState } from 'react';
import Button from './components/Button';

function App() {
    const clickHandler = (e) => {
        console.log(e, 'click handler');
    };
    const [inputValue, setInputValue] = useState('');
    const onChangeHandler = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };
    const inputType = 'number';
    const maxValue = 5;
    return (
        <>
            <input
                type="text"
                placeholder="Type something here"
                onChange={onChangeHandler}
                value={inputValue}
            />
            <input type="text" />
            <input
                type={inputType}
                max={maxValue}
                spellCheck
                list={[1, 2, 3]}
                style={{ color: 'tomato', border: '2vmin solid red' }}
            />
            <h1>{inputValue}</h1>
            <Button text={'New Button'} onClickHandler={clickHandler}></Button>
        </>
    );
}

export { App };
