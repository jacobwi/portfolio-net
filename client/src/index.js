import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import styled from "styled-components";
import store from "./store";
import Loader from "./components/Loader";
import Routes from "./components/routes";
import NavMenu from "./components/navbar";
import media from "./Media";
import Particles from "react-particles-js";
import tokenSetter from "./utils/tokenSetter";
import jwt_decode from "jwt-decode";

import { setUser } from "./actions";
import PopupMessage from "./components/misc/PopupMessage";
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
  state = {
    message: ""
  };
  componentWillMount() {
    if (localStorage.token) {
      // User's already logged in
      tokenSetter(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.token);

      // Check if token is not expired
      if (decoded.exp < Date.now()) {
        // Set user and get his/her notifications
        store.dispatch(setUser(decoded));
      }

      // Expaired
      else {
        localStorage.removeItem("token");
        this.setState({
          message:
            "Hi there! Your login session expaired please relog back in :)"
        });
      }
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
          {this.state.message ||
            (this.props.notifications.length > 0 && (
              <PopupMessage
                message={this.state.message}
                notifications={this.props.notifications}
              />
            ))}
        </Container>
        <Particles className="particles" />
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.authentication.isLoading,
  authentication: state.authentication,
  notifications: state.notifications
});

const RootWithAuth = withRouter(
  connect(
    mapStateToProps,
    { setUser }
  )(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
