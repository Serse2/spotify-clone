import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/route'
import { isValidSession } from './utils/isValidSession'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session || !isValidSession(session)) {
    redirect('/login')
  }
  return (
    <section>
      <h1>Welcome to Spotify App</h1>
      <a href='/dashboard'>Expolore</a>
    </section>
  )
}
