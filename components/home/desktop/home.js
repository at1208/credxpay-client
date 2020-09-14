import React, { Fragment, useState, useEffect } from 'react';
import { Input,
         InputGroup,
         InputLeftElement,
         Stack,
         Icon,
         ButtonGroup,
         Button as ChakraButton,
         NumberInput,
         InputLeftAddon,
         NumberInputField,
         useToast,
         Divider,
         Spinner } from "@chakra-ui/core";
// import MuiButton from '@material-ui/core/Button';
// import StepCard from './card';
import { Button } from 'antd'
import { Carousel } from 'antd';
import {sendingOTP, verifyingOTP,authenticate, isAuth, saveUserInfo} from '../../../actions/auth';
import Router from 'next/router';
import Testimonials from './testimonial';
import FAQs from './faqs';
import Achievements from './achievement';
import Timer from 'react-compound-timer';
const { Seconds }  = Timer
import Link from 'next/link'

/* Verification process
 step 1 - click on get started button
 setp 2 - enter phone number
 step 3 - enter otp
 step 4 - verified
*/

const DKHome = () => {
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
            description: response.error,
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
             if(isAuth() && isAuth().name){
                 Router.push(`/paynow`);
             }
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


const showCarousel = () => {
  return <div className="home-dk-carousel">
          <Carousel autoplay>
          <div className="home-dk-carousel-inner-container">
          <b>Now pay Society Maintenance too</b>
           <br/>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's.
          </div>
          <div className="home-dk-carousel-inner-container">
          <b>Now pay Society Maintenance too</b>
           <br/>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's.
          </div>
          <div className="home-dk-carousel-inner-container">
          <b>Now pay Society Maintenance too</b>
           <br/>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's.
          </div>
          </Carousel>
        </div>
}

const stacks = () => {
  return <div>
              {<div>
                    <img src="/one.svg" />
                    {verificationStack === 0 && !isAuth() &&
                    <div className="dk-home-proceed-btn">
                    <ChakraButton
                    isLoading={false}
                    variantColor="green"
                    variant="solid"
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



const getStartedContainer = () => {
  return <div>
            <div className="container-fluid">
                <div className="dk-home-container">
                  <div className="row justify-content-center">
      { /*            <div className="col-md-6">
                       <div className="row justify-content-center">
                           <div className="dk-home-inner-container-description">

                          </div>
                       </div>
                   </div>*/}

                   <div className="col-md-6">
                       <div className="row justify-content-center">
                           <div className="dk-home-inner-container-start">
                               {showCarousel()}
                               {isAuth() && !isAuth().name && userInfo()}
                               {stacks()}
                               {isAuth() && isAuth().name && <div className="mt-5 dk-home-pay-now-btn">
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
                          </div>
                       </div>
                   </div>
             </div>
          </div>
       </div>
    </div>
}


  return <Fragment>
                <div className="dk-home-inner-container-3" />
                 {getStartedContainer()}
                 <Achievements />
                 <Testimonials />
                 <FAQs/>
         </Fragment>
}

export default DKHome;
