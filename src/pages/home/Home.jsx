import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task';
import Table from '../../components/tables/Table'
import  '../../assets/scss/Home.scss'


export default function Home() {
  return (
    <div>
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>

          <Grid item xs={4}>
              <Card >
                <CardHeader avatar={ <GroupIcon /> }
                  title="User Managment"
                  className='font-bold'
                  subheader="last Upadte : September 14, 2016"
                />

                <CardContent>
                  <Typography variant="h5" component="div">
                    User Number : <b className='color-title'> 45 </b>  
                  </Typography>
                
                  <Typography variant="body2">
                  Admin : 14
                  </Typography>
                  <Typography variant="body2">
                  User : 14
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" href="#outlined-buttons">
                <VisibilityIcon />    <span className='dashboard-details'>Details</span>
                </Button>
                </CardActions>
              </Card>
          </Grid>

          <Grid item xs={4}>
    
            <Card >
        <CardHeader avatar={ <AccountTreeIcon /> }
          title="Project Managment"
          className='font-bold'
          subheader="last Upadte : September 14, 2016"
        />

          <CardContent>
            <Typography variant="h5" component="div">
              Project Number :  <b className='color-title'> 45 </b> 
            </Typography>
          
            <Typography variant="body2">
            Admin : 14
            </Typography>
            <Typography variant="body2">
            User : 14
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" href="#outlined-buttons">
          <VisibilityIcon />    <span className='dashboard-details'>Details</span>
          </Button>
          </CardActions>
            </Card>

           
          </Grid>

          <Grid item xs={4}>
            <Card >
              <CardHeader avatar={ <TaskIcon /> }
                title="Task Managment"
                className='font-bold'
                subheader="last Upadte : September 14, 2016"
              />

              <CardContent>
                <Typography variant="h5" component="div">
                  Task Number :  <b className='color-title'> 45 </b> 
                </Typography>
              
                <Typography variant="body2">
                Admin : 14
                </Typography>
                <Typography variant="body2">
                User : 14
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" href="#outlined-buttons">
              <VisibilityIcon />    <span className='dashboard-details'>Details</span>
              </Button>
              </CardActions>
           </Card>
          </Grid>

        </Grid>
      </Grid>
    </Box>
    <Table />
    </div>
   
  );
}
