# Leyamo ScanMe - Smart QR Code Redirect

A fast, lightweight React app that detects user devices and redirects them to the appropriate app store or website. Designed for QR codes on printed materials at running events.

## Features

- **Smart Device Detection**: Automatically detects iOS, Android, and desktop devices
- **Fast Redirects**: 650ms delay with smooth loading animation
- **Beautiful UI**: Purple gradient background with device-specific emojis
- **Mobile Optimized**: Fully responsive design for all screen sizes
- **Production Ready**: Optimized for Vercel deployment

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**

   Copy the example file and fill in your URLs:
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` with your actual URLs:
   ```env
   VITE_APP_STORE_URL=https://apps.apple.com/app/your-app-id
   VITE_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=your.package.name
   VITE_FALLBACK_URL=https://joinleyamo.com
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Device Detection Logic

- **iOS**: Redirects to App Store (iPhone, iPad, iPod)
- **Android**: Redirects to Google Play Store
- **Desktop/Other**: Redirects to fallback URL (main website)

## Deployment to Vercel

1. **Connect Repository**
   - Push this repository to GitHub
   - Import project in Vercel dashboard

2. **Configure Environment Variables**

   In Vercel project settings, add these environment variables:
   - `VITE_APP_STORE_URL`
   - `VITE_GOOGLE_PLAY_URL`
   - `VITE_FALLBACK_URL`

3. **Deploy**
   - Vercel will automatically detect Vite and build
   - Your app will be live at scanme.joinleyamo.com

## Project Structure

```
leyamo-scanme/
├── src/
│   ├── App.jsx          # Main redirect logic and device detection
│   ├── App.css          # Gradient background and loading animation
│   └── main.jsx         # React entry point
├── .env.local.example   # Environment variable template
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Tech Stack

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **CSS3**: Gradient backgrounds and animations
- **No external dependencies**: Pure React for maximum performance

## License

© 2025 Leyamo. All rights reserved.
