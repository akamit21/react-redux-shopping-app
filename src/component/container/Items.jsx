import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Axios from "axios";
import Banner from "../common/Banner";

const ProductCard = ({ item } = this.props) => {
  return (
    <Col md={4} className="py-3">
      <Card className="shadow">
        <Card.Img
          src={item.img_url}
          className="card-img-top img-fluid"
          alt=""
        />

        <Card.Body>
          <Card.Title className="h6 text-muted">{item.name}</Card.Title>
          <Row>
            <Col>
              <em>Price:</em> {item.price}
            </Col>

            <Col>
              <em>Rating:</em> {item.rating}
            </Col>
          </Row>
          <hr />
          <Button variant="outline-danger">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filteredItems: []
    };
  }

  componentDidMount = async () => {
    const {
      match: { params }
    } = this.props;
    try {
      let res = await Axios.get(`http://localhost:2000/${params.type}`);
      console.log(res);
      this.setState({ items: res.data });
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    const {
      match: { params }
    } = this.props;
    return (
      <>
        <Banner name="Products" />
        <Container className="py-5">
          <h2 className="text-center mb-5 text-capitalize">
            {params.type} Section{" "}
          </h2>
          <Row>
            {this.state.items.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </Row>
        </Container>
      </>
    );
    // } else if (this.props.name === "women") {
    //   return (
    //     <React.Fragment>
    //       <Banner name="Women's" />
    //       <div className="container py-5">
    //         <h2 className="text-center mb-5">Women's Section </h2>
    //         <div className="row">
    //           {/* {this.state.women.map(obj => (
    //             <ProductCard key={obj.id} data={obj} />
    //           ))} */}
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   );
    // }
  }
}

export default Items;
