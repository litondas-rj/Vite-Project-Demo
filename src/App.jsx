import * as React from 'react';
import { Container, CssBaseline, Stack } from '@mui/material';
import Navbar from './component/navbar/navbar';
import FormDialog from './component/playlist-form/playlistForm';
import usePlaylists from './hooks/usePlaylists';
import PlaylistCard from './component/playlistCard-item/playlistCard';

const App = () => {
const {playlists,getPlaylistById}=usePlaylists()
  
  console.log(playlists);
  const playlistArry=Object.values(playlists)
  return (
    <>
      <CssBaseline>
      <Navbar getPlaylistById={getPlaylistById}/>
      <Container>
        <FormDialog/>
        <Stack direction={'row'} spacing={3}>
        {playlistArry.length > 0 &&(
          playlistArry.map((item)=>
           
              <PlaylistCard playlistThumbnails={item.playlistThumbnails} playlistTitle={item.playlistTitle} PlaylistDescription={item.PlaylistDescription}/>
        
          )
        )}
        </Stack>
      </Container>
      </CssBaseline>
    </>
  );
};
export default App;
