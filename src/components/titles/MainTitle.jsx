import * as React from 'react';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  fontSize:'25px',
  fontWeight:'bold'
}));

export default function MainTitle(props) {
  return <Div>{props.title}</Div>;
}