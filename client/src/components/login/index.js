import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button, Header, Message } from "semantic-ui-react";
import * as Color from "../../config/colors";
import { connect } from "react-redux";
import { login } from "../../actions";
const Container = styled.div`
  width: 320px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    this.setState({
      errors: this.props.errors ? this.props.errors : []
    });
  }
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors
      });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const User = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(User, this.props.history);
  };
  close = () => this.setState({ open: false, errors: [] });
  render() {
    return (
      <Container>
        <div className="login-form">
          <Header as="h2" color="blue">
            Login
          </Header>
          {Object.keys(this.state.errors).length > 0 && (
            <Message negative>
              <Message.Header>Login Unsuccessful</Message.Header>
              {Object.values(this.state.errors).map((error, key) => (
                <p>{error}</p>
              ))}
            </Message>
          )}
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
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
