interface BookItem {
    id: number;
    title: string;
    author: string;
    price: number;
    summary: string | null;
    imageUrl: string | null;
    likes: number;
}

interface BookDetail extends BookItem {
    category: string;
    format: string;
    isbn: string;
    pages: number;
    publicationDate: Date;
    description: string | null;
    tableOfContents: string | null;
}

export type { BookDetail, BookItem };
