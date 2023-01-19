import React, { Fragment } from 'react';

import Box from '@mui/material/Box';
import Navbar from '../ui/Navbar';
import { useStyles } from '../style/headerStyle';

import { CssBaseline, Typography } from '@mui/material';
import Typed from 'react-typed';

const Header = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />
      <CssBaseline />
      <Box className={classes.photo} id="home">
        <Box sx={{ margin: 'auto', color: '#fff' }}>
          <Typography
            variant="h3"
            component="h4"
            className={classes.headerTitle}
          >
            I am Sumon Fakir
          </Typography>
          <Typography
            variant="h4"
            component="h5"
            className={classes.headerContent}
          >
            <Typed
              strings={['Web developer']}
              typeSpeed={100}
              backSpeed={80}
              loop
            />
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Header;
