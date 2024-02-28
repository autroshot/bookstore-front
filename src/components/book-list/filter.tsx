import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { CATEGORY_ID } from '../../constants/query-string';
import useCategory from '../../hooks/category';
import Button from '../common/button';

export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const categories = useCategory();

    const currentCategoryId = searchParams.get(CATEGORY_ID);
    const parsedCurrentCategoryId =
        currentCategoryId === null ? null : Number(currentCategoryId);

    return (
        <StyledDiv>
            <div className="category">
                <Button
                    size="medium"
                    scheme={
                        parsedCurrentCategoryId === null ? 'primary' : 'normal'
                    }
                    onClick={() => handleCategoryChange()}
                >
                    전체
                </Button>
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        size="medium"
                        scheme={
                            parsedCurrentCategoryId === category.id
                                ? 'primary'
                                : 'normal'
                        }
                        onClick={() => handleCategoryChange(category.id)}
                    >
                        {category.name}
                    </Button>
                ))}
            </div>
            <div className="new">
                <Button size="medium" scheme="normal">
                    신간
                </Button>
            </div>
        </StyledDiv>
    );

    function handleCategoryChange(id?: number) {
        if (id === undefined) {
            setSearchParams((urlSearchParams) => {
                urlSearchParams.delete(CATEGORY_ID);
                return urlSearchParams;
            });
            return;
        }
        setSearchParams((urlSearchParams) => {
            urlSearchParams.set(CATEGORY_ID, String(id));
            return urlSearchParams;
        });
        return;
    }
}

const StyledDiv = styled.div`
    display: flex;
    gap: 24px;

    .category {
        display: flex;
        gap: 8px;
    }
`;
