import { makeStyles } from '@mui/styles';
import headerImage from '../../assets/headerImage.png';
export const useStyles = makeStyles((theme) => ({
  photo: {
    backgroundImage: `url(${headerImage})`,
    height: 'auto',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  headerTitle: {
    fontSize: '4.5rem !important',
    fontWeight: '700 !important',
    fontFamily: 'Raleway !important',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem !important',
      padding: '10px !important',
    },
  },
  headerContent: {
    fontSize: '2.5rem !important',
    fontWeight: '600 !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem !important',
    },
  },
  defaultPadding: {
    padding: '0px !important',
  },
}));
