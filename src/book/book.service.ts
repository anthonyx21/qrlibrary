import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {

    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) { }

    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async create(book: Book): Promise<Book> {
        const bookEntity = new Book();
        bookEntity.isbn = 'Nest';
        bookEntity.description = 'Is great!';
        bookEntity.title = "6000";

        return await this.bookRepository.create(bookEntity);
    }

}
