'use client'
import { useCreatePlaylist } from '@/app/hook/useCreatePlaylist'
import { Session } from 'next-auth'
import { useRouter } from 'next/navigation'
import styles from './create.module.css'

import React from 'react'
import { Button } from '@/app/components/button/Button'

type Props = {
  userId: string
  session: Session
}

export const CreatePlaylistForm = ({ userId, session }: Props) => {
  const router = useRouter()
  const { loading, error, createPlaylist, data } = useCreatePlaylist({
    session,
    userId
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, description } = e.currentTarget.elements as any
    try {
      await createPlaylist({ name: name.value, description: description.value })
      alert('Playlist creata con successo')
      router.push('/dashboard', {})
    } catch (error) {
      alert('Qualcosa è andato storto')
    }
  }

  return (
    <>
      <form className={styles.createForm} onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Nome della playlist'
          required
        />
        <input
          type='text'
          name='description'
          placeholder='Descrizione della playlist'
        />
        <Button type='submit' disabled={loading} variant={'primary'}>
          Crea
        </Button>
      </form>
      {error && <p>Qualcosa è andato storto riprova</p>}
    </>
  )
}
