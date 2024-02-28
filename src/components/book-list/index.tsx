import styled from 'styled-components';
import { BookItem } from '../../models/book';
import Item from './item';

export default function BookList() {
    const BOOK_ITEM_DUMMY: BookItem = {
        id: 1,
        title: 'Book',
        author: 'Author',
        price: 10000,
        summary:
            'SummarySummarySummarySummarySummarySummarySummarySummarySummarySummary',
        imageUrl: null,
        likes: 22,
    };

    return (
        <StyledDiv>
            <Item book={BOOK_ITEM_DUMMY} />
        </StyledDiv>
    );
}

const StyledDiv = styled.div``;
