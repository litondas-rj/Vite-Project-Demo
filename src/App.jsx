import * as React from 'react';
import { CssBaseline } from '@mui/material';
import usePlaylists from './hooks/usePlaylists';
import Navbar from './component/navbar/navbar';
import FormDialog from './component/playlist-form/playlistForm';
const App = () => {
  const {getPlaylistById,playlists}=usePlaylists()
React.useEffect(()=>{
  getPlaylistById('PLXCoHsJ9oLedeccx2fgbML0OSAy72vraO')
},[])
  console.log(playlists);
  
  return (
    <>
      <CssBaseline>
      <Navbar></Navbar>
      <FormDialog/>
      </CssBaseline>
    </>
  );
};
export default App;
