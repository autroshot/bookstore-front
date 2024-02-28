import { BookItem } from '../models/book';
import { Pagination } from '../models/pagination';
import { httpClient } from './http';

async function fetchBooks({
    categoryId,
    isNew,
    pagination: { page, limit },
}: Params) {
    if (categoryId === undefined) {
        const res = await httpClient.get<Response>('/books', {
            params: { 'is-new': isNew, page, limit },
        });

        return res?.data ?? [];
    }
    const res = await httpClient.get<Response>(
        `/categories/${categoryId}/books`,
        { params: { 'is-new': isNew, page, limit } }
    );

    return res?.data ?? [];
}

interface Params {
    pagination: Pagination;
    categoryId?: number;
    isNew?: boolean;
}

interface Response {
    books: Array<BookItem>;
    totalPages: number;
}

export { fetchBooks };
export type { Params };
