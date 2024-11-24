import * as React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './component/navbar/navbar';
import FormDialog from './component/playlist-form/playlistForm';
import usePlaylists from './hooks/usePlaylists';
const App = () => {
const {playlists,getPlaylistById}=usePlaylists()
  
  console.log(playlists);
  
  return (
    <>
      <CssBaseline>
      <Navbar getPlaylistById={getPlaylistById}/>
      <FormDialog/>
      </CssBaseline>
    </>
  );
};
export default App;
