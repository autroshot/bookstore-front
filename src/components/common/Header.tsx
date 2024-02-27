import {
    FaHistory,
    FaRegUser,
    FaShoppingCart,
    FaSignInAlt,
    FaSignOutAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout as logoutAPI } from '../../apis/auth';
import logo from '../../assets/images/logo.png';
import useAlert from '../../hooks/alert';
import useCategory from '../../hooks/category';
import useAuthStore from '../../store/auth';

export default function Header() {
    const { isLoggedIn, logout } = useAuthStore();
    const categories = useCategory();
    const showAlert = useAlert();

    return (
        <StyledHeader>
            <h1 className="logo">
                <Link to="/">
                    <img src={logo} alt="bookstore" />
                </Link>
            </h1>
            <nav className="category">
                <ul>
                    <li>
                        <Link to={'/books'}>전체</Link>
                    </li>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <Link to={`/books?category-id=${category.id}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="auth">
                {isLoggedIn ? (
                    <ul>
                        <li>
                            <button onClick={handleLogout}>
                                <FaSignOutAlt /> 로그아웃
                            </button>
                        </li>
                        <li>
                            <Link to="/cart">
                                <FaShoppingCart /> 장바구니
                            </Link>
                        </li>
                        <li>
                            <Link to="/order-list">
                                <FaHistory /> 주문 내역
                            </Link>
                        </li>
                    </ul>
                ) : (
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
                )}
            </nav>
        </StyledHeader>
    );

    async function handleLogout() {
        await logoutAPI();

        logout();
        showAlert('로그아웃이 완료되었습니다.');
    }
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
                    font-size: 1.2rem;
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
                display: flex;
                align-items: center;
                a,
                button {
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    line-height: 1;
                    border: 0;
                    background: none;
                    cursor: pointer;

                    svg {
                        margin-right: 6px;
                    }
                }
            }
        }
    }
`;
