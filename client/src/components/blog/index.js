import React, { Component } from "react";
import styled from "styled-components";
import { Header, Button } from "semantic-ui-react";
import Posts from "./Posts";
import { connect } from "react-redux";
import * as Color from "../../config/colors";
const Container = styled.div`
  padding: 60px 40px;
  min-height: 100vh;
  border-top: 15px solid ${Color.primary};
  max-width: 90%;
  margin: 100px auto;
`;

class Blog extends Component {
  componentWillMount() {
    // TODO fetch all user's post
  }
  render() {
    return (
      <Container>
        <Header as="h2" color="blue">
          Latest Posts
        </Header>
        <Posts />
        {this.props.authentication.isAuthenticated && (
          <Button
            icon="add"
            circular
            size="small"
            color="blue"
            floated="right"
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
});
export default connect(mapStateToProps)(Blog);
