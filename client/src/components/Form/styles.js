
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  container:{
    borderRadius: 15,
    alignItems: 'center',
    padding: '10px 50px',
  },
  
  card:{
    borderRadius: 15,
    padding:'20px',
    alignItems: 'center',
  },
  cardMedia:{
    borderRadius: 15,
    padding:'20px',
    alignItems: 'center',
  },
  video:{
    marginLeft:'300px',
  },
  status:{
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      width:'30px',
      height:'30px',
      fontSize: '0.9em',
  },
},
  button:{
    margin: theme.spacing(1),
    marginLeft:'285px',
    alignItems: 'center',
    textAlign: 'center',
  }
  
}));
