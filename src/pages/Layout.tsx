import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Wrapper from '../assets/wrappers/Layout';
const Layout = () => {
    return (
        <>

            <Wrapper>
                <Header />
                <Outlet />
                <Footer />
            </Wrapper>
        </>
    );
};
export default Layout;