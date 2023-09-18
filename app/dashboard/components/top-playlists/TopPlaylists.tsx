import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getFunction } from '@/app/service/get'
import { isValidSession } from '@/app/utils/isValidSession'
import { getServerSession } from 'next-auth/next'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { mapUserTopPlaylists } from '../../mapping/mapUserTopPlaylists'
import style from './playlists.module.css'

const getUserPlaylists = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !isValidSession(session)) {
    redirect('/login')
  }

  const userDetail = await getFunction<{ id: string }>(`/me`, session)
  const userTopPlaylists = await getFunction<UserTopPlaylistsResponse>(
    `/users/${userDetail.id}/playlists/?limit=50`,
    session
  )
  return mapUserTopPlaylists(userTopPlaylists)
}

export const TopPlaylists = async () => {
  const userTopPlaylists = await getUserPlaylists()
  return (
    <section className={style.main}>
      <h2>Le tue Top Playlists</h2>
      <ul className={style.listContainer}>
        {userTopPlaylists.items.map(playlist => (
          <a
            href={`dashboard/playlists/${playlist.id}`}
            key={playlist.id}
            className={style.card}
          >
            {playlist.images.length > 0 ? (
              <Image
                src={playlist.images[0].url}
                title={playlist.name}
                width={200}
                height={200}
                alt={''}
              />
            ) : (
              <Image
                src={'/image-placeholder.png'}
                title={playlist.name}
                width={200}
                height={200}
                alt={''}
              />
            )}
            <div className={style.info}>
              <div>
                <h3 className={style.ellipsis}>
                  {playlist.name ? playlist.name : 'No title'}
                </h3>
                {playlist.owner.displayName ? (
                  <p className={style.ellipsis}>{playlist.owner.displayName}</p>
                ) : null}
                <p>Totale canzoni: {playlist.tracks.total}</p>
                <p>Creata da: {playlist.owner.displayName}</p>
              </div>
            </div>
          </a>
        ))}
      </ul>
    </section>
  )
}
