import * as React from 'react'
import useMouse from '@react-hook/mouse-position'
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function Captcha({ type = 'checkbox' }) {
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

  return (
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
              defaultChecked
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
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
