import { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Layout = (props) => (
    <Fragment>
        <Navbar />
        <Sidebar />
        <main>
            {props.children}
        </main>
        <Footer />
    </Fragment>
);

export default Layout;
