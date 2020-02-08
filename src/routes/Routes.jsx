import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/pages/About";
import Product from "../component/pages/Product";
import Faq from "../component/pages/Faq";
import Contact from "../component/pages/Contact";
import Login from "../component/pages/Login";
import NotFound from "../component/common/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/product" exact component={Product} />
      <Route path="/product/:for" exact component={Product} />
      {/* <Route
        path="/product/:for/:type"
        render={props => <Items {...props} data={this.state.products} />}
      /> */}
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
