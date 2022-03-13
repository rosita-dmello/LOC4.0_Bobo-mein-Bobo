import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function MediaCard({sourceUrl, title, readyInMinutes, day}) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          {day}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ready in {readyInMinutes}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={sourceUrl} style={{textDecoration: "none"}} target="_blank">
        <Button size="small">View Recipe</Button>
        </a>
        
        
      </CardActions>
    
    </Card>
  );
}