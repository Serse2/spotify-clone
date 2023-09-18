import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const scope =
  'playlist-modify-public playlist-modify-private user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing user-follow-read playlist-read-private user-read-email user-read-private user-library-read playlist-read-collaborative'
export const authOptions: NextAuthOptions = {
  // your configs
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXTSPOTIFY_CLIENT_ID!,
      clientSecret: process.env.NEXTSPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: { scope }
      }
    })
  ],
  secret: process.env.NEXTSAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      // user, account, profile and isNewUser are only passed the first time this callback is called on a new session
      if (account) {
        token.id = account.id
        token.expiresAt = account.expires_at
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.user = token
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
