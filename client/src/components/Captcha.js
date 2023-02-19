import * as React from 'react'
import useMouse from '@react-hook/mouse-position'
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

function Captcha({ type = 'checkbox' }) {
  const MIN_REQ_HOVER_TIME = 3
  const [checkboxValue, setCheckboxValue] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [hoverTimeElapsed, setHoverTimeElapsed] = React.useState(0)
  const ref = React.useRef(null)
  const hoveringMouse = useMouse(ref, { isOver: false })

  React.useEffect(() => {
    if (hoveringMouse.isOver) {
      const timer = setInterval(() => {
        setHoverTimeElapsed((prevTime) => prevTime + 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [hoveringMouse])

  // NOTE: if the user's mouse is in the target Box for less than 3
  // seconds the secondary captcha triggers
  console.log(hoverTimeElapsed)

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked)
    if (hoverTimeElapsed < MIN_REQ_HOVER_TIME) {
      setModalOpen(true)
    }
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  const modalWindow = (
    <Dialog
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )

  return modalOpen ? (
    modalWindow
  ) : (
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
  )
}

export default Captcha
