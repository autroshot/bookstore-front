import { useEffect, useState } from 'react';
import { fetchBooks } from '../apis/book';
import { BookItem } from '../models/book';
import useSearchParams from './search-params';

export default function useBook() {
    const { getSearchParam } = useSearchParams();
    const categoryId = getSearchParam('categoryId') ?? undefined;
    const isNew = getSearchParam('isNew') ?? undefined;

    const [books, setBooks] = useState<BookItem[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const params = {
            categoryId,
            isNew,
            pagination: { page: 1, limit: 8 },
        };

        fetchBooks(params).then((res) => {
            setBooks(res.books);
            setTotalPages(res.totalPages);
        });
    }, [categoryId, isNew]);

    return { books, totalPages };
}
