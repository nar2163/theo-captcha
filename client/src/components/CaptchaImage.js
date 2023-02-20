import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ButtonGroup } from '@mui/material'

export default function CaptchaImage() {
  const [captchaImageData, setCaptchaImageData] = React.useState([])
  const [captchaAnswerArray, setCaptchaAnswerArray] = React.useState([])
  const [captchaQuestionIndex, setCaptchaQuestionIndex] = React.useState()
  const navigate = useNavigate()

  React.useEffect(() => {
    fetchCaptchaImageData()
  }, [])

  const fetchCaptchaImageData = async () => {
    const data = await fetch('/captchaImage')
    const captchaData = await data.json()
    setCaptchaImageData(captchaData[0])
    setCaptchaAnswerArray(captchaData[0].answers)
    setCaptchaQuestionIndex(captchaData[0].index)
    console.log(captchaQuestionIndex)
  }

  const handleButtonClick = async (event) => {
    //to do check answer
    const data = await fetch(
      `/verifyPictureCaptcha/${event.target.value}/${captchaQuestionIndex}`,
    )
    const answerResult = await data.json()

    if (answerResult[0].isCorrectAnswer) {
      navigate('/home')
    } else {
      window.location.reload()
    }
  }
  console.log(captchaImageData)
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
          <Typography gutterBottom variant="body2" component="div">
            You sure you're not a robot?
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {captchaImageData.question}
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonGroup variant="text" aria-label="outlined button group">
            {captchaAnswerArray.map((answer) => {
              return (
                <Button value={answer} onClick={handleButtonClick}>
                  {answer}
                </Button>
              )
            })}
          </ButtonGroup>
        </CardActions>
      </Card>
    </div>
  )
}
