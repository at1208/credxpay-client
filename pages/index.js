import React, { Fragment } from 'react';
import Layout from '../components/core/layout/layout';
import DkHome from '../components/home/desktop/home';
import MbHome from '../components/home/mobile/home';


const App = () => {
  return <Fragment>
            <Layout>
               <div className="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block">
                 <DkHome />
               </div>
               <div className="d-block d-sm-none">
                 <MbHome />
               </div>
            </Layout>
         </Fragment>
}

export default App;
