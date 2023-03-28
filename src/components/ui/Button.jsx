export default function Button({ text, onClickHandler }) {
    return <button onClick={onClickHandler}>{text}</button>;
}
