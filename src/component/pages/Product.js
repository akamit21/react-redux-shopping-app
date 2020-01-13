import React from "react";
import { Link } from "react-router-dom";
import Banner from "../common/Banner";

const ProductCard = props => {
  return (
    <div className="card shadow">
      <img
        src="https://placeimg.com/500/600/any"
        className="card-img-top img-fluid"
        alt=""
      />

      <div className="card-body text-center">
        <h5 className="card-title h6  text-muted">{props.data.name}</h5>
        <p className="h3 text-warning">{props.data.offer}</p>
        {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
      </div>
    </div>
  );
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      men: [
        {
          id: 1,
          name: "WinterWear",
          offer: "40-70% OFF"
        },
        {
          id: 2,
          name: "T-Shirts",
          offer: "30-70% OFF"
        },
        {
          id: 3,
          name: "Footwears",
          offer: "50-80% OFF"
        },
        {
          id: 4,
          name: "Sportswear",
          offer: "40-50% OFF"
        }
      ],
      women: [
        {
          id: 1,
          name: "Sarees",
          offer: "40-70% OFF"
        },
        {
          id: 2,
          name: "Watches",
          offer: "30-70% OFF"
        }
      ]
    };
  }

  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    if (this.props.match.params.for === "men") {
      return (
        <React.Fragment>
          <Banner name="Men's" />
          <div className="container py-5">
            <h2 className="text-center mb-5">Men's Section </h2>
            <div className="row">
              {this.state.men.map(obj => (
                <div key={obj.id} className="col-md-3 py-3">
                  <Link to={`${this.props.match.url}/${obj.name}`}>
                    <ProductCard data={obj} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.props.match.params.for === "women") {
      return (
        <React.Fragment>
          <Banner name="Women's" />
          <div className="container py-5">
            <h2 className="text-center mb-5">Women's Section </h2>
            <div className="row">
              {this.state.women.map(obj => (
                <div key={obj.id} className="col-md-3 py-3">
                  <Link to={`${this.props.match.url}/${obj.name}`}>
                    <ProductCard data={obj} />
                  </Link>
                </div>
              ))}
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

export default Product;
