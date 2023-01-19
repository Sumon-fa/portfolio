import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: 'auto',
  },
  icon: {
    marginLeft: 'auto !important',
    height: '50px !important',
    width: '50px !important',
  },
  drawerIcon: {
    height: '40px !important',
    width: '40px !important',
  },
  drawer: {
    backgroundColor: '#111 !important',
    width: '30%',
    
  },
  drawerItem: {
    ...theme.typography.tab,
    fontSize: '1.2rem',
  },
  dividerColor: {
    backgroundColor: '#fff!important',
  },
}));
