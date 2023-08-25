import React,{useState,useEffect} from 'react'
import { Avatar, Button, Paper,Grid, Typography,Container } from '@material-ui/core'
import {GoogleLogin} from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyle from './styles'
import Input from './Input'
import Icon from './icon'
import {signin, signup} from '../../actions/auth'
import { loadGapiInsideDOM } from "gapi-script";
const Auth = () => {

      const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
      const [fromData, setFormData] = useState(initialState);
      
      const [isSignup, setIsSignup] = useState(false);
      const dispatch = useDispatch();
      const history = useHistory();
      const classes = useStyle();

      const [showPassword, setShowPassword] = useState(false);
       // Toggle password visibility
      const handleShowPassword = () => setShowPassword(showPassword);

      // Switch between Sign In and Sign Up forms
      // It represents the current value of the state variable isSignup before any update.
      const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
      };

      // Form submit handler for Sign In and Sign Up
      const handleSubmit = (e)=>{ 
        e.preventDefault()
         // Check if the form is for Sign Up or Sign In
        if (isSignup) {
          dispatch(signup(fromData,history))
        }else{
          dispatch(signin(fromData,history))
        }
      }

      // Handle form input changes
      const handleChange = (e)=>{
        setFormData({...fromData,[e.target.name]:e.target.value})
       }

       // Google Sign-In success handler
      const googleSuccess = async (res)=>{
        const result = res?.profileObj  // Get the user profile data from the response
        const token = res?.tokenId   // Get the Google access token from the response
        try {
          dispatch({type:'AUTH',data:{result, token}})// Dispatch the 'AUTH' action with user data to the Redux store
          history.push('/')  // Redirect 

        } catch (error) {
          console.log(error)
        }
      }

      // Google Sign-In failure handler
      const googleFailure = (error)=>{
        console.log(error)
        console.log('Google Sign In was unsuccessful.Try again Later')
      }
//for cross browser
// Load Google API inside the DOM
      useEffect(() => {
        (async () => {
          await loadGapiInsideDOM();  // Function to load the Google API (defined in "gapi-script" package)
        })();
      });

    
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography variant='h5' >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {
                isSignup && (
                  <>
                      <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                      <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                  </>
                )}
                <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword}/>
                { isSignup &&<Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
            </Grid>

            <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
          <GoogleLogin
                clientId="519702687638-nph82ah0spkmfkg47f1vj615gvdn2pgi.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                    Google Sign In
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
                />  
                
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Button onClick={switchMode}>
                  { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }
                </Button>
              </Grid>
            </Grid>
          </form>
      </Paper>
    </Container>
  )
}


export default Auth  