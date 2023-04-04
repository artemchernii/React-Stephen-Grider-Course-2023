import { useState } from 'react';

export default function BookEdit({ defaultTitle, onEditBook }) {
    const [title, setTitle] = useState(defaultTitle);

    const handleSubmit = (event) => {
        event.preventDefault();
        onEditBook(title);
    };
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label htmlFor="title">Title</label>
            <input
                className="input"
                value={title}
                name="title"
                onChange={handleChangeTitle}
            />
            <button type="submit" className="button is-primary">
                Save
            </button>
        </form>
    );
}
