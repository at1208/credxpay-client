import React, { Fragment, useState, useEffect } from 'react';
import Authentication from '../authentication';
import { FaCreditCard,
         FaAward,
         FaReceipt } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { SiTrustpilot } from "react-icons/si";

const MobileHome = () => {
  return <>
          <Authentication />
          <div className="mb-home-title-container">
            <h2 className="mb-home-title">GET MORE FROM YOUR CREDIT CARD</h2>
          </div>
          <div className="container-fluid mb-home-outer-container">
             <div className="row mb-home-desc-container">
               <div className="col-2">
                 <div className="row justify-content-center mb-icon-container">
                   <FaCreditCard className="mb-home-icons"/>
                 </div>
               </div>
               <div className="col-10">
                <h2 className="mb-home-desc-heading">Now pay Society Maintenance too</h2>
               <span className="mb-home-description">All your property payments at one place - rent, maintenance, deposit, token</span>
               </div>
             </div>

             <div className="row mb-home-desc-container">
               <div className="col-2">
                  <div className="row justify-content-center mb-icon-container">
                    <FaAward className="mb-home-icons"/>
                 </div>
               </div>
               <div className="col-10">
               <h2 className="mb-home-desc-heading">Earn upto ₹30,000/- in Rewards</h2>
                <span className="mb-home-description">Earn miles and reward points on your Visa and Mastercard cards plus enjoy upto 45 days interest free credit period.</span>
               </div>
             </div>

             <div className="row mb-home-desc-container">
               <div className="col-2">
                  <div className="row justify-content-center mb-icon-container">
                  <FaReceipt className="mb-home-icons "/>
                  </div>
               </div>
               <div className="col-10">
               <h2 className="mb-home-desc-heading">Digital Receipts</h2>
               <span className="mb-home-description">  Payment receipts are generated instantly and sent directly to your email ID. Claim your HRA with ease.</span>               </div>
             </div>


             <div className="row mb-home-desc-container">
               <div className="col-2">
                <div className="row justify-content-center mb-icon-container">
                  <SiTrustpilot className="mb-home-icons "/>
                </div>
               </div>
               <div className="col-10">
               <h2 className="mb-home-desc-heading">CREDxpay Trust</h2>
                <span className="mb-home-description">CREDxpay Pay is a product by CREDxpay and is 100% secure with PCI compliant payment gateway.</span>
               </div>
             </div>
          </div>
         </>
}

export default MobileHome;
