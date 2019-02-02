import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import store from "./store";
import Loader from "./components/Loader";
import Routes from "./components/routes";
import NavMenu from "./components/navbar";

const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {  
    background-image: linear-gradient(45deg,#00aeef 0%,#096fb9 100%);
    overflow: hidden;
    width: 100%;
    height: 100vh;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.25;
  }

 
`;
class Root extends React.Component {
  componentWillMount() {
    if (localStorage.jwtToken) {
      // TODO user already logged in
    }
  }
  render() {
    return this.props.isLoading ? (
      <Loader />
    ) : (
      <div>
        <GlobalStyle />
        <NavMenu />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.authentication.isLoading
});

const RootWithAuth = withRouter(connect(mapStateToProps)(Root));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
