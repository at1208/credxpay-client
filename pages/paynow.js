import React, { Fragment } from 'react';
import Layout from '../components/core/layout/layout';
import Payment from '../components/payment/payment';
import Private from '../components/core/private';

const Pay = () => {
  return <Fragment>
            <Private>
              <Layout>
                 <Payment />
              </Layout>
            </Private>
         </Fragment>
}

export default Pay;
