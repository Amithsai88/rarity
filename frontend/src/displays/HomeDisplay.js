import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data';
import logger from 'use-reducer-logger';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, artists: action.payload, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeDisplay() {
  // const [artists, setArtists] = useState([]);
  const [{ loading, error, artists }, dispatch] = useReducer(logger(reducer), {
    artists: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/artists');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILED', payload: err.message });
      }
      // setArtists(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Artists</h1>
      <div className="arts">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          artists.map((artist) => (
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
          ))
        )}
      </div>
    </div>
  );
}
export default HomeDisplay;
