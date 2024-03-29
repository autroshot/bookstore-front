import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export default function Footer() {
    return (
        <StyledFooter>
            <h1 className="logo">
                <Link to="/">
                    <img src={logo} alt="bookstore" />
                </Link>
            </h1>
            <div className="copyright">
                <p>copyright(c), 2024, Bookstore</p>
            </div>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};

    border-top: 1px solid ${({ theme }) => theme.color.background};
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .logo {
        img {
            width: 140px;
        }
    }

    .copyright {
        p {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.color.text};
        }
    }
`;
