import React from "react";
import { Link } from "react-router-dom";
import Banner from "../common/Banner";

const ProductCard = props => {
  return (
    <div className="col-md-3 py-3">
      <div className="card shadow">
        <img
          src="https://placeimg.com/500/600/any"
          className="card-img-top img-fluid"
          alt=""
        />

        <div className="card-body text-center">
          <h5 className="card-title h6  text-muted">{}</h5>
          <p className="h3 text-warning">{}</p>
          {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
        </div>
      </div>
    </div>
  );
};

class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data.Shirts);
    if (this.props.match.params.type === "WinterWear") {
      return (
        <React.Fragment>
          <Banner name="Men's" />
          <div className="container py-5">
            <h2 className="text-center mb-5">Men's Section </h2>
            <div className="row">
              {this.props.data.Shirts.map(obj => (
                <ProductCard data={obj} />
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.props.name === "women") {
      return (
        <React.Fragment>
          <Banner name="Women's" />
          <div className="container py-5">
            <h2 className="text-center mb-5">Women's Section </h2>
            <div className="row">
              {/* {this.state.women.map(obj => (
                <ProductCard key={obj.id} data={obj} />
              ))} */}
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Banner name="Products" />
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 ">
                <img
                  src="https://placeimg.com/500/500/any"
                  className="card-img-top img-fluid shadow-lg"
                  alt="products"
                />
                <h3 className="text-center my-5 display-4">
                  <Link to="/product/men">Men's Product</Link>
                </h3>
              </div>
              <div className="col-md-6 shadow-regular">
                <img
                  src="https://placeimg.com/500/500/any"
                  className="card-img-top img-fluid shadow-lg"
                  alt="products"
                />
                <h3 className="text-center my-5 display-4">
                  <Link to="/product/women">Women's Product</Link>
                </h3>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Items;
