import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";

import Routes from "./routes/Routes";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

export default App;
