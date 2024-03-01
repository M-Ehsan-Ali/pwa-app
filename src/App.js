import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Notification from "./Notification";
import { requestForToken } from "./firebase";

function App() {
  const [fcmToken, setFcmToken] = useState(null);
  useEffect(() => {
    requestForToken(setFcmToken);
  }, []);
  const sendNotification = async (title, body, token) => {
    try {
      const serverKey =
        "AAAAX2nF4iI:APA91bGrfRTVBApIUKNxOMJXRJeOX4g1NdJY89F8mG86XlfL59NlQs8S21Xxes8xSPS451zWwYIvLjjjRNPrckbRxQygTgMni8faxEbvs8EPMIy_uoTx5riWdQ9-WeIU5pqbN62HPFf4";
      const response = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `key=${serverKey}`,
        },
        body: JSON.stringify({
          to: token,
          notification: {
            title: title,
            body: body,
          },
        }),
      });

      if (response.ok) {
        console.log("Notification sent successfully");
      } else {
        console.error("Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" data-bs-theme="dark">
          <Notification />
          <Container>
            {/* <Navbar.Brand href="/">Navbar</Navbar.Brand> */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
              <Button
                onClick={() =>
                  sendNotification(
                    "Title From The Firebase",
                    "Body From Firebase",
                    fcmToken
                  )
                }
              >
                Click me
              </Button>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
