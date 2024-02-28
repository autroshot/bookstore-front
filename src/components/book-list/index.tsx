import styled from 'styled-components';
import { BookItem } from '../../models/book';
import Item from './item';

export default function BookList({ books }: Props) {
    return (
        <StyledDiv>
            {books.map((book) => (
                <Item key={book.id} book={book} />
            ))}
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`;

interface Props {
    books: Array<BookItem>;
}
