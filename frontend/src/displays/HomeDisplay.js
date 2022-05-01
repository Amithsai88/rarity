import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data';
import axios from 'axios';

function HomeDisplay() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/artists');
      setArtists(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Artists</h1>
      <div className="arts">
        {artists.map((artist) => (
          <div className="art" key={artist.artist_id}>
            <Link to={`/art/${artist.artist_id}`}>
              <img src={artist.artist_img} alt={artist.artist}></img>
            </Link>
            <div className="art-details">
              <Link to={`/art/${artist.artist_id}`}>
                <p>{artist.artist}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeDisplay;
