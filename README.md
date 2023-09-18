# Clone Spotify

A Next project that clone spotify

## Technologies and Libraries used

- [Next.JS 13](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/) OAuth authentication
- Css module for styling
- Typescript

## Features

- Log-in into the application using Spotify OAuth through the next-auth package
- View all the playlists created by the user
- View all the top track created by the user
- Display all the tracks in a playlist with possibility to search, add and
  remove tracks
- Play a track with the default UI by browser
- Create a new playlist

## To-do features

- [ ] Add test for client and server component
- [ ] Better manage the mapping of the data
- [ ] Use a custom track player
- [ ] Make responsive the UI

## Run Locally

Clone the project

```bash
  git clone
```

Go to the project directory

```bash
  cd spotify-clone
```

Install dependencies

```bash
  npm install
  # or
  yarn
```

Set env variables

`SPOTIFY_CLIENT_SECRET`

`SPOTIFY_CLIENT_ID`

`NEXTSPOTIFY_REDIRECT_URI`

`NEXTAUTH_SECRET`

The `SPOTIFY_CLIENT_SECRET` and `SPOTIFY_CLIENT_ID` follow this
[docs](https://developer.spotify.com/documentation/web-api)

To create `NEXTAUTH_SECRET``, open your terminal, run the command below and copy
the value generated to the .env file.

```bash
openssl rand -base64 32
```

Start the server

```bash
  npm run dev
  # or
  yarn dev
```
