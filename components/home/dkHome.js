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
import { Carousel } from 'antd';
import StepCard from './card';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

/* Verification process
 step 1 - click on proceed button
 setp 2 - enter phone number
 step 3 - enter otp
 step 4 - verified
*/

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const DKHome = () => {
  const toast = useToast();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [disableInput, setDisableInput] = useState(false);
  const [verificationStack, setVerificationStack] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false)

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
    setVerificationStack(2)
    setDisableInput(false)
    toast({
          title: "OTP SENT",
          position: "top",
          description: `OTP has been sent to ${phone}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
  }

  const verifyOtp = () => {
   setVerificationStack(3)
   setDisableInput(false)
   toast({ title: "OTP Verified",
           position: "top",
           status: "success",
           duration: 3000,
           isClosable: true,
           })
  setLoginStatus(true)
  }

 const userInfo = () => {
   return <div>
           <Stack spacing={3}>
            <div className="dk-home-user-info-title-container">
               <h2 className="dk-home-user-info-title">Please enter your details</h2>
            </div>
           <Input placeholder="Name" size="md" className="dk-home-user-info-input"/>
           <Input placeholder="Email" size="md" className="dk-home-user-info-input"/>
           <ChakraButton  variantColor="blue"  variant="solid">Save</ChakraButton>
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

const showTestimonialCarousel = () => {
  return <div className="container home-dk-testimonial-outer-container">
            <Carousel autoplay>
            <div className="home-dk-testimonial-inner-container">
               <div className="row col justify-content-center">
                 <div className="col-md-6 row justify-content-center">
                    <img src="one.svg"  className="home-dk-testimonial-img"/>
                    <div className="home-dk-testimonial-description">
                     <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                 </div>
                 <div className="col-md-6  row justify-content-center">
                    <img src="one.svg"  className="home-dk-testimonial-img"/>
                    <div className="home-dk-testimonial-description">
                     <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                 </div>
               </div>
            </div>


            <div className="home-dk-testimonial-inner-container">
               <div className="row col justify-content-center">
                 <div className="col-md-6 row justify-content-center">
                    <img src="one.svg"  className="home-dk-testimonial-img"/>
                    <div className="home-dk-testimonial-description">
                     <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                 </div>
                 <div className="col-md-6  row justify-content-center">
                    <img src="one.svg"  className="home-dk-testimonial-img"/>
                    <div className="home-dk-testimonial-description">
                     <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                 </div>
               </div>
            </div>

            </Carousel>
          </div>
}


const showFAQs = () => {
  return  <Collapse
            bordered={false}

            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
            >
            <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 1" key="4" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="5" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="6" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 1" key="7" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="8" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="9" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 1" key="10" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="11" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="12" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
        </Collapse>
}

  return <Fragment>
           <div className="dk-home-outer-1-container">
             <div className="dk-home-inner-container-3">
             </div>

             <div className="row">

                 <div className="col-md-5 dk-home-inner-container-2">
                {<h1 className="dk-home-inner-container-1-title">Get more from your credit card</h1>}
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
                <div className=" col-md-6 row justify-content-end">
                <div className="dk-home-inner-container-start">
                  {showCarousel()}
                 {loginStatus && userInfo()}
                {!loginStatus &&  <>
                 <img src="/one.svg" />
                {verificationStack === 0 && <div className="dk-home-proceed-btn">
                <ChakraButton
                isLoading={false}
                variantColor="green"
                variant="solid"
                isLoading={loading}
                onClick={onClickProceed}
                className="dk-home-inner-container-start-btn100">
                PROCEED TO PAY
                </ChakraButton>
                </div>}


                {verificationStack === 1 && <div className="dk-home-phone-input-container row justify-content-center">
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

                {verificationStack === 2 && <div className="dk-home-otp-input-container row justify-content-center">
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

           {/* FOURTH FOLD */}
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
           {/* SECOND FOLD */}
           <div className="dk-home-outer-2-container">
                <h1 className="dk-home-outer-2-title">How it works</h1>
               <div className="row col justify-content-center">
                  <StepCard />
                  <StepCard />
                  <StepCard />
                  <StepCard />
               </div>
           </div>
              {/* THIRD FOLD */}
              <div className="dk-home-outer-3-container">
                <h1 className="dk-home-outer-3-title">Testimonials</h1>
                {showTestimonialCarousel()}
              </div>

                  {/* FIFTH FOLD */}
              <div className="dk-home-outer-5-container container">
                <h1 className="dk-home-outer-5-title ">FAQs</h1>
                  {showFAQs()}
              </div>
         </Fragment>
}

export default DKHome;
