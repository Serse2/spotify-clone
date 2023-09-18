import { Session } from 'next-auth'
import { use, useCallback, useEffect, useState } from 'react'
import { getFunction } from '../service/get'

export const useSearch = (
  session: Session
): {
  loading: boolean
  error: boolean
  search: (query: string) => void
  data: SearchUserTracks | null
} => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<SearchUserTracks | null>(null)

  const search = async (query: string) => {
    if (!query) {
      setData(null)
      return
    }
    setLoading(true)
    setError(false)
    try {
      const res = await getFunction<SearchUserTracksResponse>(
        `/search?query=${query}&type=track&market=IT`,
        session
      )
      setData(mapSearchUserTracks(res))
      return res
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, search, data }
}

const mapSearchUserTracks = (
  data: SearchUserTracksResponse
): SearchUserTracks => {
  const tracks = {
    tracks: {
      items: data.tracks.items.map(item => ({
        id: item.id,
        uri: item.uri,
        type: item.type,
        previewUrl: item.preview_url,
        name: item.name,
        album: {
          name: item.album.name,
          id: item.album.id,
          images: item.album.images
        }
      })),
      next: data.next,
      previous: data.previous,
      total: data.total
    }
  }

  return tracks
}
