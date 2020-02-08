import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../common/Banner";

const Product = () => {
  return (
    <>
      <Banner name="Products" />
      <Container className="py-5">
        <Row>
          <Col md={3} className="shadow-regular">
            <Image
              src="https://placeimg.com/500/500/any"
              className="card-img-top img-fluid shadow-lg"
              alt="products"
            />
            <h5 className="text-center my-5">
              <Link to="/product/shirts">Shirts</Link>
            </h5>
          </Col>

          <Col md={3} className="shadow-regular">
            <Image
              src="https://placeimg.com/500/500/any"
              className="card-img-top img-fluid shadow-lg"
              alt="products"
            />
            <h5 className="text-center my-5">
              <Link to="/product/pants">Pants</Link>
            </h5>
          </Col>

          <Col md={3} className="shadow-regular">
            <Image
              src="https://placeimg.com/500/500/any"
              className="card-img-top img-fluid shadow-lg"
              alt="products"
            />
            <h5 className="text-center my-5">
              <Link to="/product/watches">Watches</Link>
            </h5>
          </Col>
          <Col md={3} className="shadow-regular">
            <Image
              src="https://placeimg.com/500/500/any"
              className="card-img-top img-fluid shadow-lg"
              alt="products"
            />
            <h5 className="text-center my-5">
              <Link to="/product/shoes">Shoes</Link>
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
