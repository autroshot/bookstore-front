import styled from 'styled-components';
import useCategory from '../../hooks/category';
import useSearchParams from '../../hooks/search-params';
import Button from '../common/button';

export default function Filter() {
    const { getSearchParam, setSearchParam, deleteSearchParam } =
        useSearchParams();
    const categories = useCategory();

    const currentCategoryId = getSearchParam('categoryId');
    const currentIsNew = getSearchParam('isNew') ?? false;

    return (
        <StyledDiv>
            <div className="category">
                <Button
                    size="medium"
                    scheme={currentCategoryId === null ? 'primary' : 'normal'}
                    onClick={() => handleCategoryChange()}
                >
                    전체
                </Button>
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        size="medium"
                        scheme={
                            currentCategoryId === category.id
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
                <Button
                    size="medium"
                    scheme={currentIsNew ? 'primary' : 'normal'}
                    onClick={handleIsNewToggle}
                >
                    신간
                </Button>
            </div>
        </StyledDiv>
    );

    function handleCategoryChange(id?: number) {
        if (id === undefined) {
            deleteSearchParam('categoryId');
            deleteSearchParam('page');
            return;
        }
        setSearchParam('categoryId', id);
        deleteSearchParam('page');
        return;
    }

    function handleIsNewToggle() {
        const isNew = getSearchParam('isNew') ?? false;

        if (isNew) {
            deleteSearchParam('isNew');
            deleteSearchParam('page');
            return;
        }
        setSearchParam('isNew', true);
        deleteSearchParam('page');
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
