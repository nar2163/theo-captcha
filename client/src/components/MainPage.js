import * as React from 'react'
import LoginPage from './LoginPage'

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return isLoggedIn ? <div>you're logged in baby</div> : <LoginPage />
}

export default MainPage
