/* eslint-disable object-curly-newline */
const { getAllBooks, addBook, getBookById, editBook, deleteBook } = require('./handler');

const route = [
	{
		method: 'GET',
		path: '/books',
		handler: getAllBooks,
	},
	{
		method: 'POST',
		path: '/books',
		handler: addBook,
	},
	{
		method: 'GET',
		path: '/books/{bookId}',
		handler: getBookById,
	},
	{
		method: 'PUT',
		path: '/books/{bookId}',
		handler: editBook,
	},
	{
		method: 'DELETE',
		path: '/books/{bookId}',
		handler: deleteBook,
	},
];

module.exports = route;
