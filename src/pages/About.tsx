import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";

const About: React.FC = () => {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "SASS",
      "BOOTSTRAP",
      "RESP. DESIGN",
      "JS ES6+",
      "TS 4+",
      "REACT",
      "REDUX",
      "MOBX",
      "NEXT.JS",
      "SSR",
    ],
    backend: [
      "NODE.JS",
      "MONGO DB",
      "EXPRESS.JS",
      "NPM | YARN",
      "AUTHENTICATION",
      "WEBSOCKETS",
    ],
    mobile: ["ANDROID", "ANDROID SDK", "KOTLIN", "JAVA", "VOLLEY"],
  };

  return (
    <Container>
      <Card className="w-100 my-4">
        <Card.Body>
          <Card.Title className="mb-3">About Me</Card.Title>
          <Card.Text className="mb-2">
            I'm a self-taught front-end developer, with a great desire to become
            a first-class specialist. I started my development journey by
            writing a small text-based game for Android. At the moment my
            preferred technology is React / Vue.
          </Card.Text>
        </Card.Body>
      </Card>
      <Row className="d-flex">
        <Col xs={12} lg={4} className="d-flex flex-grow-1">
          <Card className="w-100 mb-4 flex-grow-1">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mb-3">Front-End Skills</Card.Title>
              <Col
                xs={12}
                className="d-flex flex-wrap flex-grow-1 align-items-center justify-content-center"
              >
                {skills.frontend.map((item) => (
                  <Badge bg="primary" className="me-2 mb-2" key={item}>
                    {item}
                  </Badge>
                ))}
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4} className="d-flex flex-grow-1">
          <Card className="w-100 mb-4 flex-grow-1">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mb-3">Backend Skills</Card.Title>
              <Col
                xs={12}
                className="d-flex flex-wrap flex-grow-1 align-items-center justify-content-center"
              >
                {skills.backend.map((item) => (
                  <Badge bg="primary" className="me-2 mb-2" key={item}>
                    {item}
                  </Badge>
                ))}
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4} className="d-flex flex-grow-1">
          <Card className="w-100 mb-4 flex-grow-1">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mb-3">Mobile Skills</Card.Title>
              <Col
                xs={12}
                className="d-flex flex-wrap flex-grow-1 align-items-center justify-content-center"
              >
                {skills.mobile.map((item) => (
                  <Badge bg="primary" className="me-2 mb-2" key={item}>
                    {item}
                  </Badge>
                ))}
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
