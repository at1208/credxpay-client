import React, {Fragment, useEffect, useState } from 'react';
import {Stack,Input } from "@chakra-ui/core";
import { createBeneficiary } from '../../actions/beneficiary';
import { createPayment,verifyPayment,getBeneficiaryId,validateIFSC } from '../../actions/payment';
import { createPayout } from '../../actions/payout';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'antd';
import { isAuth } from '../../actions/auth';
import CircularProgress from '@material-ui/core/CircularProgress';


const Pay = () => {

const [beneficiary, setBeneficiary] = useState({
       beneficiary_name: '',
       beneficiary_account: '',
       ifsc_code: '',
       amount: '',
       purpose: '',
       payer: isAuth() && isAuth()._id
});

const [beneficiary_confirm_acc, setBeneficiary_confirm_acc] = useState();

const [spinner, setSpinner] = useState(false);
const [loading, setLoading] = useState(false);
const [ifscInputDisable, setIfscDisable] = useState(false);
// const [disable, setDisable] = useState(false);
const [paynow, setPaynow] = useState(false);


useEffect(() => {
  if(beneficiary.ifsc_code.length > 10){
    setIfscDisable(true)
    validateIFSC(beneficiary.ifsc_code)
      .then((response) => {
        setIfscDisable(false)
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return console.log('ok');
}, [beneficiary.ifsc_code])




const payment = () => {
     createBeneficiary(beneficiary)
        .then(response => {
          if(response.error){
            return toast.error(response.error)
          }
          setSpinner(true)
          setBeneficiary_id(beneficiary_id)
          createPayment({beneficiary_id: response.result._id})
            .then(result => {
              if(result.error){
                toast.error(result.error)
              }
               setSpinner(false)
               setBeneficiary({...beneficiary, beneficiary_name: '', beneficiary_account: '', ifsc_code: '', amount: '', purpose: ''})
               paymentHandler(result.orderID)
            })
            .catch((err) => {
             toast.error(err.error)
            })
        })
        .catch((err) => {
         toast.error(err.error)
        })
}





const paymentHandler = (orderID) => {
    const options = {
    key: process.env.NEXT_PUBLIC_RZPID,
    amount: beneficiary.amount*100,
    currency: 'INR',
    name: 'Payments',
    order_id: orderID,
    prefill: {
      contact: isAuth() && isAuth().mobile
    },
    theme: {
    color: 'black',
    },
    handler(response) {
     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
     verifyPayment({ razorpay_order_id, razorpay_payment_id, razorpay_signature })
       .then((res) => {
           getBeneficiaryId(razorpay_payment_id)
             .then(result => {
               if(result.error){
                 console.log(result.error)
               }
               // console.log(result)
               createPayout(result.result.beneficiary)
                 .then(response => console.log(response))
                 .catch(err => console.log(err))
             })
              .catch(err => console.log(err))
       })
       .catch(err => console.log(err))
      }
    }
    const razorpay = new window.Razorpay(options);
    razorpay.open()
}

const onClickPTP = () => {
  // setLoading(true)
  // textValidation()
  // setTimeout(() => {
  // setLoading(false)
  // setPaynow(true);
  // },1000)
}




const textValidation = () => {
   if(!beneficiary.beneficiary_name){
     return toast.error('Beneficiary name is required')
   }
   if(!beneficiary.beneficiary_account){
      return toast.error('Beneficiary account number is required')
   }
   if(!(beneficiary.beneficiary_account === beneficiary_confirm_acc)){
     return toast.error('Account number do not matched')
   }
}

  return <Fragment>
             <ToastContainer />

             <div className="container p-3">
                   <div className="row justify-conytent-center">
                     <div className="col-md-6">
                        <form>
                        <TextField variant="outlined"  	className="pay-now-field" fullWidth label="Beneficiary name"   size="small" onChange={(e) => setBeneficiary({...beneficiary, beneficiary_name: e.target.value })}/>
                        <TextField variant="outlined"   className="pay-now-field" fullWidth label="Beneficiary account no"   size="small" onChange={(e) => setBeneficiary({...beneficiary, beneficiary_account: e.target.value })}/>
                        <TextField variant="outlined"   className="pay-now-field" fullWidth label="Confirm account no"   size="small"  onChange={(e) => setBeneficiary_confirm_acc(e.target.value)} />
                        <TextField variant="outlined"   disable={ifscInputDisable} className="pay-now-field" fullWidth label="IFSC code"   size="small" onChange={(e) => setBeneficiary({...beneficiary, ifsc_code: e.target.value })}/>
                        {ifscInputDisable && <CircularProgress />}
                        <TextField variant="outlined"   className="pay-now-field" fullWidth label="Amount"   size="small" onChange={(e) => setBeneficiary({...beneficiary, amount: e.target.value })}/>
                        <TextField variant="outlined"   className="pay-now-field" fullWidth label="Purpose"   size="small" onChange={(e) => setBeneficiary({...beneficiary, purpose: e.target.value })}/>
{/*                        <button>Submit</button> */}
                        </form>
                        <div className="paynow-btn-container">
                          {!paynow && <Button block size="large" loading={loading} onClick={onClickPTP}>Proceed To Pay</Button>}
                          {paynow && <Button block size="large" loading={loading} onClick={payment}>Pay now</Button>}
                        </div>
                     </div>
                   </div>
             </div>
             <div className="dk-pay-spinner">
               {spinner && <CircularProgress color="secondary" size={100}/>}
             </div>
         </Fragment>
}

export default Pay;
