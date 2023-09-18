type PlaylistObj = {
  id: string
  collaborative: boolean
  description: string
  name: string
  owner: {
    id: string
    displayName: string | null
  }
  public: boolean
  type: string
  tracks: {
    total: number
  }
  images: {
    url: string
  }[]
}

type UserTopPlaylists = {
  items: PlaylistObj[]
}

type PlaylistObjResponse = {
  id: string
  collaborative: boolean
  description: string
  name: string
  owner: {
    id: string
    display_name: string | null
  }
  public: boolean
  type: string
  tracks: {
    total: number
  }
  images: {
    url: string
  }[]
}

type UserTopPlaylistsResponse = {
  items: PlaylistObjResponse[]
}
