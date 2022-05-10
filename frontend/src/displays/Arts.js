import Art from '../components/Art';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import data from '../data.js';

const Arts = (props) => {
  // const [artists, setArtists] = useState([]);
  const { artist_id } = useParams();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('/api/artists');
  //     setArtists(result.data);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>
      <h1>Arts</h1>
      <div className="arts">
        <Row key={artist_id}>
          {data.artists[artist_id]['arts'].map((art) => (
            <Col key={art.id} sm={6} md={4} lg={3}>
              <Art art={art}></Art>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Arts;
