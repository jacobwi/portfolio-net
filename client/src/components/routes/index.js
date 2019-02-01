import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../home';
import About from '../about';
import Experience from '../experience';

export default class Router extends Component {
  render() {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
    </Switch>
    )
  }
}
