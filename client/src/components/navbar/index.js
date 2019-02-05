import React from "react";
import styled from "styled-components";
import { css } from "emotion";
import media from "../../Media";
import { Link } from "react-router-dom";
import Items from "./Items";
import Avatar from "../../assets/avatar.png";
//import Footer from "../footer";
import * as Color from "../../config/colors";
const Main = styled.div`
  width: auto !important;
  padding: 0;
  margin: 0;
`;

const Box = styled.div`
  overflow: hidden;
  font-size: 18px;
  letter-spacing: 4px;
  font-family: "Avenir Next", "Avenir", sans-serif;
`;

const fullNav = css`
  display: grid;
  grid-template-rows: 1fr 80px;

  & .top {
    margin: 0;
   
  }
  & img {
    padding-left: 40px;
    margin-top: 20px;
    width: 200px;
  }
  & .active {
    border-left: 3px solid ${Color.primary};
    color: ${Color.primary};
    background-color: rgba(22, 20, 37, 0.4);
    transition: all 500ms linear;
  }
  & .item {
    padding: 10px 80px;
    margin: 20px 0;
    color: ${Color.secondary};
    cursor: pointer;
    @keyframes FadeIn {
      0% {
        opacity: 0;
        transform: scale(0.1);
      }

      85% {
        opacity: 1;
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    animation: FadeIn 1s linear;
    animation-fill-mode: both;
  }
  ${media.phone`
        display: none;
        
    `};
  ${media.phablet`
        display: none;
    `};
  ${media.tablet`
        display: none;
    `};
`;

// Styles for the mobile View of the navigation
const mobileNav = css`
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  & div {
    & a {
      font-size: 24px;
      padding: 0 140px;
      color: ${Color.tertiary};
    }
  }
  & .active {
    border-bottom: 3px solid ${Color.primary};
    color: ${Color.primary};
  }
  & .footer-mobile {
    display: flex !important;
    flex-direction: row;
  }
`;
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home",
      mobile: false
    };
  }
  getNavbarItems = items =>
    items.length > 0 &&
    items.map(item => (
      <Link to={item.to} key={item.name}>
        <div
          className={
            this.state.activeItem === item.name ? "active item" : "item"
          }
          id={item.name}
          onClick={this.handleItemClick}
        >
          {item.name}
        </div>
      </Link>
    ));
  toggleNav = () => {
    this.setState({
      mobile: !this.state.mobile
    });
  };
  handleItemClick = e => {
    if (e.target.id !== this.state.activeItem) {
      this.setState({
        activeItem: e.target.id,
        mobile: false
      });
    }
  };
  render() {
    const { activeItem, mobile } = this.state;
    return (
      <Main>
        <Box width="100%" className={fullNav}>
          <div className="top">
            <img src={Avatar} alt="av" />

            {this.getNavbarItems(Items)}
          </div>
        </Box>
        <Box className={mobileNav}>
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
              <div>{this.getNavbarItems(Items)}</div>
            </MobileDropMenu>
          )}
        </Box>
      </Main>
    );
  }
}

export default Menu;
