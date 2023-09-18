export const mapUserTopTracks = (data: UserTopTracksRequest): UserTopTracks => {
  return {
    items: data.items.map(item => ({
      id: item.id,
      name: item.name,
      type: item.type,
      durationMs: item.duration_ms,
      popularity: item.popularity,
      previewUrl: item.preview_url,
      album: {
        albumType: item.album.album_type,
        images: item.album.images.map(image => ({
          url: image.url
        }))
      },
      artists: item.artists.map(artist => ({
        name: artist.name
      })),
      uri: item.uri
    }))
  }
}
