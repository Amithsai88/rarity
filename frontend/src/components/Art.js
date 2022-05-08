import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rarity from '../components/Rarity';

function Art(props) {
  const { art, arts } = props;

  return (
    <Card>
      <img src={art.image} className="card-img-top" alt={art.name}></img>
      <Card.Body>
        <Card.Title>{art.name}</Card.Title>
        {/* <Rarity arts={arts} id={art.id}></Rarity> */}
        <Card.Text>${art.price}</Card.Text>
        <Button>Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Art;
