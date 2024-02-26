import { FaRegUser, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export default function Header() {
    const CATEGORIES: Array<Category> = [
        { id: null, name: '전체' },
        { id: 0, name: '동화' },
        { id: 1, name: '소설' },
        { id: 2, name: '사회' },
    ];

    return (
        <StyledHeader>
            <h1 className="logo">
                <Link to="/">
                    <img src={logo} alt="bookstore" />
                </Link>
            </h1>
            <nav className="category">
                <ul>
                    {CATEGORIES.map((category) => (
                        <li key={category.id}>
                            <Link
                                to={
                                    category.id === null
                                        ? '/books'
                                        : `/books?category-id=${category.id}`
                                }
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="auth">
                <ul>
                    <li>
                        <Link to="/login">
                            <FaSignInAlt /> 로그인
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-up">
                            <FaRegUser />
                            회원가입
                        </Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.background};

    .logo {
        img {
            width: 200px;
        }
    }

    .category {
        ul {
            display: flex;
            gap: 32px;
            li {
                a {
                    font-size: 1.5rem;
                    font-weight: 600;
                    text-decoration: none;
                    color: ${({ theme }) => theme.color.text};

                    &:hover {
                        color: ${({ theme }) => theme.color.primary};
                    }
                }
            }
        }
    }

    .auth {
        ul {
            display: flex;
            gap: 16px;
            li {
                a {
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    line-height: 1;

                    svg {
                        margin-right: 6px;
                    }
                }
            }
        }
    }
`;

interface Category {
    id: number | null;
    name: string;
}
