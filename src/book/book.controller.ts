import { Controller, Get, Post, Body } from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { };

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Post()
    async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.bookService.create(createBookDto);
    }

}
