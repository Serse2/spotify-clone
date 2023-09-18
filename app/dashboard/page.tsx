import { TopPlaylists } from './components/top-playlists/TopPlaylists'
import { TopTracks } from './components/top-tracks/TopTracks'

const Dashboard = async () => {
  return (
    <div>
      <h1>Buongiorno</h1>
      <TopTracks />
      <TopPlaylists />
    </div>
  )
}

export default Dashboard
