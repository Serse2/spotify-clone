export const mapUserTopPlaylists = (
  data: UserTopPlaylistsResponse
): UserTopPlaylists => {
  return {
    items: data.items.map(item => ({
      id: item.id,
      collaborative: item.collaborative,
      description: item.description,
      name: item.name,
      owner: {
        id: item.owner.id,
        displayName: item.owner.display_name
      },
      public: item.public,
      type: item.type,
      tracks: {
        total: item.tracks.total
      },
      images: item.images.map(image => ({
        url: image.url
      }))
    }))
  }
}
