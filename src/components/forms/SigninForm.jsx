import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Typography} from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../layouts/footer/Copyright';
import ErrorAlert from '../../components/alerts/ErrorAlert';
import Loading from '../loaders/Loading'

export default function SigninForm(props) {

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
                Sign in
              </Typography>
              <Box component="form" onSubmit={props.handleSubmit} noValidate sx={{ mt: 1 }}>
                <p>{(props.handleErorr.catchingError)?  <ErrorAlert message={props.handleErorr.catchingError} />  : ''} </p>
                <p>{(props.handleErorr.email)?  <ErrorAlert message={props.handleErorr.email} />  : ''} </p>
                <p>{(props.handleErorr.password)?  <ErrorAlert message={props.handleErorr.password} />  : ''} </p>
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox  name='remember' value="remember" color="primary" />}
                  label="Remember me"/>
                  {(props.isloading) ? <Loading  /> :
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}>
                      Sign In
                    </Button>
                  }    
                <Grid container>
                  <Link  to="/forgot-password">
                      Forgot password
                  </Link>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
    </div>

  )
}


