import * as React from 'react'
import { ImageList, ImageListItem } from '@mui/material'

function Home() {
  const [photos, setPhotos] = React.useState([])

  React.useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    const data = await fetch('/home')
    const photos = await data.json()
    console.log(photos)
    setPhotos(photos.privatePhotos)
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}
    >
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {photos.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="kitty-photos"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default Home
