import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: 'relative',
  },
  root: {
    display: 'flex',

    justifyContent: 'center',
    alignContent: 'center',
  },
  sectionDark: {
    padding: theme.spacing(10, 5, 0, 5),
  },
  responsiveImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: '200ms ease-in-out',
  },
  content: {
    position: 'absolute',
    inset: '0',
    color: '#000',
    backgroundColor: 'rgba(255,255,255,.4)',
    transition: '200ms ease-in-out',
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },
  },
}));
