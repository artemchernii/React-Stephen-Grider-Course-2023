import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context.js';

export default function BookEdit({ book, onEditBook }) {
	const [title, setTitle] = useState(book.title);
	const { editBookById } = useBooksContext();

	const handleSubmit = (event) => {
		event.preventDefault();
		onEditBook();
		editBookById(book.id, title);
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
