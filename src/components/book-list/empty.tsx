import { FaSmileWink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../common/title';

export default function Empty() {
    return (
        <StyledDiv>
            <div className="icon">
                <FaSmileWink />
            </div>
            <Title size="large" color="secondary">
                검색 결과가 없습니다.
            </Title>
            <p>
                <Link to="/books">전체 검색 결과로 이동하기</Link>
            </p>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 120px 0;

    .icon {
        svg {
            font-size: 4rem;
            fill: #ccc;
        }
    }
`;
