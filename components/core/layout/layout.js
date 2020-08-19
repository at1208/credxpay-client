import React, { Fragment } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  return <Fragment>
                <div className="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block">
                 <Header />
                </div>
                <div className="layout-container">
                  {children}
                </div>
            <Footer />

         </Fragment>
}

export default Layout;
