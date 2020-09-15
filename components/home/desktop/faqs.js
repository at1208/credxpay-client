import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
 root: {
   width: '100%',
 },
 heading: {
   fontSize: theme.typography.pxToRem(15),
   fontWeight: theme.typography.fontWeightRegular,
 },
}));

const faqs = [{ ques: `How secure is CREDxpay?`, ans:`CREDxpay uses crucial security measures to ensure confidentiality and security of your information by secure and encrypted process, moreover CREDxpay does not store any of your financial or personal information. We give atmost prioity to the security.` },
              { ques: `What are the benefits of using CREDxpay?`, ans: `CREDxpay provides one stop solution for all your financial transactions you incurred in your day to day life. Its efficient working model and easy user interface makes it even better.`},
              { ques: `What are the fees/charges for using CREDxpay?`, ans: `It varies with the type of transaction and for a particular transaction charges will be mentioned there only.`},
              { ques: `How do I make my house rent payment on CREDxpay?`, ans: `It's just three simple steps-
                                                                                1) Register yourself to CREDxpay with your Email ID.
                                                                                2) Attach few essential documents like Landlord’s Contact, Id proof, etc.
                                                                                3) Once you get verification mail you are ready to go. Just click on "Proceed to Pay" and within few cliks you can make your payment.`},
              { ques: `How do I earn cashback/ rewards with CREDxpay?`, ans: `With every transaction of yours, you will get some reward points which, further can be redeemed from bank.`},
              { ques: `How does CREDxpay pay my landlord ?`, ans: `When you submit your landlord’s bank details on CREDxpay and make your payment, we verify these details and transfer the rent amount directly to your landlord’s bank account. Please note that this may take some time depending upon the traffic.` },
              { ques: `I had made a payment but my transaction was put on hold, what to do now?`, ans: `Payment put on hold simply means that your verification is not completed, as soon as verification part is done your payment will be carried out automatically.`},
              { ques: `If I have made the rent payment now, when will my landlord get the amount ?`, ans: `It depends upon the traffic on the server but in any case it will be carried out in two working days atmax.`},
              { ques: `My landlord is not registered on CREDxpay. Can I still pay my rent?`, ans: `Yes, Sure!
                                                                                             Moreover, you and your landlord both will get confirmation message from CREDxpay.`},
              { ques: `How will my rent payment reflect in my landlord’s bank account?`, ans: `Your rent payment will reflect in your landlord’s bank account from CREDxpay with description - "X Month Rent Payment From Your Name" for example “September Rent Payment From Mohit".`},

              { ques: `How do I get rent receipt on CREDxpay?`, ans: `At the end of every transaction you will get a receipt, of which you can take print out also for further use.`},
              { ques: `Can I claim my HRA by paying through CREDxpay?`, ans: `Yes, by the receipt generated at the end of every transaction you can apply for HRA.`},
              { ques: `Can I set standing instructions or autopay on my card using CREDxpay?`, ans: `CREDxpay team is working on it and we will soon introduce this service with many more, to make payments easier and more simplified.`}

]


const  ShowFAQs = () => {
 const classes = useStyles();

 const faqsList  = () => {
       return faqs.map((item, i) => {
         return  <Accordion key={i}  expanded={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <div  className="faqs-question">{item.ques}</div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography >
                    <div className="faqs-answer">{item.ans}</div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
       })
 }
 return (
      <div className="faqs-container">
         <h1 className="faqs-title">Frequently Asked Questions</h1>
         <div className={classes.root}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                 {faqsList()}
                </div>
            </div>
          </div>
       </div>
 );
}

export default ShowFAQs;
