import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProjectCart from '../../components/carts/ProjectCart'
import '../../assets/scss/projects.scss'
import MainTitle from '../../components/titles/MainTitle';
import AddButton from '../../components/buttons/AddButton';


export default function Home() {
  return (
    <div>
    <Grid container spacing={2}>
      <Grid item xs={11}>
        <MainTitle title="All Projects" />
      </Grid>
      <Grid item xs={1}>
        <AddButton title="Add" />
      </Grid>
    </Grid>
   
    <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={3}  >
            <ProjectCart 
              id='1'
              img ='https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg'
              name ='fileHippo'
              description ='When it comes to setting goals in project management, many people think of goals related to keeping a project on time and on budget. While there is a lot that goes into keeping a project within those constraints—there is so much more to project management than just time and money'
              />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
          <ProjectCart 
              id='2'
              img ='https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg'
              name ='fileHippo'
              description ='When it comes to setting goals in project management, many people think of goals related to keeping a project on time and on budget. While there is a lot that goes into keeping a project within those constraints—there is so much more to project management than just time and money'
              />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
          <ProjectCart 
              id='3'
              img ='https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg'
              name ='fileHippo'
              description ='When it comes to setting goals in project management, many people think of goals related to keeping a project on time and on budget. While there is a lot that goes into keeping a project within those constraints—there is so much more to project management than just time and money'
              />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
          <ProjectCart 
               id='4'
              img ='https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg'
              name ='fileHippo'
              description ='When it comes to setting goals in project management, many people think of goals related to keeping a project on time and on budget. While there is a lot that goes into keeping a project within those constraints—there is so much more to project management than just time and money'
              />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
          <ProjectCart 
              id='5'
              img ='https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg'
              name ='fileHippo'
              description ='When it comes to setting goals in project management, many people think of goals related to keeping a project on time and on budget. While there is a lot that goes into keeping a project within those constraints—there is so much more to project management than just time and money'
              />
          </Grid>
          <Grid item xs={2} sm={4} md={3} >
          <ProjectCart 
              img ='https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg'
              name ='fileHippo'
              description ='When it comes to setting goals in project management, many people think of goals related to keeping a project on time and on budget. While there is a lot that goes into keeping a project within those constraints—there is so much more to project management than just time and money'
              url ='www.facebook.com'
              />
          </Grid>
      </Grid>
    </Box>
    </div>
   
  );
}
