import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  cardSection: {
    margin: theme.spacing(10, 10, 0, 10),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(10, 3, 0, 3),
    },
  },
  sectionTitle: {
    fontFamily: 'auto !important',
    fontWeight: '400 !important',
    marginTop: '6px !important',
    marginBottom: '6px !important',
  },
  cardBody1: {
    marginBottom: '25px !important',
    [theme.breakpoints.down('md')]: {
      marginBottom: '5px !important',
    },
  },
  subTitle1: {
    fontSize: '1.5rem !important',
    marginBottom: '.5rem !important',
  },
  icon: {
    color: 'bisque',
  },
  bgcolor: {
    backgroundColor: '#f5f5f5 !important',
  },
  body2Height: {
    lineHeight: '1.5rem !important',
    [theme.breakpoints.down('md')]: {
      marginTop: '12px !important',
    },
  },
}));
