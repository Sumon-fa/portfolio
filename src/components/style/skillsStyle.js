import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  cardSection: {
    margin: theme.spacing(10, 0, 10, 0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(10, 2, 10, 2),
    },
  },
  sectionTitle: {
    fontFamily: 'auto !important',
    fontWeight: '400 !important',
    marginBottom: '50px !important',
  },
}));
