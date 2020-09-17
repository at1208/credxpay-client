import React, { Fragment, useState, useEffect } from 'react';
import { FaCreditCard,
         FaAward,
         FaReceipt } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { SiTrustpilot } from "react-icons/si";
import { Button } from 'antd'
import { Carousel } from 'antd';
import Testimonials from './testimonial';
import FAQs from './faqs';
import Achievements from './achievement';
import Howitworks from './howitworks';
import Benefits from './benefits';

import Authentication from '../authentication'




const DKHome = () => {


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


const getStartedContainer = () => {
  return <div>
            <div className="container-fluid">
                <div className="dk-home-container">
                  <div className="row justify-content-center">
                 <div className="col-md-6">
                       <div className="row justify-content-center">
                           <div className="dk-home-inner-container-description">
                             <h2 className="dk-home-container-title">Pay Rent or Maintenance with Credit Card</h2>
                             <div className="row dk-home-desc-container">
                                <div className="col-md-3">
                                   <div className="row justify-content-center">
                                     <FaCreditCard className="dk-home-icons"/>
                                   </div>
                                </div>
                                <div className="col-md-8">
                                  <h2 className="dk-home-desc-heading">Now pay Society Maintenance too</h2>
                                  <span className="dk-home-desc-details">All your property payments at one place - rent, maintenance, deposit, token</span>
                                </div>
                             </div>
                             <div className="row dk-home-desc-container">
                                <div className="col-md-3">
                                <div className="row justify-content-center">
                                  <FaAward className="dk-home-icons"/>
                                </div>
                                </div>
                                <div className="col-md-8">
                                  <h2 className="dk-home-desc-heading">Earn upto ₹30,000/- in Rewards</h2>
                                   <span className="dk-home-desc-details">Earn miles and reward points on your Visa and Mastercard cards plus enjoy upto 45 days interest free credit period.</span>
                                </div>
                             </div>
                             <div className="row dk-home-desc-container">
                                <div className="col-md-3">
                                <div className="row justify-content-center">
                                  <FaReceipt className="dk-home-icons"/>
                                </div>
                                </div>
                                <div className="col-md-8">
                                <h2 className="dk-home-desc-heading">Digital Receipts</h2>
                                <span className="dk-home-desc-details">  Payment receipts are generated instantly and sent directly to your email ID. Claim your HRA with ease.</span>
                                </div>
                             </div>
                             <div className="row dk-home-desc-container">
                                <div className="col-md-3">
                                <div className="row justify-content-center">
                                    <SiTrustpilot className="dk-home-icons"/>
                                </div>
                                </div>
                                <div className="col-md-8">
                                <h2 className="dk-home-desc-heading">CREDxpay Trust</h2>
                                 <span className="dk-home-desc-details">CREDxpay Pay is a product by CREDxpay and is 100% secure with PCI compliant payment gateway.</span>
                                </div>
                             </div>
                          </div>
                       </div>
                   </div>

                   <div className="col-md-6">
                       <div className="row justify-content-center">
                           <div className="dk-home-inner-container-start">
                               {showCarousel()}
                              <Authentication />
                          </div>
                       </div>
                   </div>
             </div>
          </div>
       </div>
    </div>
}


  return <Fragment>
                 {getStartedContainer()}
                 <Benefits />
                 <Howitworks />
                 <Achievements />
                 <Testimonials />
                 <FAQs/>
         </Fragment>
}

export default DKHome;
