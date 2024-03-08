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

const DEFAULT_LIMIT = 8;

export default function Books() {
    const { getSearchParam } = useSearchParams();
    const categoryId = getSearchParam('categoryId') ?? undefined;
    const isNew = getSearchParam('isNew') ?? undefined;
    const page = getSearchParam('page') ?? 1;
    const params: Params = {
        categoryId,
        isNew,
        pagination: { page, limit: DEFAULT_LIMIT },
    };

    const { books, totalPages } = useBook(params);

    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <StyledDiv>
                <div className="filter">
                    <Filter />
                    <ViewSwitcher />
                </div>
                {books.length === 0 ? (
                    <Empty />
                ) : (
                    <>
                        <List books={books} />
                        <Pagination
                            pagination={{ page, limit: 8 }}
                            totalPages={totalPages}
                        />
                    </>
                )}
            </StyledDiv>
        </>
    );
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    .filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
`;

export { DEFAULT_LIMIT };
