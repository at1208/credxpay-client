import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PaymentIcon from '@material-ui/icons/Payment';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import { FaReceipt } from "react-icons/fa";


import Link from 'next/link';
import { isAuth,signout } from '../../../actions/auth';
import Router, { withRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const MenuListComponent = ({ router }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const Active = (path) => {
      if(router.pathname === path){
        return { backgroundColor: "dodgerblue", color: "white" }
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          className="dk-header-my-acc-btn"
          onClick={handleToggle}
        >
         My Account
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link href="/paynow">
                      <a>

                        <MenuItem onClick={handleClose}  >
                        <ListItemIcon>
                        <PaymentIcon />
                        </ListItemIcon>
                        <Typography variant="inherit">Pay now</Typography>
                        </MenuItem>
                      </a>
                    </Link>

                    <Link href="/transactions">
                      <a>
                        <MenuItem onClick={handleClose}  >
                        <ListItemIcon>
                        <FaReceipt style={{ fontSize: "22px"}} />
                        </ListItemIcon>
                        <Typography variant="inherit">Transactions</Typography>
                      </MenuItem>
                      </a>
                    </Link>

                    <Link href="/setting">
                      <a>
                        <MenuItem onClick={handleClose}  >
                        <ListItemIcon>
                        <SettingsIcon />
                        </ListItemIcon>
                        <Typography variant="inherit">Setting</Typography>
                        </MenuItem>
                      </a>
                    </Link>
                    <div className="mt-4"/>
                    <div className="ml-2 mr-2">
                      <MenuItem onClick={() => signout(() => Router.replace(`/`))} style={{ backgroundColor: "red", color: "white"}}>
                        <Typography variant="inherit" className="signout">Sign out</Typography>
                      </MenuItem>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default withRouter(MenuListComponent);
