import { Session } from 'next-auth'
import { useState } from 'react'
import { postFunction } from '../service/post'

export const useAddSongToPlaylist = (session: Session) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const addSongToPlaylist = async (
    values: AddTrackToPlaylist,
    playlistId: string
  ) => {
    setLoading(true)
    setError(false)
    try {
      await postFunction<{}, AddTrackToPlaylist>(
        `/playlists/${playlistId}/tracks`,
        session,
        values
      )
    } catch (error) {
      setError(true)
      throw new Error('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, addSongToPlaylist }
}
