const express = require('express');
const router = express.Router();

const books = [
  { id: 1, title: 'Book One', author: 'Author A' },
  { id: 2, title: 'Book Two', author: 'Author B' }
];

// GET /books route returning status 200 and JSON array
router.get('/', (req, res) => {
  res.status(200).json(books);
});

module.exports = router;