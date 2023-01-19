import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useStyles } from '../style/portfolioStyle';
import {
  Container,
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Link,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { projectData } from '../componentData/portfolioData';
import { useTheme } from '@mui/styles';

export default function Portfolio() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box className={classes.sectionDark} id="portfolio">
      <Typography
        variant="h2"
        color="secondary"
        sx={{
          textAlign: 'center',
          marginBottom: '50px',
          [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
          },
        }}
      >
        Portfolio
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {projectData.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
              <Link rel="noreferrer" target="_blank" href={item.url}>
                <ImageListItem
                  target="_blank"
                  className={classes.imageContainer}
                >
                  <img
                    className={classes.responsiveImg}
                    src={item.img}
                    srcSet={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                  <div className={classes.content}></div>
                </ImageListItem>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
