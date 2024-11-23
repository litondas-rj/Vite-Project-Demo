import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import usePlaylists from './hooks/usePlaylists';


const App = () => {
  const {getPlaylistById,playlists}=usePlaylists()
React.useEffect(()=>{
  getPlaylistById('PLXCoHsJ9oLedeccx2fgbML0OSAy72vraO')
},[])
  console.log(playlists);
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mui Course
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default App;
