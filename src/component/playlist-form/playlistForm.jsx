import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PlaylistForm=({open,handleClose,getPlaylistId})=>{
 const [state,setState]=useState('')
 const handleSubmit=(e)=>{
    if(!state){
        alert('Invalid Url')
    }else{
        
        getPlaylistId(state);
        setState('')
        handleClose()
    }
    
 }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="playlistId"
            name="playlistId"
            label="Your Playlist Id"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit} >Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default PlaylistForm