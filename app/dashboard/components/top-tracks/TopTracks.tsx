import Image from 'next/image'
import React from 'react'
import style from './tracks.module.css'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { mapUserTopTracks } from '../../mapping/mapUserTopTracks'
import { getFunction } from '@/app/service/get'
import { isValidSession } from '@/app/utils/isValidSession'

const getUserTopTracks = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !isValidSession(session)) {
    redirect('/login')
  }

  const userTopTracks = await getFunction<UserTopTracksRequest>(
    `/me/top/tracks`,
    session
  )

  return mapUserTopTracks(userTopTracks)
}

export const TopTracks = async () => {
  const userTopTracks = await getUserTopTracks()
  return (
    <section className={style.main}>
      <h2>Le tue Top Tracks</h2>
      <ul className={style.listContainer}>
        {userTopTracks.items.map(track => (
          <li key={track.id} className={style.card}>
            <Image
              src={track.album.images[0].url}
              title={track.name}
              width={200}
              height={200}
              alt={''}
            />
            <div className={style.info}>
              <div>
                <h3 className={style.ellipsis}>{track.name}</h3>
                <p className={style.ellipsis}>
                  {track.artists
                    .map(artist => {
                      return artist.name
                    })
                    .join(', ')}
                </p>
              </div>
              {track.previewUrl ? (
                <audio controls={true}>
                  <source src={track.previewUrl} type='audio/mpeg' />
                </audio>
              ) : (
                <audio controls={true}>
                  <source src={''} type='audio/mpeg' />
                </audio>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
