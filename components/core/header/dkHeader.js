import React, { Fragment } from 'react';
import { ButtonGroup } from "@chakra-ui/core";
import { Button } from 'antd';
import { isAuth,signout } from '../../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import Menu from './menu'

const Header = () => {
  return <Fragment>
           <div className="dk-header-outer-container">
              <div className="row col">
                <div className="col-md-3 dk-header-col-1">
                  <Link href="/">
                    <a>
                      <h1 className="dk-header-title">CREDXPAY</h1>
                    </a>
                  </Link>
                </div>
                <div className="col-md-7 dk-header-col-2">
                    <Button className="mr-1 ml-1" ghost>Benefits</Button>
                    <Button className="mr-1 ml-1" ghost>How it works</Button>
                    <Button className="mr-1 ml-1" ghost>Testimonials</Button>
                    <Button className="mr-1 ml-1" ghost>FAQs</Button>
                </div>

                <div className="col-md-2 dk-header-col-3">

                {/*isAuth() && <button className="btn btn-sm bg-danger text-white" onClick={() => signout(() => Router.replace(`/`))}>Sign out</button>*/}
                </div>
              </div>
           </div>
         </Fragment>
}

export default Header;
