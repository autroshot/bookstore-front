import { ReactNode } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

interface Props {
    children: ReactNode;
}
