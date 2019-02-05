import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import store from "./store";
import Loader from "./components/Loader";
import Routes from "./components/routes";
import NavMenu from "./components/navbar";
import media from "./Media";
import Particles from "react-particles-js";
//  background-image: linear-gradient(45deg,#00aeef 0%,#096fb9 100%);
const GlobalStyle = createGlobalStyle`
 html {
  height: 100%;
  width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {  
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg,#290a0c,#110405);  
  }

 
`;

const Main = styled.div`
  background-color: rgb(22, 20, 37, 0.9);
  height: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  & .particles {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: 1fr;

  ${media.phone`
        display: block;
    `};
  ${media.phablet`
        display: block;
    `};
  ${media.tablet`
        display: block;
    `};
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
      <Main>
        <Container>
          <NavMenu />
          <Routes />
        </Container>
        <Particles className="particles" />
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.authentication.isLoading
});

const RootWithAuth = connect(mapStateToProps)(Root);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
