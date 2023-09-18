import { Session } from 'next-auth'

export const getFunction = async <T>(
  url: string,
  session: Session
): Promise<T> => {
  const res = await fetch(`${process.env.NEXTBASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`
    },
    next: { tags: ['dashboard'] }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = (await res.json()) as T
  return data
}
