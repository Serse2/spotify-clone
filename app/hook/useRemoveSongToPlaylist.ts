import { Session } from 'next-auth'
import { useState } from 'react'
import { postFunction } from '../service/post'
import { deleteFunction } from '../service/delete'

export const useRemoveSongToPlaylist = (session: Session) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const removeSongToPlaylist = async (
    values: RemoveTrakPlaylistRequest,
    playlistId: string
  ) => {
    setLoading(true)
    setError(false)
    try {
      await deleteFunction<{}, RemoveTrakPlaylistRequest>(
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

  return { loading, error, removeSongToPlaylist }
}
