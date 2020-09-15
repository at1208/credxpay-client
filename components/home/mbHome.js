import React from 'react';
import Home from './desktop/home'

const MobileHome = () => {
  return <>
  
         </>
}

export default MobileHome;



// import React, { useState, useEffect } from 'react';
// import { Input,
//          InputGroup,
//          InputLeftElement,
//          Stack,
//          Icon,
//          ButtonGroup,
//          Button as ChakraButton,
//          NumberInput,
//          InputLeftAddon,
//          NumberInputField,
//          useToast,
//          Divider,
//          Spinner } from "@chakra-ui/core";
// import { Button } from 'antd';
// import {sendingOTP, verifyingOTP,authenticate, isAuth} from '../../actions/auth';
// import Router from 'next/router';
// import StepCard from './card';
// import { Carousel } from 'antd';
// import { Collapse } from 'antd';
// import { CaretRightOutlined } from '@ant-design/icons';
// const { Panel } = Collapse;
//
//
// const MbHome = () => {
//   const toast = useToast();
//   const [phone, setPhone] = useState("");
//   const [sessionId, setSessionId]= useState("");
//   const [otp, setOtp] = useState("");
//   const [disableInput, setDisableInput] = useState(false);
//   const [verificationStack, setVerificationStack] = useState(0);
//   const [spinner, setSpinner] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [loginStatus, setLoginStatus] = useState(false)
//
//
//     useEffect(() => {
//       if(phone.length>9){
//         setDisableInput(true)
//         setSpinner(true)
//         setTimeout(() => {
//           setSpinner(false)
//            sendOtp()
//         }, 1000)
//       }
//     }, [phone])
//
//     useEffect(() => {
//       if(otp.length>5){
//         setDisableInput(true)
//         setSpinner(true)
//         setTimeout(() => {
//           setSpinner(false)
//           verifyOtp()
//         }, 1000)
//       }
//     }, [otp])
//
//
//     const handlePhoneNumber = (e) => {
//           setPhone(e.target.value)
//     }
//
//     const handleOtp = (e) => {
//           setOtp(e.target.value)
//     }
//
//     const onClickProceed = () => {
//           setLoading(true)
//           setTimeout(() => {
//           setLoading(false)
//           setVerificationStack(1)
//        }, 1000)
//     }
//
//     const sendOtp = () => {
//       setDisableInput(false)
//       sendingOTP({phone: phone})
//       .then(response => {
//         if(response.error){
//            setPhone("")
//           return toast({
//                   title: "Fail",
//                   position: "top",
//                   description: response.error,
//                   status: "error",
//                   duration: 5000,
//                   isClosable: true,
//                 })
//         }
//         setVerificationStack(2)
//         toast({
//               title: "OTP SENT",
//               position: "top",
//               description: response.message,
//               status: "success",
//               duration: 5000,
//               isClosable: true,
//             })
//         setSessionId(response.session_id)
//       })
//       .catch((err) => {
//         toast({
//               title: "Fail",
//               position: "top",
//               description: response.error,
//               status: "error",
//               duration: 5000,
//               isClosable: true,
//             })
//       })
//     }
//
//     const verifyOtp = () => {
//      setDisableInput(false)
//      verifyingOTP({ phone, session_id: sessionId, otp })
//      .then(response => {
//        if(response.error){
//          return toast({
//                  title: "Fail",
//                  position: "top",
//                  description: response.error,
//                  status: "error",
//                  duration: 5000,
//                  isClosable: true,
//                })
//        }
//        setVerificationStack(3)
//        toast({ title: "OTP Verified",
//                position: "top",
//                status: "success",
//                duration: 3000,
//                isClosable: true,
//                })
//         setLoginStatus(true)
//         authenticate(response, () => {
//           if (isAuth()) {
//           Router.push(`/pay`);
//           }
//         })
//      })
//     }
//
//     const text = `
//       A dog is a type of domesticated animal.
//       Known for its loyalty and faithfulness,
//       it can be found as a welcome guest in many households across the world.
//     `;
//
//     const showFAQs = () => {
//       return  <Collapse
//                 bordered={false}
//
//                 expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
//                 className="site-collapse-custom-collapse"
//                 >
//                 <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 1" key="4" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 2" key="5" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 3" key="6" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 1" key="7" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 2" key="8" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 3" key="9" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 1" key="10" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 2" key="11" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//                 <Panel header="This is panel header 3" key="12" className="site-collapse-custom-panel">
//                 <p>{text}</p>
//                 </Panel>
//             </Collapse>
//     }
//
//     const showTestimonialCarousel = () => {
//       return <div className="container home-dk-testimonial-outer-container">
//                 <Carousel autoplay>
//                 <div className="home-dk-testimonial-inner-container">
//                    <div className="row col justify-content-center">
//                      <div className="col-md-6 row justify-content-center">
//                         <img src="one.svg"  className="home-dk-testimonial-img"/>
//                         <div className="home-dk-testimonial-description">
//                          <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                         </div>
//                      </div>
//
//                    </div>
//                 </div>
//
//
//                 <div className="home-dk-testimonial-inner-container">
//                    <div className="row col justify-content-center">
//                      <div className="col-md-6 row justify-content-center">
//                         <img src="one.svg"  className="home-dk-testimonial-img"/>
//                         <div className="home-dk-testimonial-description">
//                          <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                         </div>
//                      </div>
//
//                    </div>
//                 </div>
//
//                 </Carousel>
//               </div>
//     }
//
//
//   return <>
//
//             <div className="mb-home-img-container"><img src="one.svg"  /></div>
//             <div>
//                <h1 className="text-center mb-home-heading">GET MORE FROM YOUR CREDIT CARD</h1>
//                  <div className="row mb-home-benefits">
//                     <div className="col-4">
//                     <img src="one.svg"  />
//                     </div>
//                     <div className="col-8">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's.
//                     </div>
//                  </div>
//
//                  <div className="row mb-home-benefits">
//                     <div className="col-4">
//                     <img src="one.svg"  />
//
//                     </div>
//                     <div className="col-8">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's.
//                     </div>
//                  </div>
//
//
//                  <div className="row mb-home-benefits">
//                     <div className="col-4">
//                     <img src="one.svg"  />
//
//                     </div>
//                     <div className="col-8">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's.
//                     </div>
//                  </div>
//
//
//                  <div className="row mb-home-benefits">
//                     <div className="col-4">
//                     <img src="one.svg"  />
//
//                     </div>
//                     <div className="col-8">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's.
//                     </div>
//                  </div>
//
//                 <div className="mb-home-happy-users">
//                 <div className="row col justify-content-center">
//                   <div className="col-5">
//                     <img src="three.png"/>
//                   </div>
//                   <div className="col-6">
//                      <div className="mt-3">
//                        <h2 className="">10,000+ Happy Users</h2>
//                        <h2 className=" ">Rs.10 Crore+ transfered</h2>
//                      </div>
//                   </div>
//                 </div>
//                 </div>
//
//                 <div>
//                     <h1 className="dk-home-outer-2-title">How it works</h1>
//                    <div className="row col justify-content-center">
//                       <StepCard />
//                       <StepCard />
//                       <StepCard />
//                       <StepCard />
//                    </div>
//                 </div>
//
//                 <div>
//                  {showTestimonialCarousel()}
//                 </div>
//
//                 <div>
//                  {showFAQs()}
//                 </div>
//             </div>
//
//
//            <div className="mb-home-proceed-to-pay-container">
//               <div className="row justify-content-center">
//               {verificationStack === 1 && !isAuth() && <InputGroup>
//               <InputLeftAddon children="+91" />
//                 <NumberInput>
//                   <NumberInputField
//                   defaultValue={undefined}
//                   placeholder="Enter mobile number"
//                   value={phone}
//                   className="mb-home-phone-input"
//                   isDisabled={disableInput}
//                   onChange={handlePhoneNumber} 	/>
//                 </NumberInput>
//               </InputGroup> }
//
//                {verificationStack === 2 && !isAuth() && <Input variant="outline" placeholder="OTP" value={otp} className="dk-home-otp-input"
//               isDisabled={disableInput} onChange={handleOtp}/>}
//
//                 {verificationStack === 0 && !isAuth() && <Button  type="primary" className="mb-home-proceed-btn" block loading={loading} size="large" onClick={onClickProceed}>Proceed to pay</Button>}
//               </div>
//            </div>
//          </>
// }
//
// export default MbHome;
