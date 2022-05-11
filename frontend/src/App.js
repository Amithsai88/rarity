import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeDisplay from './displays/HomeDisplay';
import Arts from './displays/Arts';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Signin from './displays/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>RareCheck</Navbar.Brand>
              </LinkContainer>
            </Container>
            <Container>
              <Navbar.Collapse className="justify-content-end">
                <LinkContainer to="/signin">
                  <Navbar.Brand>Sign in</Navbar.Brand>
                </LinkContainer>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/art/:artist_id" element={<Arts />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/" element={<HomeDisplay />} />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
