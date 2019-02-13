import React from "react";
import { Image, List } from "semantic-ui-react";
import styled from "styled-components";

const NoPost = styled.div`
  font-size: 2em;
  color: white;
  text-align: center;
`;

const Posts = Post => (
  <div>
    {Post.Body ? (
      <List divided animated>
        <List.Item>
          <Image avatar src={Post.img} />
          <List.Content>
            <List.Header as="a">{Post.Title}</List.Header>
            <List.Description>{Post.Body}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    ) : (
      <NoPost>No Posts 😢😢</NoPost>
    )}
  </div>
);

export default Posts;
