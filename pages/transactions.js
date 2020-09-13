import React from 'react';
import Layout from '../components/core/layout/layout';
import TransList from '../components/payment/transactions';

const Transactions = () => {
  return <>
            <Layout>
                 <TransList />
            </Layout>
         </>
}

export default Transactions;
