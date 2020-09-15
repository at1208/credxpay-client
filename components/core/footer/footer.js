import React, { Fragment } from 'react';
import { ButtonGroup } from "@chakra-ui/core";
import { Button } from 'antd';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';




const Footer = ({ router }) => {

  const Active = (path) => {
         if(router.pathname === path){
           return { backgroundColor: "#2B2B52", color: "white", fontWeight:"900" }
         }
         return { color: "black"}
  }

  return <Fragment>
          <div className="dk-footer-outer-container">
            <div className="row col justify-content-center">
              <ButtonGroup spacing={4}>
               <Link href="/legal">
                   <a>
                    <Button   size="md"   className="dk-footer-btn" style={Active('/legal')}>
                      Legal
                    </Button>
                  </a>
               </Link>
               <Link href="/contact-us">
                   <a>
                     <Button   size="md"  className="dk-footer-btn" style={Active('/contact-us')}>
                      Contact
                     </Button>
                   </a>
               </Link>
               <Link href="/privacy-policy">
                   <a>
                     <Button   size="md"  className="dk-footer-btn" style={Active('/privacy-policy')}>
                      Privacy policy
                     </Button>
                   </a>
               </Link>

              </ButtonGroup>
            </div>
          </div>
          <div className="dk-footer-copyrights-container">
             All rights reserved © 2020 Credxpay technologies LLP.
          </div>
         </Fragment>
}

export default withRouter(Footer);
