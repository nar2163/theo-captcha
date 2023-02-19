const express = require('express')
const router = express.Router()

const rawCaptchaImageData = {
  1: {
    imageUrl: 'https://i.ibb.co/Y451Wtv/gettyimages-979081604-612x612.jpg',
    question: 'how many good boys are in this photo?',
    count: 2,
    type: 'pic',
  },
  2: {
    imageUrl: 'https://i.ibb.co/W3PNnfy/bulldog-cat-kiss.webp',
    question: 'how many good boys are in this photo?',
    count: 2,
    type: 'pic',
  },
  3: {
    imageUrl: 'https://i.ibb.co/q0tv2q2/3-puppies-on-chair.jpg',
    question: 'how many good boys are in this photo?',
    count: 3,
    type: 'pic',
  },
  4: {
    imageUrl:
      'https://i.ibb.co/rfrGLCF/photo-1573497491208-6b1acb260507-ixlib-rb-4-0.jpg',
    question: 'Are these people talking or scuba diving?',
    answer: 'talking',
    type: 'question',
  },
  5: {
    imageUrl:
      'https://i.ibb.co/PrCbJYT/95277fb9-823b-490b-97eb-20659a5563b2-USP-Olympics-Swimming-Evening-Session.jpg',
    question: 'Is this person swimming or drowning?',
    answer: 'swimming',
    type: 'question',
  },
}

router.get('/captchaImage', (req, res) => {
  const currIndex = Math.floor(Math.random() * 5) + 1
  const currCaptchaData = rawCaptchaImageData[currIndex]

  const str = [
    {
      imageUrl: currCaptchaData.imageUrl,
      question: currCaptchaData.question,
      index: currIndex,
    },
  ]

  console.log(JSON.stringify(str))

  res.end(JSON.stringify(str))
})

router.get('/verifyCheckboxCaptcha/:mouseHoverDuration', (req, res) => {
  const userMouseDuration = req.params.mouseHoverDuration
  const MIN_REQ_HOVER_TIME = 2
  const str = [
    {
      isRobot: userMouseDuration > MIN_REQ_HOVER_TIME ? false : true,
    },
  ]

  console.log(JSON.stringify(str))

  res.end(JSON.stringify(str))
})

module.exports = router
