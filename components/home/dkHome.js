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
import StepCard from './card';
import { Carousel } from 'antd';

import {sendingOTP, verifyingOTP,authenticate, isAuth, saveUserInfo} from '../../actions/auth';
import Router from 'next/router';
import Testimonials from './testimonial';
import FAQs from './faqs';


/* Verification process
 step 1 - click on proceed button
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
      }, 1000)
    }
  }, [phone])

  useEffect(() => {
    if(otp.length>5){
      setDisableInput(true)
      setSpinner(true)
      setTimeout(() => {
        setSpinner(false)
        verifyOtp()
      }, 1000)
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
     }, 300)
  }

  const sendOtp = () => {
    setDisableInput(false)
    sendingOTP({phone: phone})
    .then(response => {
      if(response.error){
         setPhone("")
        return toast({
                title: "Fail",
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
            title: "Fail",
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
               title: "Fail",
               position: "top",
               description: response.error,
               status: "error",
               duration: 5000,
               isClosable: true,
             })
     }
     setVerificationStack(3)
     toast({ title: "OTP Verified",
             position: "top",
             status: "success",
             duration: 3000,
             isClosable: true,
             })
      setLoginStatus(true)
      authenticate(response, () => {
        if (isAuth()) {

        }
      })
   })
  }


  const saveuserDetail = () => {
    saveUserInfo(userDetail)
      .then((response) => {
          Router.push(`/paynow`);
      })
      .catch((err) => console.log(err))
  }

 const userInfo = () => {
   return <div>
           <Stack spacing={3}>
            <div className="dk-home-user-info-title-container">
               <h2 className="dk-home-user-info-title">Please enter your details</h2>
            </div>
           <Input placeholder="Name" size="md" className="dk-home-user-info-input" value={userDetail.name} onChange={(e) => setUserDetail({...userDetail, name: e.target.value})} />
           <Input placeholder="Email" size="md" className="dk-home-user-info-input" value={userDetail.email} onChange={(e) => setUserDetail({...userDetail, email: e.target.value})} />
           <ChakraButton  variantColor="blue"  variant="solid" onClick={saveuserDetail}>Save</ChakraButton>
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




const showFAQs = () => {
  return
}

  return <Fragment>
           <div className="dk-home-outer-1-container">
             <div className="dk-home-inner-container-3">

             </div>

             <div className="row justify-content-center dk-home-container">
                 <div className="col-md-4 dk-home-inner-container-2">
                {<h1 className="dk-home-inner-container-1-title">Get more from your Credit Card</h1>}
                  <div className="row dk-home-row-container justify-content-center">
                    <div className="col-md-4 dk-home-inner-container-1-icons">
                     <img src="one.svg"  />
                    </div>
                    <div className="col-md-7 dk-home-inner-container-1-description">
                      <b>Now pay Society Maintenance too</b>
                       <br/>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's.

                     </div>
                  </div>
                  <div className="row dk-home-row-container justify-content-center">
                    <div className="col-md-4  dk-home-inner-container-1-icons">
                       <img src="one.svg"  />
                    </div>
                    <div className="col-md-7 dk-home-inner-container-1-description">
                    <b>Now pay Society Maintenance too</b>
                     <br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's.
                    </div>
                  </div>
                  <div className="row dk-home-row-container justify-content-center">
                    <div className="col-md-4 dk-home-inner-container-1-icons">
                       <img src="one.svg"  />
                    </div>
                    <div className="col-md-7 dk-home-inner-container-1-description">
                    <b>Now pay Society Maintenance too</b>
                     <br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's.
                    </div>
                  </div>



                 </div>
                <div className=" col-md-4 col-lg-6 row justify-content-center">
                <div className="dk-home-inner-container-start">
                  {showCarousel()}
                {isAuth() && !isAuth().name && userInfo()}
                {<>
                 <img src="/one.svg" />
                {verificationStack === 0 && !isAuth() && <div className="dk-home-proceed-btn">
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


                {verificationStack === 1 && !isAuth() && <div className="dk-home-phone-input-container row justify-content-center">
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

                {verificationStack === 2 && !isAuth() && <div className="dk-home-otp-input-container row justify-content-center">
                <Input variant="outline" placeholder="OTP" value={otp} className="dk-home-otp-input"
                isDisabled={disableInput} onChange={handleOtp}/>
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
                </>
              }
               </div>
                </div>
             </div>
           </div>

           <div className="dk-home-outer-4-container">
             <div className="row col justify-content-center">
               <div className="col-md-5 row justify-content-center dk-home-outer-4-inner-container">
                 <img src="three.png"/>
               </div>
               <div className="col-md-6">
                  <div className="dk-home-outer-4-text-container">
                    <h2 className="dk-home-outer-4-subtitle">10,000+ Happy Users</h2>
                    <h2 className="dk-home-outer-4-subtitle">Rs.10 Crore+ transfered</h2>
                  </div>
               </div>
             </div>
           </div>

                 <Testimonials />
                 <FAQs/>
         </Fragment>
}

export default DKHome;
