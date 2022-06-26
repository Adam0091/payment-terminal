import Header from 'components/Header/';
import Footer from './../Footer/Footer';

const Layout = ({ children }) => (
    <>
        <Header />
            { children }
        <Footer />
    </>
)
export default Layout;