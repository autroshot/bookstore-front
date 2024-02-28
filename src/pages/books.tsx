import styled from 'styled-components';
import List from '../components/book-list';
import Empty from '../components/book-list/empty';
import Filter from '../components/book-list/filter';
import Pagination from '../components/book-list/pagination';
import ViewSwitcher from '../components/book-list/view-switcher';
import Title from '../components/common/title';
import useBook from '../hooks/book';

export default function Books() {
    const { books } = useBook();

    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <StyledDiv>
                <Filter />
                <ViewSwitcher />
                {books.length === 0 ? (
                    <Empty />
                ) : (
                    <>
                        <List books={books} />
                        <Pagination />
                    </>
                )}
            </StyledDiv>
        </>
    );
}

const StyledDiv = styled.div``;
