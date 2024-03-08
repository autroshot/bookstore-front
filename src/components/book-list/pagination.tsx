import styled from 'styled-components';
import useSearchParams from '../../hooks/search-params';
import { Pagination as PaginationModel } from '../../models/pagination';
import Button from '../common/button';

export default function Pagination({
    pagination: { page: currentPage },
    totalPages,
}: Props) {
    const { setSearchParam } = useSearchParams();

    return (
        <StyledDiv>
            <ol>
                {Array(totalPages)
                    .fill(0)
                    .map((_, index) => {
                        const page = index + 1;
                        const isCurrentPage = currentPage === page;

                        return (
                            <li key={index}>
                                <Button
                                    size="small"
                                    scheme={
                                        isCurrentPage ? 'primary' : 'normal'
                                    }
                                    onClick={() => handlePageClick(page)}
                                >
                                    {page}
                                </Button>
                            </li>
                        );
                    })}
            </ol>
        </StyledDiv>
    );

    function handlePageClick(page: number) {
        setSearchParam('page', page);
    }
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 24px 0;

    ol {
        list-style: none;
        display: flex;
        gap: 8px;
        padding: 0;
        margin: 0;
    }
`;

interface Props {
    pagination: PaginationModel;
    totalPages: number;
}
