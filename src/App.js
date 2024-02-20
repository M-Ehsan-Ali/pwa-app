import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Users from "./Components/Users";

function App() {
  function installApp() {
    if ("deferredPrompt" in window) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        window.deferredPrompt = null;
      });
    }
  }
  return (
    <div className="App">
      <Button onClick={installApp}>Install App</Button>
      <Router>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="users">Users</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/users" Component={Users} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
