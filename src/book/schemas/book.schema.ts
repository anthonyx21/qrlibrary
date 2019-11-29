import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  id: String,
  name: String,
  isbn: String,
  title: String,
  description: String,
  holds: Array,
});
