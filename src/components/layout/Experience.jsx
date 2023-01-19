import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import ball from '../../assets/ball.jpg';
import business from '../../assets/buseness.png';

import { useStyles } from '../style/experienceStyle';
const Experience = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.cardSection}>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
          },
          marginBottom: '50px',
        }}
      >
        Experience
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card sx={{ minHeight: 300 }}>
            <CardMedia
              component="img"
              alt="bch"
              height="200"
              image={business}
            />
            <CardContent>
              <Typography
                sx={{
                  fontFamily: 'auto',
                  fontWeight: '400',

                  fontSize: '1.2rem',
                }}
                variant="h5"
              >
                PRIIMA-PROJECT
              </Typography>

              <Typography variant="h6">Business College Helsinki</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card sx={{ minHeight: 300 }}>
            <CardMedia component="img" alt="ball" height="200" image={ball} />
            <CardContent>
              <Typography
                sx={{
                  fontFamily: 'auto',
                  fontWeight: '400',
                  fontSize: '1.2rem',
                }}
                variant="h5"
              >
                COACH-APP
              </Typography>
              <Typography variant="h6">BearIt Oy</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
