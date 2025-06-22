import * as React from 'react';
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
import HomeTable from '../../components/tables/HomeTable'
import Table from '../../components/tables/HomeTable'
import '../../assets/scss/Home.scss'
import HomeCart from '../../components/carts/HomeCart'

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>

            <HomeCart
              title="User Management"
              latest_update="September 14, 2016"
              label_users_number="Users Number"
              users_number="10"
              label_admin_number="Admin "
              admin_number="10"
              label_user_number="user"
              user_number="10"
              url="www.google.com"
            />

            <HomeCart
              title="Project Mangment"
              latest_update="September 14, 2016"
              label_users_number="Project Number"
              users_number="10"
              label_admin_number="Admin "
              admin_number="10"
              label_user_number="user"
              user_number="10"
              url="www.google.com"
            />

            <HomeCart
              title="Task Mangment"
              latest_update="September 14, 2016"
              label_users_number="Task Number"
              users_number="10"
              label_admin_number="Admin "
              admin_number="10"
              label_user_number="user"
              user_number="10"
              url="www.google.com"
            />

          </Grid>

          <Grid item xs={4}>

            <Card >
              <CardHeader avatar={<AccountTreeIcon />}
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
              <CardHeader avatar={<TaskIcon />}
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
      </Box>
      <HomeTable />
    </div>

  );
}
