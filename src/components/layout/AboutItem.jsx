import React, { Fragment } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LanguageIcon from '@mui/icons-material/Language';
import {
  Avatar,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useStyles } from '../style/aboutStyle';

const AboutItem = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs="12" md="6">
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.bgcolor}>
                <EmailIcon className={classes.icon} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Link
                color="secondary"
                underline="none"
                href="mailto:fakrsumon78@gmail.com"
              >
                {props.email}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.bgcolor}>
                <PhoneIphoneIcon className={classes.icon} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.phone} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.bgcolor}>
                <GitHubIcon className={classes.icon} />
              </Avatar>
            </ListItemAvatar>
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Sumon-fa"
              underline="none"
              color="secondary"
            >
              {props.github}
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs="12" md="6">
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.bgcolor}>
              <LinkedInIcon className={classes.icon} />
            </Avatar>
          </ListItemAvatar>
          <Link
            underline="none"
            color="secondary"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sumon-fakir-362765214/"
          >
            {props.linkedin}
          </Link>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.bgcolor}>
              <LocationCityIcon className={classes.icon} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.city} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.bgcolor}>
              <LanguageIcon className={classes.icon} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.website} />
        </ListItem>
      </Grid>
    </Fragment>
  );
};

export default AboutItem;
