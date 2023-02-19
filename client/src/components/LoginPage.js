//template for login page taken from https://github.com/mui/material-ui/blob/v5.11.9/docs/data/material/getting-started/templates/sign-in-side/SignInSide.js

import * as React from 'react'
import useMouse from '@react-hook/mouse-position'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const theme = createTheme()

function LoginPage() {
  const [checkboxValue, setCheckboxValue] = React.useState(false)
  const [hoverTimeElapsed, setHoverTimeElapsed] = React.useState(0)
  const [isRobot, setIsRobot] = React.useState(true)
  const ref = React.useRef(null)
  const hoveringMouse = useMouse(ref, { isOver: false })
  const navigate = useNavigate()

  React.useEffect(() => {
    if (hoveringMouse.isOver) {
      const timer = setInterval(() => {
        setHoverTimeElapsed((prevTime) => prevTime + 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [hoveringMouse, isRobot])

  // NOTE: if the user's mouse is in the target Box for less than 3
  // seconds the secondary captcha triggers
  console.log(hoverTimeElapsed)

  const handleCheckboxChange = async (event) => {
    setCheckboxValue(event.target.checked)
    const data = await fetch(`/verifyCheckboxCaptcha/${hoverTimeElapsed}`)
    const isSuspectedRobot = await data.json()
    setIsRobot(isSuspectedRobot[0].isRobot)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
    //check login against data in server
    //test

    navigate(isRobot ? '/captchaImage' : '/home')
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.ibb.co/GCbRYHJ/kitt2.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Theo's Pics
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
              <Typography
                component="h2"
                variant="h6"
                style={{ marginTop: '1rem' }}
              >
                Not a member? No worries...
              </Typography>
              <Typography component="h1" style={{ marginTop: '1rem' }}>
                Just fill out the form, sign in <br></br> and we'll take care of
                the rest.
              </Typography>
              <Box
                ref={ref}
                sx={{
                  background: '#D3D3D3',
                  padding: '7px 15px',
                  borderRadius: '20px',
                  border: 0,
                  position: 'relative',
                  margin: '40px',
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={`I am not a robot`}
                    sx={{ justifyContent: 'center' }}
                  />
                </FormGroup>
              </Box>
              <p sx={{ fontSize: '10rem' }}></p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                value={'sign_in'}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default LoginPage
