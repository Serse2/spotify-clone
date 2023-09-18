import { Session } from 'next-auth'

export const deleteFunction = async <T, D>(
  url: string,
  session: Session,
  body: D
): Promise<T> => {
  const res = await fetch(`${process.env.NEXTBASE_URL}${url}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`
    },
    body: JSON.stringify(body)
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = (await res.json()) as T
  return data
}
