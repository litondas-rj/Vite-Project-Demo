import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

const PlaylistCard=({playlistThumbnail,playlistTitle,playlistDescription})=> {
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Card sx={{ maxWidth: 345 }}>
     
      <CardMedia
        component="img"
        src={`${playlistThumbnail}`}
        alt={playlistTitle}
      />
    
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {playlistTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {playlistDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Play</Button>
        
      </CardActions>
    </Card>
  );
}

export default PlaylistCard