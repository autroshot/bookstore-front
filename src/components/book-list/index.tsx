import styled from 'styled-components';
import useSearchParams from '../../hooks/search-params';
import { BookItem } from '../../models/book';
import Item from './item';
import { ViewOptionValue } from './view-switcher';

export default function BookList({ books }: Props) {
    const { getSearchParam } = useSearchParams();

    const currentViewOption = (getSearchParam('viewOption') ??
        'grid') as ViewOptionValue;

    return (
        <StyledDiv $viewOption={currentViewOption}>
            {books.map((book) => (
                <Item key={book.id} book={book} />
            ))}
        </StyledDiv>
    );
}

const StyledDiv = styled.div<StyleProps>`
    display: grid;
    grid-template-columns: ${({ $viewOption }) =>
        $viewOption === 'grid' ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)'};
    gap: 24px;
`;

interface Props {
    books: Array<BookItem>;
}

interface StyleProps {
    $viewOption: ViewOptionValue;
}
