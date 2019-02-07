import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Smoke from "../../assets/smoke_53.png";
import Typed from "react-typed";
import { Skills } from "./Items";

const Container = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    padding: 60px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-column-gap: 40px;

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
  height: 50%;
  background-color: white;
  border-radius: 4px;
  z-index: 5;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  & .window-sidebar {
    background-color: rgb(232, 234, 236);
    padding: 20px 30px;

    & .item {
      display: grid;
      grid-template-columns: 32px 1fr;
      color: #0082cb;
      animation: fadein 1s linear;
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
    }
    & :hover {
      background-color: rgb(165, 165, 165);
      cursor: pointer;
      border-radius: 4px;
    }
  }

  & .item-content {
    padding: 20px;
    animation: fadeinRight 1s linear;
    @keyframes fadeinRight {
      from {
        transform: translateX(140px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    & .header {
      color: black;
      text-indent: 20px;
    }

    & .brackets {
      color: purple;
    }

    & .mini-item {
      margin-left: 4em;
    }
  }
`;
const ItemTitle = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  background-color: ${props =>
    props.active ? "rgba(22, 20, 37, 0.4)" : "rgb(232, 234, 236)"};
  border-radius: 4px;
`;
const str = [
  "I'm a <em>Full Stack Software Engineer</em> specialized in React, NodeJS, Python, C#, and many other languages and frameworks. I also specialize in developing secure and optimized applications using the proper algorithms and software engineering practices. I believe that languages and frameworks are just tools and what matters is who's using them. "
];
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Skills"
    };
  }

  onSelect = key => {
    this.setState({
      active: key
    });
  };
  render() {
    return (
      <Container>
        <div className="background" />
        <div className="content">
          <div className="left">
            <Window>
              <div className="window-sidebar">
                {Object.keys(Skills[0]).map((item, key) => (
                  <ItemTitle
                    active={this.state.active === item ? true : false}
                    className="item"
                    key={key}
                    onClick={() => this.onSelect(item)}
                  >
                    <Icon name={Skills[0][item].icon} />
                    <p>{item}</p>
                  </ItemTitle>
                ))}
              </div>

              <div className="item-content">
                {Object.keys(Skills[0][this.state.active].items[0]).map(
                  (item, key) => (
                    <div key={key}>
                      <p className="brackets">{"{"}</p>
                      <p className="header">{item}:</p>
                      <div className="mini-item">
                        <p>
                          [
                          {Skills[0][this.state.active].items[0][item].join(
                            ", "
                          )}
                          ]
                        </p>
                      </div>

                      <p className="brackets">{"}"}</p>
                    </div>
                  )
                )}
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
