import React, { useState, useEffect } from 'react';
import { Drawer, Button, Radio, Space } from 'antd';
import MenuIcon from '@material-ui/icons/Menu';
import { isAuth,signout } from '../../../actions/auth';
import Router from 'next/router';
import Link from 'next/link'

const AppDrawer  = () => {

 const [visible, setVisible] = useState(false);

  const showDrawer = () => {
        setVisible(true)
  };

  const onClose = () => {
        setVisible(false)
  };


    return (
      <>
        <Space>
        <MenuIcon onClick={showDrawer} className="mb-header-drawer-icons"/>
        </Space>
        <Drawer
          title="CREDXPAY"
          placement={'right'}
          closable={true}
          onClose={onClose}
          visible={visible}
        >
        <div className="row justify-content-center">
              {isAuth() &&
                <Link href="/paynow">
                  <a>
                    <div className="mb-drawer-menu-items">Pay now</div>
                  </a>
               </Link> }

              {isAuth() &&
                <Link href="/transactions">
                  <a>
                    <div className="mb-drawer-menu-items">Transactions</div>
                 </a>
               </Link> }

              {isAuth() &&
                <Link href="/setting">
                  <a>
                    <div className="mb-drawer-menu-items">Settings</div>
                  </a>
                </Link> }
              {isAuth() && <div className="mb-drawer-menu-items"onClick={() => signout(() => Router.replace(`/`))}>Sign out</div>}
        </div>
        </Drawer>
      </>
    );
}

export default AppDrawer;
