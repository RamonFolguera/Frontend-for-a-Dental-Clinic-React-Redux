import React from "react";
import { Card,  Col, Container, Row } from "react-bootstrap";
import "./Home.css";

export const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="bck-img-container">
          <div className="welcomeHomeMsg">
            <h1 className="carouselCaptionDesign">Welcome To Happy Teeth</h1>
            <p className="carouselCaptionDesign">
              Your local cosmetic dental practice in the heart of London
            </p>
         </div>
        </Col>
      </Row>
     
      <Row>
      <Col className="section2 d-flex justify-content-center">
       
          <div className="section2-text">
            <p className="fs-5 text-center">
              {" "}
              Happy Teeth has been providing family-friendly dental care for our
              patients for over 65 years. We are committed to providing the best
              level of service we can in every aspect of our practice, from
              routine check-ups to advanced cosmetic treatments.
            </p>
            <p className="fs-5 text-center">
              If you're interested in achieving your dream smile and improving
              your oral health with the help of a friendly, approachable dental
              team, then complete our registration form today, book an
              appointment and we'll get right back to you.
            </p>
          </div>
      
        </Col>
      </Row>

      <Row>
        <h1 className="d-flex bg-light justify-content-center">
          Some of our most popular services include:
        </h1>
        <div className="d-flex flex-wrap justify-content-center">
        <Card border="primary" style={{ width: '18rem', margin: '1em' }}>
        <Card.Header>Scale and polish</Card.Header>
        <Card.Body>
          <Card.Text>
          To keep your teeth and gums healthy. It removes tartar and plaque build ups and leaves your teeth feeling fresh and clean.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem', margin: '1em' }}>
        <Card.Header>White fillings</Card.Header>
        <Card.Body>
          <Card.Text>
          Filling in one of your front teeth (incisors and canines), the filling material of choice may be a white filling.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem', margin: '1em' }}>
        <Card.Header>Root canal treatment (endodontics)</Card.Header>
        <Card.Body>
          <Card.Text>
          Dental procedure used to treat infection at the centre of a tooth.
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      </Row>
    </Container>
  );
};
