import { Injectable, Inject } from '@nestjs/common';
import { Book, Hold } from './interfaces/book.interface';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { CheckOutDto } from './dto/check-out-dto';
import { CheckInDto } from './dto/check-in-dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {

    constructor(
        @InjectModel('Book')
        private readonly bookModel: Model<Book>,
    ) { }

    async findOne(id: string ): Promise<Book> {
        return await this.bookModel.findById(id).exec();
    }
    async findAll(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const createdBook = new this.bookModel(createBookDto);
        return await createdBook.save();
    }
    async checkIn(id: string, checkInDto: CheckInDto): Promise<Book> {
        const book: Book = await this.bookModel.findById(id).exec();
        if (book.holds.length === 0
            || (book.holds[book.holds.length - 1].checkedIn !== null)
            ) {
            return book;
        }
        const lastHold = book.holds.pop();
        lastHold.checkedIn = new Date().getTime();
        book.holds.push(lastHold);

        await book.save();
        return book;
    }

    async checkOut(id: string, checkOutDto: CheckOutDto): Promise<Book> {
        const book = await this.bookModel.findById(id).exec();
        if (book.holds.length > 0
            && book.holds[book.holds.length - 1].checkedIn == null
            ) {
            return book;
        }
        const hold: Hold = {
            name: checkOutDto.name,
            checkedOut: new Date().getTime(),
            checkedIn: null,
        };
        book.holds.push(hold);

        await book.save();
        return book;
    }
}
