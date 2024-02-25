import { ReactNode } from 'react';
import Footer from '../components/common/footer';
import Header from '../components/common/header';

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
