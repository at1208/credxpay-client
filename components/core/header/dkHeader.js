import React, { Fragment } from 'react';
import { ButtonGroup } from "@chakra-ui/core";
import { Button } from 'antd';
import { isAuth,signout } from '../../../actions/auth';
import Router, { withRouter } from 'next/router';
import Link from 'next/link';
import Menu from './menu'



const Header = ({ router }) => {

const boxShadowStyle = () => {
       if(router.pathname === '/'){
         return { boxShadow: "0 0rem 0rem #d9d9d9"}
       }
       return { color: "black"}
}

  return <Fragment>
           <div className="dk-header-outer-container" style={boxShadowStyle()}>
              <div className="row col">
                <div className="col-md-3 dk-header-col-1">
                  <Link href="/">
                    <a>
                      <h1 className="dk-header-title">CREDXPAY</h1>
                    </a>
                  </Link>
                </div>
                <div className="col-md-7 dk-header-col-2">
                    <Button className="dk-header-btn" ghost><b>Benefits</b></Button>
                    <Button className="dk-header-btn" ghost><b>How it works</b></Button>
                    <Button className="dk-header-btn" ghost><b>Testimonials</b></Button>
                    <Button className="dk-header-btn" ghost><b>FAQs</b></Button>
                </div>

                <div className="col-md-2 dk-header-col-3 mt-2">
                {isAuth() && <Menu />}
                </div>
              </div>
           </div>
         </Fragment>
}

export default withRouter(Header);
