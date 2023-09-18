'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Provider = (props: Props) => {
  return (
    <SessionProvider>{props.children}</SessionProvider>
  )
}