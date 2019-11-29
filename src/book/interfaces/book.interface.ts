import { Document } from 'mongoose';

export interface Book extends Document {
  name: string;
  imageURL: string;
  author: string;
  isbn: number;
  title: string;
  description: string;
  holds: Hold[];
}
export interface Hold {
  name: string;
  checkedOut: number;
  checkedIn: number;
}
