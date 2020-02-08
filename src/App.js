import React from "react";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";

import "./App.css";
import Routes from "./routes/Routes";

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
        <Routes />

        <div className="container-fluid border-top">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
