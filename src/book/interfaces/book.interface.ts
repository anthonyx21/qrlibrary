import { Document } from 'mongoose';

export interface Book extends Document {
    id: string;
    name: string;
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
