import styled from 'styled-components';
import { Params } from '../apis/book';
import List from '../components/book-list';
import Empty from '../components/book-list/empty';
import Filter from '../components/book-list/filter';
import Pagination from '../components/book-list/pagination';
import ViewSwitcher from '../components/book-list/view-switcher';
import Title from '../components/common/title';
import useBook from '../hooks/book';
import useSearchParams from '../hooks/search-params';

export default function Books() {
    const { getSearchParam } = useSearchParams();
    const categoryId = getSearchParam('categoryId') ?? undefined;
    const isNew = getSearchParam('isNew') ?? undefined;
    const params: Params = {
        categoryId,
        isNew,
        pagination: { page: 1, limit: 8 },
    };

    const { books } = useBook(params);

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
