import React from 'react'
import { styled, useTheme,alpha } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Logo from './Logo'
import Leftside from './Leftside'
import Rightside from './Rightside'
import Iconbuttonopen from './Iconbuttonopen'
import Iconbuttonclose from './Iconbuttonclose'
import Listmenu from '../sidebar/Listmenu'
import IconButtonOpen from './Iconbuttonopen';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function Navbar(props) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const DrawerHeader=props.DrawerHeader
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
  return (
   <>
       <CssBaseline />
       <AppBar position="fixed" open={open} sx={{backgroundColor:'rgb(16, 20, 24)'}}>
          <Toolbar>
            <IconButtonOpen open={open} handleDrawerOpen={handleDrawerOpen}   />
            <Leftside />
            <Rightside />
        </Toolbar>
      </AppBar>
       {/* SideBare */}
      <Drawer variant="permanent" open={open}>
         <DrawerHeader>
         <Logo />
         <Iconbuttonclose theme={theme} handleDrawerClose={handleDrawerClose}   />
         </DrawerHeader>
         <Divider />
         <Listmenu open={open} />

      </Drawer>
   </>
  )
}
