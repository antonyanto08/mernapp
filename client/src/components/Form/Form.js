import React from 'react';
import { TextField, Button, Typography, Paper, CardMedia, Card, Container, Grid } from '@material-ui/core';
import useStyles from './styles';
import { ReactMediaRecorder } from "react-media-recorder";

const Form = ({ mediaRecorder  }) => {

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  if(!user?.result?.name){
    return(
      <Container className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
        <Typography variant='h6' align='center'>
          Please Sign In to create a Video.
        </Typography></Paper>
      </Container>
    )
  }

  return(
    
    <Card className={classes.card}>
    <ReactMediaRecorder className={classes.recorder}
       video 
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <CardMedia className={classes.CardMedia}>
      
          <Typography className={classes.status} variant="h6" color='primary'>Status:{status}</Typography>
          <Grid><video className={classes.video} src={mediaBlobUrl} controls autoPlay loop width={600} height={400}/></Grid>
          <Button variant="contained" className={classes.button} color="secondary" onClick={startRecording}>Start Recording</Button>
          <Button variant="contained" className={classes.button} color="primary" onClick={stopRecording}>Stop Recording</Button>
          
        </CardMedia>
      )}
    />
  </Card>
  
  );
      }

export default Form;
