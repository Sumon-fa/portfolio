import React, { Fragment } from 'react';
import { useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useStyles } from '../style/navStyle';
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { navData } from '../componentData/navData';
import { useTheme } from '@mui/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Menu } from '@mui/icons-material';
import { Link } from '@mui/material';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  function handleChange(e, newValue) {
    setValue(newValue);
  }
  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="secondary"
      >
        {navData.map((nav, i) => (
          <Tab
            sx={{
              fontFamily: 'Raleway ',
              textTransform: 'none',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
            }}
            key={i}
            href={nav.id}
            label={nav.label}
          />
        ))}
      </Tabs>
    </Fragment>
  );
  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          {navData.map((nav, i) => (
            <Link key={i} href={nav.id} underline="none">
              <ListItem
                sx={{
                  borderBottom: '1px solid rgb(190 179 179 / 12%)',
                  textAlign: 'center',
                }}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText disableTypography className={classes.drawerItem}>
                  {nav.label}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.icon}>
        <Menu
          className={classes.drawerIcon}
          color="primary"
          onClick={() => setOpenDrawer(!openDrawer)}
        />
      </IconButton>
    </Fragment>
  );
  return (
    <ElevationScroll>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography
            variant="h4"
            color="primary"
            sx={{
              fontSize: '2.5rem',
              marginLeft: '110px',
              fontWeight: 'lighter',
              fontFamily: 'Quicksand',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.5rem',
                marginLeft: '50px',
              },
            }}
          >
            Devfolio
          </Typography>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
export default Navbar;
