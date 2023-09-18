import { Session } from 'next-auth'

export const isValidSession = (session: Session | null) => {
  if (
    !session ||
    Math.floor(Date.now()) >= new Date(session.user.expiresAt! * 1000).getTime()
  ) {
    console.log('Session is invalid')
    return false
  }
  return true
}
