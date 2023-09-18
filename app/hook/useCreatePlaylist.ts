import { Session } from 'next-auth'
import { useState } from 'react'
import { postFunction } from '../service/post'

export const useCreatePlaylist = ({
  session,
  userId
}: {
  session: Session
  userId: string
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<CreatePlaylists | null>(null)

  const createPlaylist = async (values: CreatePlaylists) => {
    setLoading(true)
    setError(false)
    try {
      const res = await postFunction<CreatePlaylistsResponse, CreatePlaylists>(
        `/users/${userId}/playlists`,
        session,
        values
      )
      setData(res)
    } catch (error) {
      setError(true)
      throw new Error('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, createPlaylist, data }
}
