import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Table from '../../components/tables/HomeTable'
import  '../../assets/scss/Home.scss'
import HomeCart from  '../../components/carts/HomeCart'

export default function Home() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>

            <HomeCart  
                title="User Management"
                latest_update="September 14, 2016"
                label_users_number = "Users Number"
                users_number = "10"
                label_admin_number = "Admin "
                admin_number = "10"
                label_user_number = "user"
                user_number = "10"
                url="www.google.com"
                />
                
            <HomeCart  
                title="Project Mangment"
                latest_update="September 14, 2016"
                label_users_number = "Project Number"
                users_number = "10"
                label_admin_number = "Admin "
                admin_number = "10"
                label_user_number = "user"
                user_number = "10"
                url="www.google.com"
                />
    
              <HomeCart  
                title="Task Mangment"
                latest_update="September 14, 2016"
                label_users_number = "Task Number"
                users_number = "10"
                label_admin_number = "Admin "
                admin_number = "10"
                label_user_number = "user"
                user_number = "10"
                url="www.google.com"
                />

          </Grid>
        </Grid>
    </Box>
    <Table />
    </div>
   
  );
}
