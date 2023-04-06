import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context.js';

export default function BookCreate() {
	const [value, setValue] = useState('');
	const { createBook } = useBooksContext();
	const handleSubmit = (e) => {
		e.preventDefault();

		createBook(value);

		setValue('');
	};
	return (
		<div className="book-create">
			<h3 className="h3">Add a book</h3>
			<form onSubmit={handleSubmit}>
				<label className="label" htmlFor="title">
					Title name:
				</label>
				<input
					className="input"
					name="title"
					type="text"
					onChange={(e) => setValue(e.target.value)}
					value={value}
					placeholder="Enter your fav title"
				/>
				<button className="button" type="submit">
					Add
				</button>
			</form>
		</div>
	);
}
