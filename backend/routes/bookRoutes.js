const express = require('express');
const Book = require('../models/Book'); 
const router = express.Router();

// POST - add a new book
router.post('/', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const result = await newBook.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT - update a book
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE - delete a book
router.delete('/:id', async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Book not found' });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
