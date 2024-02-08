import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Copyright(props) {
    return (   
      <Box   component="div"  sx={{ width: 'auto',position:'relative',top:'15%',bottom:'0%'}}>
        <Typography variant="body2" color="text.secondary" style={{fontWeight:"bold"}} align="center" {...props}>
              {'Copyright © '}
              <Link  to="https://mui.com/" className='our-website'> Our Website</Link>
              {' '} {new Date().getFullYear()}{'.'}
          </Typography>
      </Box>
 
    );
  }

  