import React, { Component } from "react";
import styled from "styled-components";
import hero from "../../assets/section-1.png";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import Star from "../../assets/FreeAbstractLineArtDeeezy01.png";
import * as Color from "../../config/colors";
import { connect } from "react-redux";
import { setLoader } from "../../actions";
import ResumeFile from "../../assets/JacobWilliam2019.pdf";
const Hero = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  & .background {
    background-image: url(${Star});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  & .container {
    animation: anim 1s 1 ease;
    @keyframes anim {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 20px;
    padding: 0 40px;
    & img {
      width: 200px;
      box-shadow: -17px 13px 41px rgba(13, 78, 158, 0.2);
      border-radius: 10px;
    }
  }

  & h1 {
    font-size: 3em;
  }
  & p {
    font-size: 2rem;
  }
  & span {
    font-size: 2.4rem;
  }

  & .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }
`;
const Button = styled.div`
  background: ${props => (props.primary ? "#221E30" : `${Color.primary}`)};
  color: white;
  height: 40px;
  margin: 40px 0;
  text-align: center;
  padding: 10px;
  white-space: nowrap;
  border: 0;
  border-radius: 4px;
  font-size: 1.8vh;
  outline: none;
  width: 140px;
  &:hover {
    color: ${Color.tertiary};
    cursor: pointer;
    filter: brightness(110%);
  }
  & a {
    color: white;
  }
`;

const list = [
  "React.js",
  "Redux",
  "C#",
  ".NET Core",
  "Node.js",
  "MongoDB",
  "Public/Private API",
  "Microsoft SQL"
];
class Home extends Component {
  render() {
    return (
      <Hero>
        <div className="background" />
        <div className="container">
          <div>
            <img src={hero} alt="ih" />
          </div>
          <div className="hero">
            <h1>Hi there!</h1>
            <p>My name is Jacob William and I specalize in</p>
            <div className="typedp-container">
              <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={list}
                smartBackspace
                shuffle={false}
                backDelay={1200}
                fadeOut={true}
                fadeOutDelay={400}
                loopCount={0}
                showCursor={false}
                className="typed"
              />
              <br />
            </div>
            <div className="buttons">
              <Link to="/about">
                <Button>Learn More</Button>
              </Link>
              <a href={ResumeFile}>
                <Button>Resume</Button>
              </a>
            </div>
          </div>
        </div>
      </Hero>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication.isLoading
});
export default connect(
  mapStateToProps,
  { setLoader }
)(Home);
