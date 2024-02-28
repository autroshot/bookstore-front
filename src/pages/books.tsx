import styled from 'styled-components';
import List from '../components/book-list';
import Empty from '../components/book-list/empty';
import Filter from '../components/book-list/filter';
import Pagination from '../components/book-list/pagination';
import ViewSwitcher from '../components/book-list/view-switcher';
import Title from '../components/common/title';

export default function Books() {
    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <StyledDiv>
                <Filter />
                <ViewSwitcher />
                <List />
                <Empty />
                <Pagination />
            </StyledDiv>
        </>
    );
}

const StyledDiv = styled.div``;
