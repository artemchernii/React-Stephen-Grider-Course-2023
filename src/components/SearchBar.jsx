import { useEffect, useState } from 'react';

export default function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };
    const handleChange = (e) => {
        const { value } = e.target;

        setTerm(value);
    };
    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                style={{ maxWidth: '400px', marginBottom: '20px' }}
            >
                <label className="label">Search Images You Like</label>
                <input
                    className="input is-medium is-rounded"
                    onChange={handleChange}
                    value={term}
                    type="text"
                    placeholder="Type something"
                />
            </form>
        </>
    );
}
