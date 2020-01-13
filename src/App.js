import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import Home from "./component/Home";
import About from "./component/pages/About";
import Product from "./component/pages/Product";
import Items from "./component/pages/Items";
import Faq from "./component/pages/Faq";
import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        Shirts: []
      }
    };
  }

  componentDidMount = async () => {
    let data = await fetch("/data.json").then(res => res.json());
    this.setState({ products: data });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" exact component={Product} />
        <Route path="/product/:for" exact component={Product} />
        <Route
          path="/product/:for/:type"
          render={props => <Items {...props} data={this.state.products} />}
        />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />

        <div className="container-fluid border-top">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
