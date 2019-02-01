import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

import media from "../../utils/Media";
import Items from "./Items";

const Header = styled.header`
  margin: 0 !important;
  padding: 40px 0;
`;

const FullNavigation = styled.div`
  display: grid;
  grid-template-rows: 1fr 80px;
  ${media.phone`
        display: none;
        
  `};
  ${media.phablet`
        display: none;
  `};
`;
const Mobile = styled.div`
  display: none;
  ${media.phone`
        display: block;
  `};
  ${media.phablet`
        display: block;
  `};
`;

const HamburgerContainer = styled.div`
  display: ${props => (props.mobile ? "none" : "block")};
  width: 50px;
  height: 36px;
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  transition: 0.5s ease-in-out;
  z-index: 1;
  &:hover {
    cursor: pointer;
    & span {
      background: pink;
    }
  }
  & span {
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background: #ddd;
    border-radius: 9px;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  & span:nth-child(1) {
    top: 0;
  }
  & span:nth-child(2) {
    top: 14px;
  }
  & span:nth-child(3) {
    top: 28px;
  }
  span:nth-child(4) {
  }
`;

const HamburgerCloseContainer = styled.div`
  display: ${props => (props.mobile ? "block" : "none")};
  width: 50px;
  height: 36px;
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  transition: 0.5s ease-in-out;
  z-index: 1;
  &:hover {
    cursor: pointer;
    & span {
      background: pink;
    }
  }
  & span {
    display: block;
    position: absolute;
    left: 4px;
    width: 100%;
    height: 4px;
    background: #ddd;
    border-radius: 9px;
    transform: rotate(0deg);
    animation: fadein 2s;
  }
  & span:nth-child(1) {
    top: 18px;
    transform: rotate(45deg);
  }
  & span:nth-child(2) {
    top: 16px;
    transform: rotate(-45deg);
  }
`;

const MobileDropMenu = styled.div`
  background: rgba(62, 49, 68, 0.8);
  width: 100%;
  animation: navBorder 1s forwards;
  @keyframes navBorder {
    from {
      border-top-left-radius: 0;
    }
    to {
      border-top-left-radius: 400px;
    }
  }
  box-shadow: -17px 13px 41px rgba(13, 78, 158, 0.6);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  & div {
    & a {
      font-size: 24px;
      display: block;
      color: white;
      padding: 20px 0;

      &:hover {
        animation: fadein 1s ease-in-out;
      }
    }
  }

  & i {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 4px;
    position: relative;
    left: 40px;
  }

  & .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  & .active {
    border-bottom: 3px solid white;
    color: blueviolet;
  }
  & .footer-mobile {
    display: flex !important;
    flex-direction: row;
  }


`;
export default class NavMenu extends React.Component {
  state = {
    mobile: false,
    activeItem: 'home',
    isHovering: false,
    hoveredItem: ''
  }

  handleMouseHover = item => {
    console.log()
    this.setState({
      isHovering: !this.state.isHovering,
      hoveredItem: item
    });
  }
  getNavbarItems = items =>
    items.length > 0 &&
    items.map(item => (
      <Link to={item.to}>
        <div
          className={this.state.activeItem === item.name ? "active item" : "item"}
          id={item.name}
          onClick={this.handleItemClick}
          onMouseEnter={() => this.handleMouseHover(item.name)}
          onMouseLeave={this.handleMouseHover}
        >
          {item.name}
          { item.name == this.state.hoveredItem &&
            <i class="arrow left"></i>
          }
      
        </div>
      </Link>
    ));
  toggleNav = () => {
    this.setState({
      mobile: !this.state.mobile
    });
  };
  render() {
    const { activeItem, mobile } = this.state;
    return (
      <Header>
        <FullNavigation>
          <div>
            Jacob William
          </div>

          

        </FullNavigation>

        <Mobile>
          <HamburgerContainer
            onClick={this.toggleNav}
            mobile={this.state.mobile}
          >
            <span />
            <span />
            <span />
            <span />
          </HamburgerContainer>

          {mobile && (
            <MobileDropMenu>
              <HamburgerCloseContainer
                onClick={this.toggleNav}
                mobile={this.state.mobile}
              >
                <span />
                <span />
              </HamburgerCloseContainer>
              <div>
                {this.getNavbarItems(Items)}
              </div>
              
            </MobileDropMenu>
          )}
        </Mobile>
      </Header>
    );
  }
}
