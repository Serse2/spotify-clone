'use client'

import React from 'react'
import styles from './button.module.css'

type Props = {
  onClick?: () => void
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = (props: Props) => {
  const variant =
    props.variant === 'primary' ? styles.primary : styles.secondary
  return (
    <button
      className={variant}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
