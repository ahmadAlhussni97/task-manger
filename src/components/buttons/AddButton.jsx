import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createSvgIcon } from '@mui/material/utils';

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

export default function AddButton(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className='button-add-project'>{props.title}<PlusIcon /></Button>
    </Stack>
  )
}
