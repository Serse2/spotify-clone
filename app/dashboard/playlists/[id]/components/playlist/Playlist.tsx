'use client'

import { useEffect, useState } from 'react'
import style from './playlist.module.css'
import { useSearch } from '@/app/hook/useSearch'
import { Session } from 'next-auth'
import { useAddSongToPlaylist } from '@/app/hook/useAddSongToPlaylist'
import { useRemoveSongToPlaylist } from '@/app/hook/useRemoveSongToPlaylist'
import { Track } from '../track/Track'
import { Button } from '@/app/components/button/Button'

type Props = {
  items: Item[]
  session: Session
  id: string
}

export const Playlist = (props: Props) => {
  const [tracks, setTracks] = useState<Track[]>([])
  const [song, setSong] = useState<string>('')
  const { loading, error, search, data } = useSearch(props.session)
  const { addSongToPlaylist } = useAddSongToPlaylist(props.session)
  const { removeSongToPlaylist } = useRemoveSongToPlaylist(props.session)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    search(song)
  }

  const addTrack = async (track: Track) => {
    const uri = track.uri
    const playlistUri: AddTrackToPlaylist = {
      uris: [uri]
    }
    try {
      await addSongToPlaylist(playlistUri, props.id)
      setTracks(prev => [...prev, track])
    } catch (error) {
      alert('Qualcosa è andato storto')
    }
  }

  const removeTrack = async (track: Track) => {
    const uri = track.uri
    const playlistTracks: RemoveTrakPlaylistRequest = {
      tracks: [{ uri }]
    }
    try {
      await removeSongToPlaylist(playlistTracks, props.id)
      setTracks(prev => prev.filter(item => item.id !== track.id))
    } catch (error) {
      alert('Qualcosa è andato storto')
    }
  }

  useEffect(() => {
    setTracks(props.items.map(item => item.track))
  }, [props.items])

  const shouldShowSongs = !error && !loading && data
  const shouldShowEmptyState = !data && !loading && !error
  return (
    <div>
      {tracks.length > 0 ? (
        tracks.map(track => {
          return (
            <Track key={track.id} track={track} action={removeTrack} icon='-' />
          )
        })
      ) : (
        <h3>Nessuna canzone aggiunta</h3>
      )}

      <div>
        <h2>Aggiungi canzoni</h2>
        <form className={style.search} onSubmit={handleSubmit}>
          <input
            type='text'
            value={song}
            onChange={e => setSong(e.target.value)}
          />
          <Button variant='primary' type='submit'>
            Cerca
          </Button>
        </form>

        {error && <p>Qualcosa è andato storto</p>}

        {loading && <p>Loading...</p>}

        {shouldShowEmptyState && <p>Non ci sno canzoni</p>}

        {shouldShowSongs && (
          <div className={style.songContainer}>
            {data.tracks.items.map(track => {
              return (
                <Track
                  key={track.id}
                  track={track}
                  action={addTrack}
                  icon='+'
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
