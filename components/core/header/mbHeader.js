import React, { Fragment } from 'react';
import { Button,ButtonGroup } from "@chakra-ui/core";
import { isAuth,signout } from '../../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import Drawer from './drawer';

const Header = () => {
  return <Fragment>
           <div className="mb-header-outer-container row">
                <h2 className="mb-header-title">CREDXPAY</h2>
               <div className="mb-header-drawer-btn">
                <Drawer />
              </div>
           </div>
         </Fragment>
}

export default Header;
