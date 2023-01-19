import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import resume from "../../assets/Sumon's Resume.pdf";
import { useStyles } from '../style/footerStyle';
import { Link } from '@mui/material';
export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.photo}
      sx={{
        width: '100%',
        height: '200px',
        display: 'flex',
      }}
    >
      <Link
        sx={{
          margin: 'auto',
          textDecoration: 'none',
          color: '#fff',
          fontSize: '2rem',
        }}
        href={resume}
        download="Sumon's CV"
      >
        Download My CV
      </Link>
    </BottomNavigation>
  );
}
