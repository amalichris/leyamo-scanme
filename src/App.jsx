import { useEffect } from 'react'
import './App.css'

function App() {
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
  }, [])

  return (
    <div className="app">
      <div className="content">
        <p>Redirecting...</p>
      </div>
    </div>
  )
}

export default App
