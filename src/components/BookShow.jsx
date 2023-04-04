import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDeleteBook, onEditBook }) {
    const [showEdit, setShowEdit] = useState(false);
    const handleDelete = () => onDeleteBook(book.id);
    const handleEdit = () => setShowEdit(!showEdit);
    const editHandler = (title) => {
        onEditBook(book.id, title);
        setShowEdit(false);
    };
    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = (
            <BookEdit defaultTitle={book.title} onEditBook={editHandler} />
        );
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
