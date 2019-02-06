import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button, Header, Icon, Modal } from "semantic-ui-react";
import * as Color from "../../config/colors";
import Smoke from "../../assets/smoke_51.png";
const Form = styled.div`
  width: 320px;
  margin: auto;
  animation: contact 1s linear;
  min-height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  & .background {
    background-image: url(${Smoke});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    animation: contact 7s alternate infinite;
    @keyframes contact {
      from {
        filter: blur(0);
        opacity: 1;
        filter: brightness(60%);
      }
      to {
        filter: blur(3px);
        opacity: 0.6;
        transform: translateX(-60px);
        transform: translatey(-60px);
        filter: brightness(40%);
      }
    }
  }
  @keyframes contact {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  & .form {
    margin: auto auto;
    padding: 60px 40px;
    background-color: rgb(22, 20, 37, 0.9);
    border-radius: 20px;
    box-shadow: -17px 13px 41px rgba(0, 0, 0, 0.4);
    border-top: 15px solid ${Color.primary};
    text-align: center;
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
      message: "",
      errors: []
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    if (!this.state.email) {
      this.state.errors.push("Email is invalid");
      this.setState({
        open: true
      });
    }
    event.preventDefault();
    if (!this.state.subject) {
      this.state.errors.push("Subject is invalid");
      this.setState({
        open: true
      });
    }
    if (!this.state.name) {
      this.state.errors.push("Name is invalid");
      this.setState({
        open: true
      });
    }
    if (!this.state.message) {
      this.state.errors.push("Message is invalid");
      this.setState({
        open: true
      });
    }
  };
  close = () => this.setState({ open: false, errors: [] });
  render() {
    return (
      <Form>
        <div className="background" />
        <div className="form">
          <Header as="h2" color="blue">
            <Icon name="send" color="blue" /> Contact
          </Header>
          <Input
            icon="user circle outline"
            iconPosition="left"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <Input
            icon="envelope outline"
            iconPosition="left"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <Input
            icon="staylinked"
            iconPosition="left"
            placeholder="Subject"
            name="subject"
            value={this.state.subject}
            onChange={this.onChange}
          />
          <Input
            icon="sticky note outline"
            iconPosition="left"
            placeholder="Message"
            name="message"
            value={this.state.message}
            onChange={this.onChange}
          />
          <Button secondary onClick={this.onSubmit}>
            Submit
          </Button>
        </div>

        <Modal size="mini" open={this.state.open} onClose={this.close}>
          <Modal.Header>Unable to send your message</Modal.Header>
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
      </Form>
    );
  }
}
