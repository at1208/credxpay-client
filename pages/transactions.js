import React from 'react';
import Layout from '../components/core/layout/layout';
import TransactionComponent from '../components/transactions/transactions';
import Private from '../components/core/private';

const Transactions = () => {
  return <>
            <Layout>
               <Private>
                 <TransactionComponent />
               </Private>
            </Layout>
         </>
}

export default Transactions;
