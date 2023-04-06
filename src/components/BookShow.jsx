import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context.js';

export default function BookShow({ book, onEditBook }) {
	const [showEdit, setShowEdit] = useState(false);
	const { deleteBookById } = useBooksContext();

	const handleDelete = () => deleteBookById(book.id);
	const handleEdit = () => setShowEdit(!showEdit);
	const editHandler = () => {
		setShowEdit(false);
	};
	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit book={book} onEditBook={editHandler} />;
	}
	return (
		<div className="book-show">
			<img
				src={`https://picsum.photos/seed/${book.id}300/200`}
				alt="Book"
			/>
			{content}
			<div className="actions">
				<button className="edit" onClick={handleEdit}>
					Edit
				</button>
				<button className="delete" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
}
