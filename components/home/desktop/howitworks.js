import React from 'react';
import { BiReceipt } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";


const Howitworks = () => {
  return <div className="dk-home-outer-2-container">
             <div className="row col justify-content-center">
                 <div className="col-md-3 text-center">
                      <div  className="row justify-content-center">
                        <span className="home-hiw-icons-container"><BiReceipt className="home-hiw-icons"/></span>
                      </div>
                      <span className="home-hiw-step">1</span>
                      <div className="row justify-content-center">
                      <h3 className="home-hiw-step-heading">Fill Transaction Detail</h3>
                      <span className="home-hiw-desc">Provide your beneficiary bank details, and we will setup your account.</span>
                    </div>
                 </div>
                 <div className="col-md-3 text-center">
                     <div className="row justify-content-center">
                       <span className="home-hiw-icons-container"><FaCreditCard className="home-hiw-icons"/></span>
                     </div>
                     <span className="home-hiw-step">2</span>
                     <div className="row justify-content-center">
                     <h3 className="home-hiw-step-heading">Make Payment</h3>
                     <span className="home-hiw-desc">Make payment through your credit card or debit card.</span>
                     </div>
                 </div>
                 <div className="col-md-3 text-center">
                     <div className="row justify-content-center">
                       <span className="home-hiw-icons-container"><GiReceiveMoney className="home-hiw-icons"/></span>
                      </div>
                     <span className="home-hiw-step">3</span>
                     <div className="row justify-content-center">
                     <h3 className="home-hiw-step-heading">Payment Credited!</h3>
                     <span className="home-hiw-desc">Your payment is credited to your beneficiary’s bank account within 2 working days.</span>
                     </div>
                 </div>
             </div>
         </div>
}

export default Howitworks;
