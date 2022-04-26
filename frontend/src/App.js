import data from './data';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">RareBuy</a>
      </header>
      <main>
        <h1>Arts</h1>
        <div className="arts">
          {data.products.map((product) => (
            <div className="art" key={product.id}>
              <a href={`/art/${product.id}`}>
                <img src={product.image} alt={product.name}></img>
              </a>
              <div className="art-details">
                <a href={`/art/${product.id}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.id}</strong>
                </p>
                <button>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
