import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import GetPlaylist from './api/api';

export default function MyApp() {
   
  return (
    <React.Fragment>
      <CssBaseline />
      <Button variant="contained">Contained</Button>
    </React.Fragment>
  );
}
