import React from "react";
import { Image, List } from "semantic-ui-react";

const Posts = () => (
  <List divided verticalAlign="middle">
    <List.Item>
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
      />
      <List.Content>
        <List.Header as="a">Daniel Louise</List.Header>
      </List.Content>
    </List.Item>
  </List>
);

export default Posts;
