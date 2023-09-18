'use client'
import { signOut } from 'next-auth/react'
import { Button } from '../button/Button'
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.main}>
      <a href='/dashboard'>⌂ Home</a>
      <a href='/dashboard/playlists/create'>Crea Playlist</a>
      <Button onClick={() => signOut()} variant={'secondary'} type={'button'}>
        Logout
      </Button>
    </header>
  )
}
