import React, { Fragment, useState, useEffect } from 'react';
import { Input,
         InputGroup,
         InputLeftElement,
         Stack,
         Button as ChakraButton,
         NumberInput,
         InputLeftAddon,
         NumberInputField,
         useToast,
         Spinner } from "@chakra-ui/core";
import {sendingOTP,
        verifyingOTP,
        authenticate,
        isAuth,
        saveUserInfo,
        getUserDetailById} from '../../actions/auth';
import { FaCreditCard,
         FaAward,
         FaReceipt } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import Timer from 'react-compound-timer';
import { SiTrustpilot } from "react-icons/si";
import { Button } from 'antd'
import { Carousel } from 'antd';
import Router from 'next/router';
const { Seconds }  = Timer
import Link from 'next/link';




const Authentication = () => {
  const toast = useToast();
  const [phone, setPhone] = useState("");
  const [sessionId, setSessionId]= useState("");
  const [otp, setOtp] = useState("");
  const [disableInput, setDisableInput] = useState(false);
  const [verificationStack, setVerificationStack] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false)
  const [countdown, setCountdown] = useState();
  const [disableResend, setDisableResend] = useState(true);
  const [updateUser, setUpdateUser] = useState(false);

  const [userDetail, setUserDetail] = useState({
    _id: isAuth() && isAuth()._id,
    name: '',
    email: ''
  });


  useEffect(() => {
    if(phone.length>9){
      setDisableInput(true)
      setSpinner(true)
      setTimeout(() => {
        setSpinner(false)
         sendOtp()
      },300)
    }
  }, [phone])

  useEffect(() => {
    if(otp.length>5){
      setDisableInput(true)
      setSpinner(true)
      setTimeout(() => {
        setSpinner(false)
        verifyOtp()
      }, 100)
    }
  }, [otp])


