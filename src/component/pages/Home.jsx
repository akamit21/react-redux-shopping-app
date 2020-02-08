import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Slider from "./Slider";

const Brand = props => {
  return (
    <Col className="col-md text-center">
      <Image src={props.brand.img} alt="brand-img" />
    </Col>
  );
};

const Catalog = props => {
  return (
    <Col md={6} className="shadow-lg">
      <Row>
        <Col lg={6} sm={7} className="p-5">
          <h3 className="h1 text-muted">{props.catalog.heading}</h3>
          <ul className="list-unstyled">
            {props.catalog.items.map((item, index) => (
              <li key={index} className="lead">
                {item}
              </li>
            ))}
          </ul>
        </Col>
        <Col lg={6} sm={5} className="pr-0">
          <Image
            src="https://placeimg.com/500/700/any"
            className="img-fluid"
            alt=""
          />
        </Col>
      </Row>
    </Col>
  );
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: [
        {
          id: 1,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-1.png"
        },
        {
          id: 2,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-2.png"
        },
        {
          id: 3,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-3.png"
        },
        {
          id: 4,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-4.png"
        },
        {
          id: 5,
          img:
            "https://colorlib.com/preview/theme/fashiop/img/clients-logo/c-logo-5.png"
        }
      ],
      catalog: [
        {
          id: 1,
          heading: "Men",
          items: [
            "Down Jackets",
            "Hoodies",
            "Suits",
            "Jeans",
            "Casual Pants",
            "Sunglass"
          ]
        },
        {
          id: 2,
          heading: "Women",
          items: [
            "Down Jackets",
            "Hoodies",
            "Suits",
            "Jeans",
            "Casual Pants",
            "Sunglass"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <>
        <Slider />
        <Col sm={{ span: 10, offset: 1 }} className="py-5">
          <div className="d-flex my-5">
            {this.state.brand.map(el => (
              <Brand key={el.id} brand={el} />
            ))}
          </div>
        </Col>

        <Container className="py-5">
          <Row>
            {this.state.catalog.map(el => (
              <Catalog key={el.id} catalog={el} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
