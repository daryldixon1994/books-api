const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

module.exports = Book = mongoose.model("Book", booksSchema);
