const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const Book = require('./models/Book');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/test', async (req, res) => {
    try {
      const books = await Book.find({});
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// MongoDB connection
mongoose.connect('mongodb+srv://book_inventory:XoLVoczLVFdYzg6R@cluster0.mrre3.mongodb.net/BookInventory?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/books', bookRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
