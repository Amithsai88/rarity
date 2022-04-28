import data from '../data';

function Arts() {
  return (
    <div>
      <h1>Arts</h1>
      <div className="arts">
        {data.artists.map((artist) =>
          artist.arts.map((art) => (
            <div className="art" key={art.id}>
              <img src={art.image} alt={art.name}></img>
              <div className="art-details">
                <p>{art.name}</p>
                <p>
                  <strong>${art.price}</strong>
                </p>
                <button>Buy Now</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Arts;
