type ExternalUrlsResponse = {
  spotify: string
}

type ImageResponse = {
  height: number | null
  url: string
  width: number | null
}

type TrackResponse = {
  id: string
  uri: string
  type: string
  preview_url: string | null
  name: string
  album: {
    name: string
    id: string
    images: ImageResponse[]
  }
}

type PlaylistItemResponse = {
  is_local: boolean
  track: TrackResponse
}

type PlaylistTracksResponse = {
  href: string
  total: number
  next: string | null
  previous: string | null
  items: PlaylistItemResponse[]
}

type PlaylistResponse = {
  collaborative: boolean
  description: string
  external_urls: ExternalUrlsResponse
  followers: {
    href: null
    total: number
  }
  href: string
  id: string
  images: ImageResponse[]
  name: string
  owner: {
    display_name: string
    external_urls: ExternalUrlsResponse
    href: string
    id: string
    type: string
    uri: string
  }
  public: boolean
  tracks: PlaylistTracksResponse
  type: string
  uri: string
}

type Track = {
  id: string
  uri: string
  type: string
  previewUrl: string | null
  name: string
  album: {
    name: string
    id: string
    images: ImageResponse[]
  }
}

type Item = {
  isLocal: boolean
  track: Track
}

type Tracks = {
  href: string
  total: number
  next: string | null
  previous: string | null
  items: Item[]
}

type Playlist = {
  collaborative: boolean
  description: string
  externalUrls: ExternalUrlsResponse
  followers: {
    href: null
    total: number
  }
  href: string
  id: string
  images: ImageResponse[]
  name: string
  owner: {
    displayName: string
    externalUrls: ExternalUrlsResponse
    href: string
    id: string
    type: string
    uri: string
  }
  public: boolean
  tracks: Tracks
  type: string
  uri: string
}
