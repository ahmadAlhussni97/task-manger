import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task';
import GroupIcon from '@mui/icons-material/Group';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Listmenu(props) {

  return (
          <List>
            {['Dashbaord', 'Projects', 'Tasks', 'Users','Roles','Settings'].map((text, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton sx={{minHeight: 48,justifyContent: props.open ? 'initial' : 'center',px: 2.5,}}>
                    <ListItemIcon sx={{minWidth: 0,  mr: props.open ? 3 : 'auto',justifyContent: 'center' }}>
                        {(text=='Dashbaord')?<GridViewIcon  />:'' }   
                        {(text=='Projects')?<AccountTreeIcon  />:'' }   
                        {(text=='Tasks')?<TaskIcon  />:'' }   
                        {(text=='Users')?<GroupIcon  />:'' }   
                        {(text=='Roles')?<WorkspacePremiumIcon  />:'' }   
                        {(text=='Settings')?<SettingsIcon  />:'' }   
                    </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
  )
}
