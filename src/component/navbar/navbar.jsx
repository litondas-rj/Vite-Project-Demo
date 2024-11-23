import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, Stack } from '@mui/material';
const Navbar=()=> {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Button variant='contained'>add your link</Button>
          
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