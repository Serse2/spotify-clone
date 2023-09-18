import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getFunction } from '@/app/service/get'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import React from 'react'
import { CreatePlaylistForm } from './components/create-playlist/CreatePlaylistForm'
import { isValidSession } from '@/app/utils/isValidSession'

type Props = {}

const getUser = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !isValidSession(session)) {
    redirect('/login')
  }

  const userDetail = await getFunction<{ id: string }>(`/me`, session)

  return { session, userDetail }
}

const CreatePlaylist = async (props: Props) => {
  const { session, userDetail } = await getUser()
  return (
    <div>
      <h1>Crea la tua Playlist</h1>
      <CreatePlaylistForm userId={userDetail.id} session={session} />
    </div>
  )
}

export default CreatePlaylist
