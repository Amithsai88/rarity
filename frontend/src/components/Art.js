import Card from 'react-bootstrap/Card';

// import Rarity from '../components/Rarity';

function Art(props) {
  const { art } = props;
  return (
    <Card>
      <img src={art.image} className="card-img-top" alt={art.name}></img>
      <Card.Body>
        <Card.Title>{art.name}</Card.Title>
        {/* <Rarity arts={arts} id={art.id}></Rarity> */}
        <Card.Text>Price: {art.price}</Card.Text>
        {/* <Button>Buy Now</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Art;
