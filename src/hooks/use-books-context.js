import { useContext } from 'react';
import BooksContext from '../context/books.js';

export default function useBooksContext() {
	const context = useContext(BooksContext);
	if (!context) {
		throw new Error('useBooksContext must be used within a BooksProvider');
	}
	return context;
}
