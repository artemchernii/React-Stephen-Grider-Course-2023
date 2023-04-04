import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css';

export default function App() {
    const [books, setBooks] = useState([]);
    const createBook = (title) => {
        const newBook = {
            id: Math.floor(Math.random() * 9999),
            title,
        };
        setBooks([...books, newBook]);
    };
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    };
    const editBookById = (id, newTitle) => {
        console.log('edit this: ', id);
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    title: newTitle,
                };
            }
            return book;
        });

        setBooks([...updatedBooks]);
    };
    console.log(books);
    return (
        <div>
            <h1 className="title is-1">Reading List</h1>
            <BookCreate onCreateBook={createBook} />
            <BookList
                books={books}
                onDeleteBook={deleteBookById}
                onEditBook={editBookById}
            />
        </div>
    );
}
