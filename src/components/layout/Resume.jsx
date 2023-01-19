import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
  TimelineItem as MuiTimelineItem,
} from '@mui/lab';

import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme, withStyles } from '@mui/styles';
import React from 'react';
import { useStyles } from '../style/resumeStyle';

const Resume = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const TimelineItem = withStyles({
    [theme.breakpoints.down('md')]: {
      missingOppositeContent: {
        '&:before': {
          display: 'none',
        },
      },
    },
  })(MuiTimelineItem);
  const item = (
    <Grid item lg="5" sm="12">
      <Timeline
        sx={{
          height: '60vh',
          justifyContent: 'center',
        }}
      >
        <TimelineItem sx={{ height: '20vh' }}>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                background: '#fff',
                border: '2px solid #1f5297',
                height: '16px',
                width: '16px',
              }}
            />
            <TimelineConnector sx={{ background: '#1f5297' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ fontFamily: '-webkit-body', marginBottom: '16px' }}
            >
              Education
            </Typography>
            <Typography variant="subtitle2" sx={{ fontFamily: 'Raleway' }}>
              Mawlana Bhasani Science and Technology University
            </Typography>
            <Typography variant="subtitle2" sx={{ fontFamily: 'Raleway' }}>
              2008-2012
            </Typography>
            <Typography variant="body2">
              B.Sc in Criminology & Police Science
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ height: '20vh' }}>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                background: '#fff',
                border: '2px solid #1f5297',
                height: '16px',
                width: '16px',
              }}
            />
            <TimelineConnector sx={{ background: '#1f5297' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ fontFamily: '-webkit-body', marginBottom: '16px' }}
            >
              Training
            </Typography>
            <Typography variant="subtitle2" sx={{ fontFamily: 'Raleway' }}>
              Integrify
            </Typography>
            <Typography variant="subtitle2" sx={{ fontFamily: 'Raleway' }}>
              11/2022-Continue
            </Typography>
            <Typography variant="body2">Full Stack Development</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
  return (
    <Box className={classes.cardSection} id="resume">
      <Typography
        variant="h2"
        component="h4"
        color="secondary"
        sx={{
          textAlign: 'center',
          [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
          },
        }}
        className={classes.sectionTitle}
      >
        Resume
      </Typography>

      <Container maxWidth="lg" sx={{ color: '#fff' }} className={classes.photo}>
        <Grid container>
          <Grid item lg="5" sm="12">
            <Timeline
              sx={{
                height: '60vh',
                justifyContent: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('md')]: {
                  height: '50vh',
                  paddingLeft: '30px',
                },
              }}
            >
              <TimelineItem disablePadding sx={{ height: '20vh' }}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: '#fff',
                      border: '2px solid #1f5297',
                      height: '16px',
                      width: '16px',
                    }}
                  />
                  <TimelineConnector sx={{ background: '#1f5297' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: '-webkit-body', marginBottom: '16px' }}
                  >
                    Education
                  </Typography>
                  <Typography
                    sx={{ fontFamily: 'Raleway' }}
                    variant="subtitle2"
                  >
                    Business College Helsinki
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    2018-2019
                  </Typography>
                  <Typography variant="body2">
                    Vocational Qualification In ICT
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ height: '20vh' }}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: '#fff',
                      border: '2px solid #1f5297',
                      height: '16px',
                      width: '16px',
                    }}
                  />
                  <TimelineConnector sx={{ background: '#1f5297' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: '-webkit-body', marginBottom: '16px' }}
                  >
                    Training
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    BearIt Oy
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    01/2022-08/2022
                  </Typography>
                  <Typography variant="body2">
                    Coding and Finnish Language
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          {matches ? null : item}
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;
