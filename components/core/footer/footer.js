import React, { Fragment } from 'react';
import { Button,ButtonGroup } from "@chakra-ui/core";

const Footer = () => {
  return <Fragment>
          <div className="dk-footer-outer-container">
            <div className="row col justify-content-center">
              <ButtonGroup spacing={4}>
              <Button variantColor="teal" size="xs" variant="ghost">
                Legal
              </Button>
              <Button variantColor="teal" size="xs" variant="ghost">
               Contact
              </Button>
              <Button variantColor="teal" size="xs" variant="ghost">
               Security
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
