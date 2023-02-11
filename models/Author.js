const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  fullName: String,
  bio: Number,
  birthDate: String,
});

module.exports = Author = mongoose.model("Author", authorSchema);
