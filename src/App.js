import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Users from "./Components/Users";
import firebase from "./firebase";

function App() {
  useEffect(() => {
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        console.warn("token", data);
      })
      .catch((error) => {
        console.warn("Error requesting permission:", error);
      });
  }, []);

  return (
    <div className="App">
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
