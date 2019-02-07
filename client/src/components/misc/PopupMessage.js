import React, { Component } from "react";
import styled from "styled-components";
import Avatar from "../../assets/avatar.png";
import { Label } from "semantic-ui-react";
const Main = styled.div`
  position: absolute;
  right: 40px;
  bottom: 20px;
  padding: 30px;
  background-color: #2c2b3a;
  border-radius: 20px;
  box-shadow: -17px 13px 31px rgba(0, 0, 0, 0.4);
  color: #a094a8;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-column-gap: 20px;
  & img {
    width: 100%;
  }
`;

export default class PopupMessage extends Component {
  render() {
    return (
      <Main>
        <div>
          <img src={Avatar} alt="av" />
          {this.props.notifications.length > 0 && (
            <Label color="teal" floating>
              {this.props.notifications.length}
            </Label>
          )}
        </div>

        <p>{this.props.message}</p>
      </Main>
    );
  }
}
