import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function IconButtonOpen(props) {
  return (
    <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={props.handleDrawerOpen}
    edge="start"
    sx={{ marginRight: 5,...(props.open && { display: 'none' })}}>
    <MenuIcon />
  </IconButton>

  )
}
