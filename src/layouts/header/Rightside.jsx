import React,{useContext } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import {UserContext} from '../../App'

export default function Rightside() {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const logoutContext = useContext(UserContext);
    const navigate = useNavigate();


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

  return (<>
    <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
            <MailIcon />
        </Badge>
        </IconButton>

        <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit">
        <Badge badgeContent={17} color="error">
            <NotificationsIcon />
        </Badge>
        </IconButton>

        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            </Tooltip>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            
            <MenuItem onClick={()=>navigate('/profile')}>
            <ListItemIcon>
                <PersonAdd fontSize="small" />
            </ListItemIcon>
            Profile
            </MenuItem>

            <MenuItem onClick={()=>navigate('/setting')}>
            <ListItemIcon>
                <Settings fontSize="small" />
            </ListItemIcon>
            Setting
            </MenuItem>

            <MenuItem onClick={()=>logoutContext()}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Logout
            </MenuItem>
            </Menu>
        </Box>
   </Box>
    </>)
}
