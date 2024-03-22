import './globals.css'

export const metadata = {
  title: 'Weather by me',
  description: 'Idk men',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
