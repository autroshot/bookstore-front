import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import defaultBookCover from '../../assets/images/default-book-cover.png';
import useSearchParams from '../../hooks/search-params';
import { BookItem } from '../../models/book';
import { ViewOptionValue } from './view-switcher';

export default function Item({ book }: Props) {
    const { getSearchParam } = useSearchParams();

    const currentViewOption = (getSearchParam('viewOption') ??
        'grid') as ViewOptionValue;

    return (
        <StyledDiv $viewOption={currentViewOption}>
            <div className="img">
                <img
                    width="200px"
                    src={book.imageUrl ?? defaultBookCover}
                    alt={book.title}
                />
            </div>
            <div className="content">
                <h2 className="title">{book.title}</h2>
                <p className="summary">{book.summary}</p>
                <p className="author">{book.author}</p>
                <p className="price">{book.price.toLocaleString()}원</p>
                <div className="likes">
                    <FaHeart />
                    <span>{book.likes}</span>
                </div>
            </div>
        </StyledDiv>
    );
}

const StyledDiv = styled.div<StyleProps>`
    display: flex;
    flex-direction: ${({ $viewOption }) =>
        $viewOption === 'grid' ? 'column' : 'row'};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

    .img {
        border-radius: ${({ theme }) => theme.borderRadius.default};
        overflow: hidden;
        width: ${({ $viewOption }) =>
            $viewOption === 'grid' ? 'auto' : '160px'};
        text-align: center;

        img {
            max-width: 100%;
        }
    }

    .content {
        padding: 16px;
        position: relative;
        flex: ${({ $viewOption }) => ($viewOption === 'grid' ? '0' : '1')};

        .title {
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0 0 12px 0;
        }
        .summary {
            font-size: 0.875rem;
            color: ${({ theme }) => theme.color.secondary};
            margin: 0 0 4px 0;
        }
        .author {
            font-size: 0.875rem;
            color: ${({ theme }) => theme.color.secondary};
            margin: 0 0 4px 0;
        }
        .price {
            font-size: 1rem;
            color: ${({ theme }) => theme.color.secondary};
            margin: 0 0 4px 0;
            font-weight: 700;
        }
        .likes {
            display: inline-flex;
            align-items: center;
            font-size: 0.875rem;
            margin: 0 0 4px 0;
            font-weight: 700;
            border: 1px solid ${({ theme }) => theme.color.border};
            border-radius: ${({ theme }) => theme.borderRadius.default};
            padding: 4px 12px;
            position: absolute;
            bottom: 16px;
            right: 16px;

            svg {
                color: ${({ theme }) => theme.color.primary};
            }
        }
    }
`;

interface Props {
    book: BookItem;
}

interface StyleProps {
    $viewOption: ViewOptionValue;
}
