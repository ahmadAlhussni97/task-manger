import React from 'react'
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export default function Iconbuttonclose(props) {
  return (
    <IconButton onClick={props.handleDrawerClose}>
    {props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
  )
}
