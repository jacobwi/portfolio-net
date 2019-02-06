import React, { Component } from "react";
import styled from "styled-components";
import { Image, Icon } from "semantic-ui-react";
import Smoke from "../../assets/smoke_53.png";
import Typed from "react-typed";

import media from "../../Media";
const Container = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: lightgray;
  @import url("https://fonts.googleapis.com/css?family=Carrois+Gothic+SC");
  & .typed {

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
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-column-gap: 140px;
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
          color: #0082cb;
        }
      }
    }
  }


  & em {
    color: #0082cb;
  }
`;

const Window = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 100px));

    width: 100%;
    height: 400px;
    background-color: white;
    border-radius: 4px;
    z-index: 5;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
    overflow: hidden;
    & .window-sidebar { 
      background-color: rgb(232, 234, 236);
      padding: 20px 10px;
      
      & .item {
          display: grid;
          grid-template-columns: 32px 1fr;
          color: #0082cb; 

      }
      & :hover {
            background-color: rgb(165, 165, 165);
            cursor: pointer;
            border-radius: 4px;
          }
	  }

    & .item-content {
        padding: 20px;

        & .header {
          color: black;

        }

      }


`


const str = [
  "I'm a <em>Full Stack Software Engineer</em> specialized in React, NodeJS, Python, C#, and many other languages and frameworks. I also specialize in developing secure and optimized applications using the proper algorithms and software engineering practices. I believe that languages and frameworks are just tools and what matters is who's using them. "
];
export default class About extends Component {
  state = {
    active: "languages"
  }
  render() {
    return (
      <Container>
        <div className="background" />
        <div className="content">
          <div className="left">            
            <Window>
            <div class="window-sidebar">
		          <div class="item">
                <Icon name='paper plane' />
                <p>Skills</p>
              </div>
	          </div>
            <div class='item-content'>
              <p className='header'>C#:</p><p className='desc'> {'{.NET Core, MVC, Web API, WPF}'}</p>
              <br />
              <p className='header'>JavaScript:</p><p className='desc'> {'{React, Redux, Node.js, Express.js, API, Electron.js, ES5, ES6}'}</p>
            </div>
            </Window>
          </div>
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
