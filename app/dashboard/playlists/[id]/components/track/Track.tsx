import React from 'react'
import style from './track.module.css'
import Image from 'next/image'

type Props = {
  track: Track
  action: (track: Track) => void
  icon: string
}

export function Track({ track, action, icon }: Props) {
  return (
    <div className={style.row} key={track.id}>
      <button className={style.action} onClick={() => action(track)}>
        {icon}
      </button>
      {track.album.images.length > 0 ? (
        <Image
          src={track.album.images[0].url}
          alt={track.name}
          width={70}
          height={70}
        />
      ) : (
        <Image
          src='./image-placeholder.png'
          alt={track.name}
          width={70}
          height={70}
        />
      )}
      <p>{track.name}</p>
      <p>{track.type}</p>
      <p>{track.album.name}</p>
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
  )
}
