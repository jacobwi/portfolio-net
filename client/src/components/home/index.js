import React, { Component } from "react";
import styled from "styled-components";
import hero from "../../assets/section-1.png";
import Typed from "react-typed";

const Hero = styled.div`
  color: white;

  & h1 {
    font-size: 3em;
  }
  & p {
    font-size: 2rem;
  }
  & span {
    font-size: 2.4rem;
  }
  padding: 40px;
  animation: fadein 1s linear;
  @keyframes fadein {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 40px;
  & img {
    box-shadow: -17px 13px 41px rgba(13, 78, 158, 0.6);
    border-radius: 10px;
    width: 300px;
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
export default class Home extends Component {
  render() {
    return (
      <Hero>
        <img src={hero} alt="ih" />
        <div className="hero">
          <h1>Hi there!</h1>
          <p>My name is Jacob William and I specalize in</p>
          <Typed
            loop
            typeSpeed={10}
            backSpeed={10}
            strings={list}
            smartBackspace
            shuffle={false}
            backDelay={1200}
            fadeOut={true}
            fadeOutDelay={400}
            loopCount={0}
            showCursor={false}
            className='typed'
          />
        </div>
      </Hero>
    );
  }
}
