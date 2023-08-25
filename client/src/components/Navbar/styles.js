import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    opacity:'0.7',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '3em',
    fontWeight: 600,
    opacity:'1',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
    },
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
    opacity:'1',
    [theme.breakpoints.down('xs')]: {
      width:'40px',
      height:'40px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    opacity:'1',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    opacity:'1',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      
    },
  },
  logout: {
    marginLeft: '20px',
    opacity:'1',
    [theme.breakpoints.down('xs')]: {
      width:'30px',
      height:'30px',
      fontSize: '0.7em',
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    opacity:'1',
    [theme.breakpoints.down('xs')]: {
      width:'30px',
      height:'30px',
      fontSize: '0.9em',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    opacity:'1',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    opacity:'1',
  },
}));