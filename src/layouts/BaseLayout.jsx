import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom'
import Navbar from './header/Navbar'
import  '../assets/scss/Layout_dark.scss'
import  '../assets/scss/Layout.scss'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Layout() {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Navbar DrawerHeader={DrawerHeader} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}




