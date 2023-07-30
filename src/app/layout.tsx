import './globals.css'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" title='Card Github'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap" rel="stylesheet"/>
        <title>ProfileHub</title>
      </head>
      <body className={'font-Archivo text-white'}>
        {children}
      </body>
      
    </html>
  )
}
