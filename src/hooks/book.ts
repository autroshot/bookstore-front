import { useEffect, useState } from 'react';
import { Params, fetchBooks } from '../apis/book';
import { BookItem } from '../models/book';

export default function useBook(params: Params) {
    const {
        categoryId,
        isNew,
        pagination: { page, limit },
    } = params;

    const [books, setBooks] = useState<BookItem[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const params = {
            categoryId,
            isNew,
            pagination: { page, limit },
        };

        fetchBooks(params).then((res) => {
            setBooks(res.books);
            setTotalPages(res.totalPages);
        });
    }, [categoryId, isNew, page, limit]);

    return { books, totalPages };
}
