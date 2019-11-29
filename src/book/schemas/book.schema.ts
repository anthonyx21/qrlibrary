import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: String,
  isbn: String,
  title: String,
  description: String,
  author: String,
  imageURL: String,
  holds: Array,
});
