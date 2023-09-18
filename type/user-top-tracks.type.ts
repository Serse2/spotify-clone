type TrackObj = {
  id: string
  name: string
  durationMs: number
  popularity: number
  previewUrl: string | null
  uri: string
  type: string
  album: {
    albumType: string
    images: {
      url: string
    }[]
  }
  artists: {
    name: string
  }[]
}

type UserTopTracks = {
  items: TrackObj[]
}

type TrackObjRequest = {
  id: string
  name: string
  duration_ms: number
  popularity: number
  preview_url: string | null
  uri: string
  type: string
  album: {
    album_type: string
    images: {
      url: string
    }[]
  }
  artists: {
    name: string
  }[]
}

type UserTopTracksRequest = {
  items: TrackObjRequest[]
}

type SearchUserTracks = {
  tracks: {
    items: Track[]
    next: string | null
    previous: string | null
    total: number
  }
}

type SearchUserTracksResponse = {
  tracks: {
    items: TrackResponse[]
  }
  next: string | null
  previous: string | null
  total: number
}
