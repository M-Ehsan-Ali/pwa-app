import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    // Fetch dummy user data from a testing API or mock data
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        localStorage.setItem("dash", JSON.stringify(data));
      })
      .catch((error) => {
        setMode("offline");
        let collection = localStorage.getItem("dash");
        setUserData(JSON.parse(collection));
      });
  }, []);

  return (
    <Container className="mt-3">
      <h1>Welcome to the Dashboard</h1>
      <div>
        {mode === "offline" && (
          <Alert key="warning" variant="warning">
            You're in offline mode or there's an issue with the connection.
          </Alert>
        )}
      </div>
      {userData && (
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>User Information</Card.Title>
                <Card.Text>
                  <strong>Name:</strong> {userData.name}
                  <br />
                  <strong>Email:</strong> {userData.email}
                  <br />
                  <strong>Phone:</strong> {userData.phone}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Latest Activities</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris, et varius leo. Aenean
                  condimentum metus quis ipsum convallis, vel vestibulum nibh
                  faucibus. Vivamus et sapien in lectus eleifend faucibus non in
                  risus. Nullam eget elit nec risus eleifend posuere non id
                  odio.
                </Card.Text>
                {/* <Button variant="primary">View All Activities</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
