/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
'use strict';
const { nanoid } = require('nanoid');

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const bookLocation = './src/books.json';

const getAllBooks = async (request, h) => {
	const { name, reading, finished } = request.query;
	let books = await readFile(bookLocation, 'utf8');
	books = JSON.parse(books);

	if (name) {
		const filterByName = books.filter((book) => {
			const nameRegex = new RegExp(name, 'gi');
			return nameRegex.test(book.name);
		});
		return h
			.response({
				status: 'success',
				data: {
					books: filterByName.map((book) => ({
						id: book.id,
						name: book.name,
						publisher: book.publisher,
					})),
				},
			})
			.code(200);
	}

	if (reading) {
		const filterByRead = books.filter((book) => Number(book.reading) == Number(reading));

		return h
			.response({
				status: 'success',
				data: {
					books: filterByRead.map((book) => ({
						id: book.id,
						name: book.name,
						publisher: book.publisher,
					})),
				},
			})
			.code(200);
	}

	if (finished) {
		const filterByFinish = books.filter((book) => Number(book.finished) == Number(finished));

		return h
			.response({
				status: 'success',
				data: {
					books: filterByFinish.map((book) => ({
						id: book.id,
						name: book.name,
						publisher: book.publisher,
					})),
				},
			})
			.code(200);
	}

	return h
		.response({
			status: 'success',
			data: {
				books: books.map((book) => ({
					id: book.id,
					name: book.name,
					publisher: book.publisher,
				})),
			},
		})
		.code(200);
};

const addBook = async (request, h) => {
	const book = request.payload;
	if (book) {
		if (!book.name) {
			const response = h.response({
				status: 'fail',
				message: 'Gagal menambahkan buku. Mohon isi nama buku',
			});
			response.code(400);
			return response;
		}
		if (book.readPage > book.pageCount) {
			const response = h.response({
				status: 'fail',
				message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
			});
			response.code(400);
			return response;
		}
		let books = await readFile(bookLocation, 'utf8');
		books = JSON.parse(books);

		book.id = nanoid(16);
		if (book.pageCount === book.readPage) {
			book.finished = true;
		} else {
			book.finished = false;
		}
		book.insertedAt = new Date().toISOString();
		book.updatedAt = book.insertedAt;
		const isSuccess = books.push(book);

		if (isSuccess) {
			await writeFile(bookLocation, JSON.stringify(books, null, 2), 'utf8');
			return h
				.response({
					status: 'success',
					message: 'Buku berhasil ditambahkan',
					data: {
						bookId: book.id,
					},
				})
				.code(201);
		} else {
			return h
				.response({
					status: 'error',
					message: 'Buku gagal ditambahkan',
				})
				.code(500);
		}
	} else {
		return h
			.response({
				status: 'error',
				message: 'Buku gagal ditambahkan',
			})
			.code(500);
	}
};

const getBookById = async (request, h) => {
	let books = await readFile(bookLocation, 'utf8');
	const id = request.params.bookId;
	books = JSON.parse(books);

	const book = books.filter((b) => b.id === id)[0];

	if (book !== undefined) {
		return h
			.response({
				status: 'success',
				data: {
					book: book,
				},
			})
			.code(200);
	} else {
		return h
			.response({
				status: 'fail',
				message: 'Buku tidak ditemukan',
			})
			.code(404);
	}
};

const editBook = async (request, h) => {
	const updBook = request.payload;
	let books = await readFile(bookLocation, 'utf8');
	books = JSON.parse(books);
	const id = request.params.bookId;
	const book = books.filter((b) => b.id === id)[0];

	if (book === undefined) {
		return h
			.response({
				status: 'fail',
				message: 'Gagal memperbarui buku. Id tidak ditemukan',
			})
			.code(404);
	}

	if (!updBook.name) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal memperbarui buku. Mohon isi nama buku',
		});
		response.code(400);
		return response;
	}
	if (updBook.readPage > updBook.pageCount) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
		});
		response.code(400);
		return response;
	}

	books.forEach((book) => {
		if (book.id == id) {
			book.name = updBook.name;
			book.year = updBook.year;
			book.author = updBook.author;
			book.summary = updBook.summary;
			book.publisher = updBook.publisher;
			book.pageCount = updBook.pageCount;
			book.readPage = updBook.readPage;
			book.reading = updBook.reading;
		}
	});
	await writeFile(bookLocation, JSON.stringify(books, null, 2), 'utf8');
	return h
		.response({
			status: 'success',
			message: 'Buku berhasil diperbarui',
		})
		.code(200);
};

const deleteBook = async (request, h) => {
	const id = request.params.bookId;
	let books = await readFile(bookLocation, 'utf8');
	books = JSON.parse(books);
	const book = books.filter((b) => b.id === id)[0];

	if (book === undefined) {
		return h
			.response({
				status: 'fail',
				message: 'Buku gagal dihapus. Id tidak ditemukan',
			})
			.code(404);
	}

	books = books.filter((book) => book.id != id);
	await writeFile(bookLocation, JSON.stringify(books, null, 2), 'utf8');
	return h
		.response({
			status: 'success',
			message: 'Buku berhasil dihapus',
		})
		.code(200);
};

module.exports = {
	getAllBooks,
	addBook,
	getBookById,
	editBook,
	deleteBook,
};
