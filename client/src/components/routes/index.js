import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import About from "../about";

import Contact from "../contact";
import Work from "../work";
import Blog from "../blog";
import Login from "../login";
import styled from "styled-components";

const Frame = styled.div`
  background-color: rgba(22, 20, 37, 0.4);
`;
export default class Router extends Component {
  render() {
    return (
      <Frame>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />

          <Route path="/work" component={Work} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>
      </Frame>
    );
  }
}
