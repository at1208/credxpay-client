import React, { Fragment } from 'react';
import { Button,ButtonGroup } from "@chakra-ui/core";
const Header = () => {
  return <Fragment>
           <div className="dk-header-outer-container">
              <div className="row col">
                <div className="col-md-3 dk-header-col-1">
                  <h1 className="dk-header-title">CREDXPAY</h1>
                </div>
                <div className="col-md-6 dk-header-col-2">
                  <ButtonGroup spacing={4}>
                  <Button variantColor="teal" size="xs" variant="ghost">
                     How it works
                  </Button>
                  <Button variantColor="teal" size="xs" variant="ghost">
                     Testimonials
                  </Button>
                  <Button variantColor="teal" size="xs" variant="ghost">
                     FAQs
                  </Button>
                  </ButtonGroup>
                </div>
                <div className="col-md-3 text-center dk-header-col-3">
                <Button variantColor="teal" size="xs" variant="ghost">
                   Accounts
                </Button>
                </div>
              </div>
           </div>
         </Fragment>
}

export default Header;
