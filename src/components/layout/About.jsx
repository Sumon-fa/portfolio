import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import sumon from '../../assets/sumon.jpg';

import { useStyles } from '../style/aboutStyle';
import { getResumeData } from '../../store/actions/headerActions';
import { useDispatch, useSelector } from 'react-redux';
import AboutItem from './AboutItem';
import { useTheme } from '@mui/styles';

const About = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();
  const dispatch = useDispatch();
  const { resumeData } = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(getResumeData());
  }, [dispatch]);

  const image = (
    <Grid item xs="4">
      <img
        style={{ maxWidth: '100%', maxHeight: '350px' }}
        alt="sumon"
        src={sumon}
      />
    </Grid>
  );

  return (
    <Card className={classes.cardSection} id="about">
      <CardContent>
        <Typography
          variant="h2"
          component="h3"
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '3rem',
            },
          }}
          className={classes.sectionTitle}
        >
          About
        </Typography>
        <Typography variant="body1" className={classes.cardBody1}>
          I am Sumon Fakir, born and raised in Dhaka, Bangladesh. I have been
          living in Finland for four years. I have completed my vocational
          degree in ICT from Business College Helsinki. As a person I am quiet
          and calm. The most important things that I have patience and
          dedication as well. In my free time, I enjoy spending time with
          friends, like to play chess and watching football.
        </Typography>

        <Grid container spacing={1}>
          {matches ? null : image}
          <Grid item xs="12" md={8}>
            {matches ? null : (
              <Typography variant="subtitle2" className={classes.subTitle1}>
                Web Developer
              </Typography>
            )}
            <Typography variant="body2" className={classes.body2Height}>
              My core compenteces are React with Redux and Redux-toolkit, NodeJs
              , MongoDB, PostgreSql, CDK with cloud formation, AWS Lamda and
              DynamoDB and Devops with AWS.
            </Typography>
            <Grid container rowSpacing={{ sm: 0, md: 6 }}>
              {resumeData.map((data, i) => (
                <AboutItem
                  key={i}
                  email={data.email}
                  github={data.github.slice(0, 18)}
                  linkedin={data.linkedin.slice(0, 24)}
                  city={data.city}
                  phone={data.phone}
                  website={data.website}
                />
              ))}
            </Grid>
            <Typography variant="body2" className={classes.body2Height}>
              I have more than 2 years of experience as a web developer. I have
              advanced knowledge of React with Redux and Redux-toolkit, Node,
              AWS lambda and CSS and with outstanding passion and dedication as
              well. I have worked hard, now I am ready to implement my knowledge
              into practice.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
