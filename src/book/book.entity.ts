import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    isbn: string;

    @Column('text')
    title: string;

    @Column()
    description: string;

    @Column('array')
    holds: Date[];

}