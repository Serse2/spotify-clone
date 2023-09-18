import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getFunction } from '@/app/service/get'
import { isValidSession } from '@/app/utils/isValidSession'
import { getServerSession } from 'next-auth/next'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Playlist } from './components/playlist/Playlist'
import { mapPlaylist } from './mapping/mapPlaylist'
import style from './page.module.css'
import { Button } from '@/app/components/button/Button'

const getPlaylistDetail = async (id: string) => {
  const session = await getServerSession(authOptions)

  if (!session || !isValidSession(session)) {
    redirect('/login')
  }

  const playlistDetail = await getFunction<PlaylistResponse>(
    `/playlists/${id}`,
    session
  )

  const playlist = mapPlaylist(playlistDetail)

  return { playlist, session }
}

const PlaylistDetail = async ({ params }: { params: { id: string } }) => {
  const { playlist, session } = await getPlaylistDetail(params.id)

  return (
    <section className={style.page}>
      <div className={style.cover}>
        {playlist.images.length > 0 ? (
          <Image
            src={playlist.images[0].url}
            alt='playlist image'
            height={300}
            width={300}
          />
        ) : (
          <Image
            src={'/image-placeholder.png'}
            alt='playlist image'
            height={300}
            width={300}
          />
        )}
        <div className={style.info}>
          <p>Playlist</p>
          <h1>{playlist.name}</h1>
          <p>{playlist.description}</p>
          <p>
            Creata da: {playlist.owner.displayName} - {playlist.tracks.total}{' '}
            canzoni
          </p>
          <Button type='button' variant='primary'>
            Riproduci
          </Button>
        </div>
      </div>
      <Playlist
        items={playlist.tracks.items}
        session={session}
        id={params.id}
      />
    </section>
  )
}

export default PlaylistDetail
