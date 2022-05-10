import Art from '../components/Art';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Arts() {
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
      <h1>Arts</h1>
      <div className="arts">
        {artists.map((artist) => (
          <Row key={artist.artist_id}>
            {artist.arts.map((art) => (
              <Col key={art.id} sm={6} md={4} lg={3}>
                <Art art={art} arts={artist.arts}></Art>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
}

export default Arts;
