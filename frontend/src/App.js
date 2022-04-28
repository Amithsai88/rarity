import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeDisplay from './displays/HomeDisplay';
import Arts from './displays/Arts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <a href="/">RareBuy</a>
        </header>
        <main>
          <Routes>
            <Route path="/art/:artist_id" element={<Arts />} />
            <Route path="/" element={<HomeDisplay />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
