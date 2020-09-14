import React from 'react';
import Layout from '../components/core/layout/layout';
import TransList from '../components/payment/transactions';
import Private from '../components/core/private';

const Transactions = () => {
  return <>
            <Layout>
               <Private>
                 <TransList />
               </Private>
            </Layout>
         </>
}

export default Transactions;
