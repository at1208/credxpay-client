import { getPaymentByPayerId } from '../../actions/payment';
import React, { useState, useEffect } from 'react';
import { isAuth } from '../../actions/auth';

const Transactions = () => {
     const [payments, setPayments] = useState();
     const payerId = isAuth() && isAuth()._id

     useEffect(() => {
         getPaymentByPayerId(payerId)
         .then(response => {
           if(response.error){
             return console.log(response.error)
           }
           console.log(response)
         })
         .catch(err => console.log(err))
     },[])
  return <>

         </>
}

export default Transactions;
