import Head from 'next/head';
import Footer from '../footer';
import Header from '../header';

const Layout = ({children, title = 'Commerce'}) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Header />
        <div>
            {children}
        </div>
        <Footer />
    </div>
);

export default Layout;