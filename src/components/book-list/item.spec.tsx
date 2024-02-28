import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../contexts/theme';
import { BookItem } from '../../models/book';
import Item from './item';

const BOOK_ITEM_DUMMY: BookItem = {
    id: 1,
    title: 'Book',
    author: 'Author',
    price: 10000,
    summary:
        'SummarySummarySummarySummarySummarySummarySummarySummarySummarySummary',
    imageUrl: null,
    likes: 22,
} as const;

describe('BookItem 컴포넌트 테스트', () => {
    it('렌더링을 확인', () => {
        render(
            <ThemeProvider>
                <Item book={BOOK_ITEM_DUMMY} />
            </ThemeProvider>
        );

        expect(screen.getByText(BOOK_ITEM_DUMMY.title)).toBeInTheDocument();
        expect(screen.getByText(BOOK_ITEM_DUMMY.summary!)).toBeInTheDocument();
        expect(screen.getByText(BOOK_ITEM_DUMMY.author)).toBeInTheDocument();
        expect(
            screen.getByText(`${BOOK_ITEM_DUMMY.price.toLocaleString()}원`)
        ).toBeInTheDocument();
        expect(screen.getByAltText(BOOK_ITEM_DUMMY.title)).toBeInTheDocument();
    });
});
