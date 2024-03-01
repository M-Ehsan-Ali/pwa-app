import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-3">
      <h1>About Us</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris, et varius leo. Aenean condimentum
                metus quis ipsum convallis, vel vestibulum nibh faucibus.
                Vivamus et sapien in lectus eleifend faucibus non in risus.
                Nullam eget elit nec risus eleifend posuere non id odio.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris, et varius leo. Aenean condimentum
                metus quis ipsum convallis, vel vestibulum nibh faucibus.
                Vivamus et sapien in lectus eleifend faucibus non in risus.
                Nullam eget elit nec risus eleifend posuere non id odio.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
