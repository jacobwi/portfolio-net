import React, { Component } from "react";
import styled from "styled-components";
import { Image, List, Header } from "semantic-ui-react";
import Posts from "./Posts";
import * as Color from '../../config/colors';
const Container = styled.div`

  animation: fadein 1s linear;
  display: grid;
  padding: 60px 40px;


  min-height: 100vh;
  border-top: 15px solid ${Color.primary};

  width: 100%;

`;

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Header as="h2">
          <Image circular src="/images/avatar/large/patrick.png" /> Latest Posts
        </Header>
        <Posts />
      </Container>
    );
  }
}
