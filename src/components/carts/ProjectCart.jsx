import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ProjectCart(props) {

const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       {props.img  &&  <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />}
        <CardContent>
          { props.name &&   <Typography gutterBottom variant="h5" component="div">
            {props.name}
            </Typography>
          }

          {props.description &&
            <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          }
        </CardContent>
      </CardActionArea>
      {props.id && 
      <CardActions>
        <Button onClick={()=>navigate('/projects/'+props.id+'/tasks')} size="large" color="primary">
          Tasks
        </Button>
      </CardActions>
      }
    </Card>
  );
}
