export class CreateBookDto {
    readonly id: number;
    readonly name: string;
    readonly isbn: string;
    readonly title: string;
    readonly description: string;
    readonly holds: any[];
}