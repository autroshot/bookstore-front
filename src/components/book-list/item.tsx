import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import defaultBookCover from '../../assets/images/default-book-cover.png';
import { BookItem } from '../../models/book';

export default function Item({ book }: Props) {
    return (
        <StyledDiv>
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

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

    .img {
        border-radius: ${({ theme }) => theme.borderRadius.default};
        overflow: hidden;

        img {
            max-width: 100%;
        }
    }

    .content {
        padding: 16px;
        position: relative;

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
            gap: 4px;
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
