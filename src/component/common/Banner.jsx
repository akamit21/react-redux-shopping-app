import React from "react";
import { Container, Col } from "react-bootstrap";

const Banner = props => {
  return (
    <Container fluid>
      <Col sm={{ span: 10, offset: 1 }} className="banner">
        <div className="banner-heading text-center">
          <h1 className="display-1 text-white">{props.name}</h1>
        </div>
      </Col>
    </Container>
  );
};

export default Banner;
