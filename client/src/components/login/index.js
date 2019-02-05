import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button, Header, Image, Modal } from "semantic-ui-react";
import * as Color from '../../config/colors';
import axios from 'axios';

const Container = styled.div`
  width: 320px;
  margin: auto;
  display:flex;
  align-items:center;
  justify-content:center;
  animation: fadein 1s linear;
  min-height: 100vh;
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
  & .login-form {

    display: grid;
    padding: 60px 40px;
    box-shadow: -17px 13px 41px rgba(0, 0, 0, 0.4);
    background: rgb(22, 20, 37, 0.9);
    border-top: 15px solid ${Color.primary};
    text-align: center;
    border-radius: 10px;
    width: 100%;
    & input {
      margin: 10px 0;
    }
  }
`;
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: []
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    if (!this.state.username) {
      this.state.errors.push("Username is invalid");
      this.setState({
        open: true
      });
    }
    event.preventDefault();
    if (!this.state.password) {
      this.state.errors.push("Password is invalid");
      this.setState({
        open: true
      });
    }
    axios
    .post("api/users/login", {
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      if (res) {
        
      }
    })
    .catch(err =>
      console.log(err)
    );
  };
  close = () => this.setState({ open: false, errors: [] });
  render() {
    return (
      <Container>
        <div className="login-form">
          <Header as="h2" color='blue'>Login</Header>
          <Input
            icon="user circle outline"
            iconPosition="left"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <Input
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />

          <Button secondary onClick={this.onSubmit}>
            Submit
          </Button>
        </div>

        <Modal size="mini" open={this.state.open} onClose={this.close}>
          <Modal.Header>Unable to login</Modal.Header>
          <Modal.Content>
            {this.state.errors &&
              this.state.errors.map((item, key) => (
                <p style={{ color: "red" }}>{item}</p>
              ))}
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="thumbs up outline"
              labelPosition="right"
              content="OK"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </Container>
    );
  }
}
