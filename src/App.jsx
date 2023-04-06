import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css';
import BooksContext from './context/books';

export default function App() {
	const { fetchBooks } = useContext(BooksContext);

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div>
			<h1 className="title is-1">Reading List</h1>
			<BookCreate />
			<BookList />
		</div>
	);
}
