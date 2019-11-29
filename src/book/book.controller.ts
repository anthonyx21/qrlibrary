import {
  Controller, Get, Post, Body, Query, Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './interfaces/book.interface';
import { CheckInDto } from './dto/check-in-dto';
import { CheckOutDto } from './dto/check-out-dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Post('/:id/in')
  async checkIn(@Param('id') id, @Body() checkInDto: CheckInDto): Promise<Book> {
    return this.bookService.checkIn(id, checkInDto);
  }

  @Post('/:id/out')
  async checkOut(@Param('id') id, @Body() checkOutDto: CheckOutDto): Promise<Book> {
    return this.bookService.checkOut(id, checkOutDto);
  }
}
