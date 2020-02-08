import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";

import Routes from "./routes/Routes";
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
        <Routes />
        <Container fluid className="border-top">
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}
