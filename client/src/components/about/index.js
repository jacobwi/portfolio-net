import React, { Component } from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import Smoke from "../../assets/smoke_53.png";
import Typed from "react-typed";
const Container = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: lightgray;
  @import url("https://fonts.googleapis.com/css?family=Carrois+Gothic+SC");
  & .typed {
    font-family: "Carrois Gothic SC", sans-serif;
    font-size: 1.6rem;
  }
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

    animation: about 5s alternate infinite;
    @keyframes about {
      from {
        filter: blur(0);
        opacity: 1;
        filter: brightness(140%);
      }
      to {
        filter: blur(3px);
        opacity: 0.6;
        transform: translateX(-10px);
        transform: translatey(-10px);
        filter: brightness(40%);
      }
    }
  }
  & .content {
    padding: 200px 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  & .right {
    & h1 {
      letter-spacing: 2px;
      font-size: 2rem;
      color: white;
      text-transform: uppercase;
      animation: head 6s forwards;
      @keyframes head {
        from {

          filter: blur(1px);
          opacity: 0.6;
          transform: translateX(40px);
          transform: translatey(-20px);
          font-size: 1.4rem;
        }
        to {
          filter: blur(0);
          opacity: 1;
          color: #0082CB;
        }
      }
    }
  }

  & .left {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  & em {
    color: #0082CB;
  }
`;

const str = [
  "I'm a <em>Full Stack Software Engineer</em> specialized in React, NodeJS, Python, C#, and many other languages and frameworks. I also specialize in developing secure and optimized applications using the proper algorithms and software engineering practices. I believe that languages and frameworks are just tools and what matters is who's using them. "
];
export default class About extends Component {
  render() {
    return (
      <Container>
        <div className="background" />
        <div className="content">
          <div className="left">aasdfasf</div>
          <div className="right">
            <h1>Jacob William</h1>
            <Typed
              typeSpeed={1}
              strings={str}
              shuffle={false}
              backDelay={20}
              fadeOut={true}
              fadeOutDelay={400}
              loopCount={0}
              showCursor={false}
              className="typed"
            />
            <p />
          </div>
        </div>
      </Container>
    );
  }
}
