import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function CaptchaImage() {
  const [captchaImageData, setCaptchaImageData] = React.useState([])

  React.useEffect(() => {
    fetchCaptchaImageData()
  }, [])

  const fetchCaptchaImageData = async () => {
    const data = await fetch('/captchaImage')
    const captchaData = await data.json()
    setCaptchaImageData(captchaData[0])
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10rem',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          src={`${captchaImageData.imageUrl}`}
          image={`${captchaImageData.imageUrl}`}
          title="captcha-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            You sure you're not a robot?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {captchaImageData.question}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}
