interface BookItem {
    id: number;
    title: string;
    author: string;
    price: number;
    summary: string;
    imageUrl: string;
    likes: number;
}

interface BookDetail extends BookItem {
    category: string;
    format: string;
    isbn: string;
    pages: number;
    publicationDate: Date;
    description: string;
    tableOfContents: string;
}

export type { BookDetail, BookItem };
