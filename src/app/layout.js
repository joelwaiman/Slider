import './globals.css'

export const metadata = {
  title: 'Zzzlider',
  description: 'Idk men',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
