import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function Captcha({ type = 'checkbox' }) {
  return (
    <Box
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
          label={'I am not a robot'}
          sx={{ justifyContent: 'center' }}
        />
      </FormGroup>
    </Box>
  )
}

export default Captcha
