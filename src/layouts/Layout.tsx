import { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../components/common/footer';
import Header from '../components/common/header';

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <LayoutStyle>{children}</LayoutStyle>
            <Footer />
        </>
    );
}

const LayoutStyle = styled.main`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.layout.width.large};
    padding: 20px 0;
`;

interface Props {
    children: ReactNode;
}
