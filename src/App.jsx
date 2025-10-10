import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Detect device type based on user agent
    const userAgent = navigator.userAgent || window.opera

    let redirectUrl = import.meta.env.VITE_FALLBACK_URL || 'https://joinleyamo.com'

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      redirectUrl = import.meta.env.VITE_APP_STORE_URL || redirectUrl
    }
    // Android detection
    else if (/android/i.test(userAgent)) {
      redirectUrl = import.meta.env.VITE_GOOGLE_PLAY_URL || redirectUrl
    }

    // Redirect immediately
    window.location.href = redirectUrl

    // Show fallback button after 2.5 seconds
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleButtonClick = () => {
    window.location.href = 'https://joinleyamo.com'
  }

  return (
    <div className="app">
      <div className="content">
        <p>Redirecting...</p>
        {showButton && (
          <button className="fallback-button" onClick={handleButtonClick}>
            Continue to Website
          </button>
        )}
      </div>
    </div>
  )
}

export default App
