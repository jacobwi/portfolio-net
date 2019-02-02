import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button, Header, Image } from "semantic-ui-react";
const Form = styled.div`
  width: 320px;
  margin: auto;
  animation: fadein 1s linear;
  @keyframes fadein {
    from {
      transform: translateX(-140px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  & .form {
    display: grid;
    padding: 60px 40px;
    box-shadow: -17px 13px 41px rgba(13, 78, 158, 0.6);
    background: white;
    margin: 60px auto;
    border-top: 15px solid black;
    text-align: center;
    border-radius: 10px;
    width: 100%;
    & input {
      margin: 10px 0;
    }
  }
`;
export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }
  render() {
    return (
      <Form>
        <div className="form">
          <Header as="h2">
            <Image circular src="/images/avatar/large/patrick.png" /> Contact
          </Header>
          <Input
            icon="user circle outline"
            iconPosition="left"
            placeholder="Name"
          />
          <Input
            icon="envelope outline"
            iconPosition="left"
            placeholder="Email"
          />
          <Input icon="staylinked" iconPosition="left" placeholder="Subject" />
          <Input
            icon="sticky note outline"
            iconPosition="left"
            placeholder="Message"
          />
          <Button secondary>Secondary</Button>
        </div>
      </Form>
    );
  }
}
