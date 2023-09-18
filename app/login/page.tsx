'use client'

import React from 'react'
import { Button } from '../components/button/Button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import styles from './login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <Button
        onClick={() =>
          signIn('spotify', { callbackUrl: 'http://localhost:3000/dashboard' })
        }
        variant={'primary'}
        type={'button'}
      >
        <Image
          src={'/spotify_small.png'}
          alt={'spotify logo'}
          width={20}
          height={20}
        />
        Login with Spotify
      </Button>
    </div>
  )
}
export default Login
