import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import GetPlaylist from './api/api';
import usePlaylists from './hooks/usePlaylists';

export default function MyApp() {
  const {getPlaylistById,playlists}=usePlaylists()
  React.useEffect(()=>{
    getPlaylistById('PLXCoHsJ9oLedeccx2fgbML0OSAy72vraO')
  },[])
  console.log(playlists);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Button variant="contained">Contained</Button>
    </React.Fragment>
  );
}
