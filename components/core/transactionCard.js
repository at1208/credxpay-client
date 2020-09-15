import React from 'react';
import moment from 'moment';

const Card = ({ data }) => {
const status = data && data.status;


const paymentStatus = (status) => {
       if(status === "SUCCESS"){
         return "success"
       }
       if(status === "UNVERIFIED_IN_PROCESS"){
         return "failed"
       }
       if(status === "VERIFIED_IN_PROCESS"){
         return "in process"
       }
       if(status === "FAIL"){
         return "failed"
       }
       return;
}

const statusStyle = (text) => {
      if("success" === text){
        return { border: "1px solid #bae637" }
      }
      if("failed" === text){
        return { border: "1px solid #f5222d" }
      }
      if("in process" === text){
        return { border: "1px solid #ffc53d" }
      }
}

const statusCard = (text) => {
      if("success" === text){
        return { backgroundColor: "#7cb305", fontWeight: "800", color: "white" }
      }
      if("failed" === text){
        return { backgroundColor: "#f5222d", fontWeight: "800", color: "white" }
      }
      if("in process" === text){
        return { backgroundColor: "#ffc53d", fontWeight: "800", color: "white" }
      }
}

// const statusStatement = (text) => {
//       if(text === "success"){
//         return  `${data.beneficiary.amount} paid to ${data.beneficiary.beneficiary_name}`
//       }
//       if(text === "failed"){
//           return  `${data.beneficiary.amount} failed to send to ${data.beneficiary.beneficiary_name}`
//       }
//       if(text === "in process"){
//           return  `${data.beneficiary.amount} in process to send to ${data.beneficiary.beneficiary_name}`
//       }
// }

  return  <div className="transaction-card container" style={statusStyle(paymentStatus(status))}>
              <div className="row col">
                  <div className="col-md-5 col-sm-6">
                       <div className="row justify-content-start">
                             <span className='transaction-card-status' style={statusCard(paymentStatus(status))}>
                                {paymentStatus(status).toUpperCase()}
                             </span>
                       </div>
                  </div>
                  <div className="col-md-7 col-sm-6">
                    <div className="row justify-content-end">
                      <span className="transaction-card-date">
                       {moment(data.createdAt).format('LLL')}
                      </span>
                    </div>
                  </div>
              </div>
              <div className="transaction-card-space" />
              <div className="text-center">
                 
              </div>
          </div>
}

export default Card;
