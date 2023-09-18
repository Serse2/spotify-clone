import { Session } from 'next-auth'

export const isValidSession = async (session: Session | null) => {
  if (
    !session ||
    Math.floor(Date.now()) >= new Date(session.user.expiresAt! * 1000).getTime()
  ) {
    return false
  }
  return true
}