useEffect(() => {
  if(isAuth()){
    getUserDetailById(isAuth() && isAuth()._id)
      .then(res => {
        if(!res.result.name){
           return setUpdateUser(true)
        }
        setUpdateUser(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
},[])


const handlePhoneNumber = (e) => {
      setPhone(e.target.value)
}

const handleOtp = (e) => {
      setOtp(e.target.value)
}

const onClickProceed = () => {
      setLoading(true)
      setTimeout(() => {
      setLoading(false)
      setVerificationStack(1)
   },300)
}


  const saveuserDetail = () => {
    saveUserInfo(userDetail)
      .then((response) => {
        console.log(response)
          Router.push(`/paynow`);
      })
      .catch((err) => console.log(err))
  }

const sendOtp = () => {
  setDisableInput(false)
  getCoutdownTime()
  sendingOTP({phone: phone})
  .then(response => {
    if(response.error){
       setPhone("")
      return toast({
              title: "Failed! ",
              position: "top",
              description: response.error,
              status: "error",
              duration: 5000,
              isClosable: true,
            })
    }
    setVerificationStack(2)
    toast({
          title: "OTP SENT",
          position: "top",
          description: response.message,
          status: "success",
          duration: 5000,
          isClosable: true,
        })
    setSessionId(response.session_id)
  })
  .catch((err) => {
    toast({
          title: "failed to send",
          position: "top",
          description: 'Something went wrong' || response.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        })
  })
}

const verifyOtp = () => {
 setDisableInput(false)
 verifyingOTP({ phone, session_id: sessionId, otp })
 .then(response => {
   if(response.error){
     return toast({
             title: "OTP verification failed ",
             position: "top",
             description: response.error,
             status: "error",
             duration: 5000,
             isClosable: true,
           })
   }
   setVerificationStack(3)
   toast({ title: "OTP verified successfuly",
           position: "top",
           status: "success",
           duration: 3000,
           isClosable: true,
           })
    setLoginStatus(true)
    authenticate(response, () => {
      if (isAuth()) {
            getUserDetailById(isAuth() && isAuth()._id)
              .then(result => {
                if(result.error){
                  toast({ title: "Something went wrong",
                          position: "top",
                          status: "success",
                          duration: 3000,
                          isClosable: true,
                          })
                }
                setUserDetail({...userDetail, _id: isAuth() && isAuth()._id})
                if(!result.result.name){
                  return setUpdateUser(true)
                }
                 Router.push(`/paynow`);
              })
              .catch((err) => {
                console.log(err)
              })
          }
      })
 })
}



 const userInfo = () => {
   return <div>
           <Stack spacing={3}>
            <div className="dk-home-user-info-title-container">
               <h2 className="dk-home-user-info-title">Please enter your details</h2>
            </div>

              <Input placeholder="Name"
               size="md"
               className="dk-home-user-info-input"
               value={userDetail.name}
               onChange={(e) => setUserDetail({...userDetail, name: e.target.value})} />

              <Input placeholder="Email"
               size="md"
               className="dk-home-user-info-input"
               value={userDetail.email}
               onChange={(e) => setUserDetail({...userDetail, email: e.target.value})} />

              <ChakraButton
               variantColor="blue"
               variant="solid"
               onClick={saveuserDetail}>Save</ChakraButton>
           </Stack>
         </div>
 }




 const stacks = () => {
   return <div>
               {<div>
                     {!updateUser &&
                      <div className="container mt-2 home-img-container">
                        <img src="/one.svg" alt="" className="home-img"/>
                      </div>
                     }
                     {verificationStack === 0 && !isAuth() &&
                     <div className="dk-home-proceed-btn">
                     <ChakraButton
                     isLoading={loading}
                     onClick={onClickProceed}
                     className="dk-home-inner-container-start-btn100">
                     GET STARTED
                     </ChakraButton>
                     </div>}

                     {verificationStack === 1 && !isAuth() &&
                     <div className="dk-home-phone-input-container row justify-content-center">
                     <InputGroup>
                     <InputLeftAddon children="+91" />
                     <NumberInput>
                     <NumberInputField
                     defaultValue={undefined}
                     placeholder="Enter mobile number"
                     value={phone}
                     className="dk-home-phone-input"
                     isDisabled={disableInput}
                     onChange={handlePhoneNumber} 	/>
                     </NumberInput>
                     </InputGroup>
                     </div>}

                     {verificationStack === 2 && !isAuth() &&
                      <div className="dk-home-otp-input-container row justify-content-center">
                      {resendOTP()}
                      <Input
                       variant="outline"
                       placeholder="OTP"
                       value={otp}
                       className="dk-home-otp-input"
                       isDisabled={disableInput}
                       onChange={handleOtp}/>
                     </div>}

                      {spinner && <div className="text-center mt-3">
                      <Spinner
                       thickness="4px"
                       speed="0.65s"
                       emptyColor="gray.200"
                       color="teal.500"
                       size="xl"
                       />
                 </div>}
             </div>}
          </div>
 }

 const resendOTP = () => {
   return <>
           <div className="">
             <div className="m-2">
             <Button disabled={disableResend} onClick={sendOtp} >Resend OTP</Button>
             <span className="ml-2">
             <Timer
             initialTime={60000}
             direction="backward"
             >
             {({ getTime }) => {

              getCoutdownTime(getTime())
             return <Fragment>
                       <b><Seconds /> seconds </b>
                    </Fragment>
           }}
             </Timer>
             </span>
             </div>
           </div>
          </>
 }


 const getCoutdownTime = (time) => {
      setCountdown(time)
      setDisableResend(true)
      if(time< 0){
        return setDisableResend(false)
      }
   return;
 }


  return <Fragment>
              {isAuth() && updateUser && userInfo()}
              {stacks()}
              {isAuth() && !updateUser &&
             <div className="mt-5 dk-home-pay-now-btn">
               <Link href='/paynow'>
                 <a>
                 <Button
                   size="large"
                   className="dk-home-pay-now-btn"
                   block>
                   PAY NOW
                 </Button>
                 </a>
               </Link>
             </div>}
         </Fragment>
}

export default Authentication;
