import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function HomeCart(props) {

  let lastUpdate="last Update :"+props.latest_update
  
  return (
    <Grid item xs={4}>
              <Card >
                <CardHeader avatar={ <GroupIcon /> }
                 title= {props.title && props.title}
                  className='font-bold'
                  subheader={lastUpdate && lastUpdate}
                />

                <CardContent>
                  <Typography variant="h5" component="div">
                  {props.label_users_number && props.label_users_number} : <b className='color-title'> {props.users_number && props.users_number} </b>  
                  </Typography>
                
                  <Typography variant="body2">
                  {props.label_admin_number && props.label_admin_number}  :  {props.admin_number && props.admin_number}
                  </Typography>
                  <Typography variant="body2">
                  {props.label_user_number && props.label_user_number}  : {props.user_number && props.user_number}
                  </Typography>
                </CardContent>

                {props.url && 
                <CardActions>
                  <Button variant="outlined" href={props.url}>
                    <VisibilityIcon />  <span className='dashboard-details'>Details</span>
                  </Button>
                </CardActions>
                }

              </Card>
          </Grid>
  )
}
