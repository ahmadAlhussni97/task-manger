import React,{ useState} from 'react'
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
import { Link } from "react-router-dom";
import {getMenuName} from '../../Helpers/Functions'
import { useNavigate } from "react-router-dom";

export default function Listmenu(props) { 

  const[menuActive,setMenuActive]=useState('')

  return (
          <List>
            {['', 'projects', 'tasks', 'users','roles','setting'].map((text, index) => (
              <Link to={'/'+text} key={index} className='link-sidebar'>
                <ListItem  onClick={()=>setMenuActive(text)}   
                  className={menuActive===text?'active-menu':''}  disablePadding sx={{ display: 'block' }}>
                  <ListItemButton sx={{minHeight: 48,justifyContent: props.open ? 'initial' : 'center',px: 2.5,}}>
                      <ListItemIcon sx={{minWidth: 0,  mr: props.open ? 3 : 'auto',justifyContent: 'center' }}>
                          {(text==='')?<GridViewIcon  />:'' }   
                          {(text==='projects')?<AccountTreeIcon  />:'' }   
                          {(text==='tasks')?<TaskIcon  />:'' }   
                          {(text==='users')?<GroupIcon  />:'' }   
                          {(text==='roles')?<WorkspacePremiumIcon  />:'' }   
                          {(text==='setting')?<SettingsIcon  />:'' }   
                      </ListItemIcon>
                    <ListItemText primary={getMenuName(text)} sx={{ opacity: props.open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
  )
}
