import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, Stack } from '@mui/material';
import PlaylistForm from '../playlist-form/playlistForm';
const Navbar=({getPlaylistById})=> {
    const [open, setOpen] =useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const getPlaylistId=(playlistId)=>{
        getPlaylistById(playlistId)
       
    }   
  return (
    
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Stack spacing={1} sx={{flexGrow:1}}>
            <Typography variant='h6'>Core Concept</Typography>
          <Typography variant="body1">
            Js Course
          </Typography>
          </Stack>
          <Button onClick={handleClickOpen} variant='contained'>add your link</Button>
          <PlaylistForm open={open} handleClose={handleClose} getPlaylistId={getPlaylistId}/>
        </Toolbar>
      </AppBar>
    </Box>
    <Container>
        <Typography variant='h1'>Hello</Typography>
    </Container>
    </>
  );
}
export default Navbar