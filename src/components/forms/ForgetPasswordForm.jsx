import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {TextField} from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Typography} from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../layouts/footer/Copyright';
import ErrorAlert from '../../components/alerts/ErrorAlert';
import Loading from '../loaders/Loading'


export default function ForgetPasswordForm(props) {

  return ( 
    <div className={props.isloading ? 'opacity-0-5':''}>
        <ThemeProvider theme={createTheme()}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                 Forgot password
              </Typography>
              <Box component="form" onSubmit={props.handleSubmit} noValidate sx={{ mt: 1,width:'100%' }}>
                <p>{(props.handleErorr.catchingError)?  <ErrorAlert message={props.handleErorr.catchingError} />  : ''} </p>
                <p>{(props.handleErorr.email)?  <ErrorAlert message={props.handleErorr.email} />  : ''} </p>
                <TextField 
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                  {(props.isloading) ? <Loading  /> :
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}>
                      Send
                    </Button>
                  }    
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
    </div>

  )
}


