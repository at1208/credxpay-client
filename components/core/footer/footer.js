import React, { Fragment } from 'react';
import { ButtonGroup } from "@chakra-ui/core";
import { Button } from 'antd';

const Footer = () => {
  return <Fragment>
          <div className="dk-footer-outer-container">
            <div className="row col justify-content-center">
              <ButtonGroup spacing={4}>
              <Button   size="md" ghost>
                Legal
              </Button>
              <Button   size="md" ghost>
               Contact
              </Button>
              <Button   size="md" ghost>
               Privacy policy
              </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="dk-footer-copyrights-container">
             All rights reserved © 2020 Credxpay technologies LLP.
          </div>
         </Fragment>
}

export default Footer;
