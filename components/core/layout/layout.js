import React, { Fragment } from 'react';
import DkHeader from '../header/dkHeader';
import MbHeader from '../header/MbHeader';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  return <Fragment>
                <div className="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block">
                 <DkHeader />
                </div>
                <div className="d-block d-sm-none">
                 <MbHeader />
                </div>
                <div className="layout-container">
                  {children}
                </div>
                <div>
                <Footer />
                </div>

         </Fragment>
}

export default Layout;
