import { ReactNode } from 'react';
import { FaList, FaTh } from 'react-icons/fa';
import styled from 'styled-components';
import useSearchParams from '../../hooks/search-params';
import Button from '../common/button';

const VIEW_OPTIONS = [
    { value: 'grid', icon: <FaTh /> },
    { value: 'list', icon: <FaList /> },
] as const satisfies readonly ViewOption[];

export default function ViewSwitcher() {
    const { getSearchParam, setSearchParam } = useSearchParams();

    const currentViewOption = getSearchParam('viewOption') ?? 'grid';

    return (
        <StyledDiv>
            {VIEW_OPTIONS.map((viewOption) => (
                <Button
                    key={viewOption.value}
                    size="medium"
                    scheme={
                        viewOption.value === currentViewOption
                            ? 'primary'
                            : 'normal'
                    }
                    onClick={() => handleClick(viewOption.value)}
                >
                    {viewOption.icon}
                </Button>
            ))}
        </StyledDiv>
    );

    function handleClick(value: ViewOptionValue) {
        setSearchParam('viewOption', value);
    }
}

const StyledDiv = styled.div`
    display: flex;
    gap: 8px;

    svg {
        fill: white;
    }
`;

interface ViewOption {
    value: string;
    icon: ReactNode;
}

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type ViewOptionValue = ArrayElement<typeof VIEW_OPTIONS>['value'];

export type { ViewOptionValue };
