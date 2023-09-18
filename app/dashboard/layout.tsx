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
        width={320}
        height={96}
        objectFit='contain'
        alt='Spotify logo'
      />
      <Header />
      {children}
    </section>
  )
}
