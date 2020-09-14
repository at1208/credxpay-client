import React, {Fragment, useEffect, useState } from 'react';
import {Stack,Input } from "@chakra-ui/core";
import { createBeneficiary } from '../../actions/beneficiary';
import { createPayment,verifyPayment,getBeneficiaryId,validateIFSC } from '../../actions/payment';
import { createPayout } from '../../actions/payout';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast as toastify } from 'react-toastify';
import { useToast } from "@chakra-ui/core";
import { Button } from 'antd';
import { isAuth } from '../../actions/auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import { Spin } from 'antd';

const Payment = () => {

const toast = useToast();
const [beneficiary, setBeneficiary] = useState({
       beneficiary_name: '',
       beneficiary_account: '',
       ifsc_code: '',
       amount: null,
       purpose: '',
       payer: isAuth() && isAuth()._id
});

const [beneficiary_confirm_acc, setBeneficiary_confirm_acc] = useState();
const [spinner, setSpinner] = useState(false);
const [loading, setLoading] = useState(false);
const [ifscDetail, setIfscDetails] = useState();
// const [disable, setDisable] = useState(false);
const [ifscSpinner, setIfscSpinner] = useState(false);
const [paynow, setPaynow] = useState(false);


useEffect(() => {
  if(beneficiary.ifsc_code.length >10){
    setIfscSpinner(true)
    validateIFSC(beneficiary.ifsc_code)
      .then((response) => {
        setIfscSpinner(false)
        setIfscDetails(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return setIfscDetails(null);
}, [beneficiary.ifsc_code])



const onClickPTP = () => {
  const error = validateBeneficiary();
  if(error === 1){
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    setPaynow(true);
    },1000)
  }
}

const toastFunction = (text) => {
  return toast({
        title: text,
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
}

const validateBeneficiary = () => {
  if(!beneficiary.beneficiary_name){
    toastFunction('Beneficiary name is required')
    return 0;
  }
  if(beneficiary.beneficiary_name.length < 2){
    toastFunction('Beneficiary name must be greater than 2 characters')
    return 0;
  }
  if(!beneficiary.beneficiary_account){
    toastFunction('Beneficiary account number is required')
    return 0;
  }
  if(!beneficiary_confirm_acc){
    toastFunction('Confirm account number is required')
    return 0;
  }
  if(!(beneficiary.beneficiary_account === beneficiary_confirm_acc)){
    toastFunction('Account number do not matched')
    return 0;
  }
  if(!beneficiary.ifsc_code){
    toastFunction('IFSC code is required')
    return 0;
  }
  if(!(ifscDetail && ifscDetail.BANK)){
    toastFunction('Invalid IFSC!. Please enter valid IFSC')
    return 0;
  }
  if(!beneficiary.amount){
    toastFunction('Amount is required')
    return 0;
  }
  if(beneficiary.amount < 1){
    toastFunction('Minimum amount ₹1 is required')
    return 0;
  }
  return 1;
}




const payment = () => {

      createBeneficiary(beneficiary)
        .then(response => {
          if(response.error){
            return toastify.error(response.error)
          }
          setSpinner(true)
          createPayment({beneficiary_id: response.result._id})
            .then(result => {
              if(result.error){
                toastify.error(result.error)
              }
               setSpinner(false)
               setBeneficiary({...beneficiary,
                beneficiary_name: '',
                beneficiary_account: '',
                ifsc_code: '',
                amount: '',
                purpose: ''})
               paymentHandler(result.orderID)
            })
            .catch((err) => {
             toastify.error(err.error)
            })
        })
        .catch((err) => {
         toastify.error(err.error)
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
               createPayout(result.result.beneficiary)
                 .then(response => {
                   setBeneficiary({
                     beneficiary_name: '',
                     beneficiary_account: '',
                     ifsc_code: '',
                     amount: '',
                     purpose: ''
                   })
                   setBeneficiary_confirm_acc('');
                 })
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


const showIFSC = () => {
      return <div>
              {ifscDetail && ifscDetail.BANK &&
                <div className="pay-ifsc-details-container">
                   <small>BANK: {ifscDetail.BANK}</small>
                    <br />
                    <small>BRANCH: {ifscDetail.BRANCH}</small>
                    <br />
                   <small>ADDRESS: {ifscDetail.ADDRESS}</small>
                </div> }
                 <div className="pay-ifsc-notfound-container">{ifscDetail && !ifscDetail.BANK && ifscDetail}</div>
                 <div className='text-center'>
                   {ifscSpinner && <Spin />}
                 </div>
            </div>
}


  return <Fragment>
             <ToastContainer />
             <div className="container-fluid">
                   <div className="dk-pay-container"/>
                   <div className="row justify-content-center">
                     <div className="col-md-5 col-lg-4 col-sm-8 dk-paynow-card">
                        <h2 className="paynow-title">{paynow ?'Please check your detail before proceeding': 'Please enter beneficiary details'}</h2>
                        <form className="pay-now-form">
                        <TextField
                        variant="outlined"
                        className="pay-now-field"
                        fullWidth
                        label="Beneficiary name"
                        size="small"
                        onChange={(e) => setBeneficiary({...beneficiary, beneficiary_name: e.target.value })}/>

                        <TextField
                        variant="outlined"
                        className="pay-now-field"
                        fullWidth
                        label="Beneficiary Account number"
                        type="number"
                        size="small"
                        onChange={(e) => setBeneficiary({...beneficiary, beneficiary_account: e.target.value })}/>

                        <TextField
                        variant="outlined"
                        className="pay-now-field"
                        fullWidth
                        label="Confirm Account number"
                        size="small"
                        type="number"
                         onChange={(e) => setBeneficiary_confirm_acc(e.target.value)} />

                        <TextField
                        variant="outlined"
                        className="pay-now-field"
                        fullWidth
                        label="IFSC"
                        size="small"
                        onChange={(e) => setBeneficiary({...beneficiary, ifsc_code: e.target.value })} />

                        {showIFSC()}

                        <FormControl fullWidth  size="small" variant="outlined" className="pay-now-field">
                         <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                         <OutlinedInput
                           onChange={(e) => setBeneficiary({...beneficiary, amount: parseInt(e.target.value) })}
                           startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                           labelWidth={60}
                         />
                        </FormControl>

                        <TextField
                        variant="outlined"
                        className="pay-now-field"
                        fullWidth
                        label="Purpose"
                        size="small"
                        onChange={(e) => setBeneficiary({...beneficiary, purpose: e.target.value })} />
                       {/*   <button>Submit</button> */}
                        </form>

                        <div className="pay-btn-container">
                           {!paynow && <Button
                             size="large"
                             type="primary"
                             loading={loading}
                             onClick={onClickPTP}
                             block><b>Proceed to pay</b></Button>}

                           {paynow && <Button
                             size="large"
                             type="primary"
                             loading={loading}
                             onClick={payment}
                             block><b>Pay now</b></Button>}
                        </div>
                     </div>
                   </div>
             </div>

             <div className="dk-pay-spinner">
               {spinner && <CircularProgress color="secondary" size={100}/>}
             </div>
         </Fragment>
}

export default Payment;
