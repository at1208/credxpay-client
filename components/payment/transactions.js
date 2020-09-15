import { getPaymentByPayerId } from '../../actions/payment';
import React, { useState, useEffect, Fragment} from 'react';
import { isAuth } from '../../actions/auth';
import Card from '../core/transactionCard';

const Transactions = () => {
     const [payments, setPayments] = useState();

     useEffect(() => {
         getPaymentByPayerId(isAuth() && isAuth()._id)
         .then(response => {
           if(response.error){
             return console.log(response.error)
           }
             setPayments(response.result)
         })
         .catch(err => console.log(err))
     },[])


  const showTransactionsList = () => {
          return payments && payments.map((transaction, i)=> {
          return <Card data={transaction} key={i} />
        })
  }

  return <Fragment>
               <div className="container">
                   <div className="row justify-content-center">
                      <div className="col-md-6 col-sm-9 col-lg-5">
                        {showTransactionsList()}
                      </div>
                   </div>
               </div>
         </Fragment>
}

export default Transactions;
