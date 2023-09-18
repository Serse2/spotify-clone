import Image from 'next/image'
import { Header } from '../components/header/Header'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Image
        src='/spotify_logo.png'
        width={200}
        height={60}
        objectFit='contain'
        alt='Spotify logo'
      />
      <Header />
      {children}
    </section>
  )
}
