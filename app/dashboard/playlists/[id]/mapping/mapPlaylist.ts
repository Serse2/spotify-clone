export const mapPlaylist = (data: PlaylistResponse): Playlist => {
  return {
    collaborative: data.collaborative,
    description: data.description,
    externalUrls: data.external_urls,
    followers: data.followers,
    href: data.href,
    id: data.id,
    images: data.images,
    name: data.name,
    owner: {
      displayName: data.owner.display_name,
      externalUrls: data.owner.external_urls,
      href: data.owner.href,
      id: data.owner.id,
      type: data.owner.type,
      uri: data.owner.uri
    },
    public: data.public,
    tracks: {
      href: data.tracks.href,
      total: data.tracks.total,
      next: data.tracks.next,
      previous: data.tracks.previous,
      items: data.tracks.items.map(item => ({
        isLocal: item.is_local,
        track: {
          id: item.track.id,
          uri: item.track.uri,
          type: item.track.type,
          previewUrl: item.track.preview_url,
          name: item.track.name,
          album: {
            name: item.track.album.name,
            id: item.track.album.id,
            images: item.track.album.images
          }
        }
      }))
    },
    type: data.type,
    uri: data.uri
  }
}
