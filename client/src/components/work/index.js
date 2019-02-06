import React, { Component } from "react";
import styled from "styled-components";
import {
  Header,
  List,
  Icon,
  Card,
  Image,
  Modal,
  Reveal,
  Label
} from "semantic-ui-react";
import Projects from "../../config/work";

const Main = styled.div`
  min-height: 100vh;
  padding: 20px 40px;
  margin: 0 auto;
  & .header {
    & h2 {
    }
    & .icons {
      justify-content: flex-end;
    }
  }
  & i {
    color: white;
    font-size: 1.4em;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

const Content = styled.div`
  padding: 60px 0;
  & .card-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 40px;
    & .visible {
      filter: brightness(100%);
    }
    animation: card 600ms linear;

    @keyframes card {
      from {
        opacity: 0;
        transform: translateX(-10px);
      }
      to {
        opacity: 1;
      }
    }
  }
  & img {
    object-fit: cover;
    width: 100%;
    height: 200px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 6px;

    &:hover {
      cursor: pointer;
    }
  }
  & .container {
    & .image {
      filter: brightness(50%);
    }
  }

  & .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export default class Work extends Component {
  render() {
    return (
      <Main>
        <div className="header">
          <Header as="h2" color="blue">
            <Icon name="send" color="blue" /> Work
          </Header>
          <List floated="right" horizontal className="icons">
            <List.Item>
              <Icon name="search" />
            </List.Item>
            <List.Item>
              <Icon name="share alternate square" />
            </List.Item>
          </List>
        </div>

        <Content>
          <Card.Group className="card-group">
            {Projects &&
              Projects.map((item, key) => (
                <Modal
                  className="modal-ui"
                  style={{ backgroundColor: "transparent !important" }}
                  key={key}
                  dimmer="blurring"
                  trigger={
                    <Image.Group>
                      {" "}
                      <Reveal animated="fade">
                        <Reveal.Content visible>
                          <Image
                            src={item.img}
                            alt={item.name}
                            className="visible"
                          />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                          <div className="container">
                            <Image
                              src={item.img}
                              alt={item.name}
                              className="image"
                            />
                            <div className="overlay">
                              <div className="text">
                                {item.name} <br /> <em>Click to learn more</em>
                              </div>
                            </div>
                          </div>
                        </Reveal.Content>
                      </Reveal>
                    </Image.Group>
                  }
                  content={
                    <div className="modal-content">
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                      <div className="stack">
                        {item.languages.map((lang, langKey) => (
                          <List
                            divided
                            horizontal
                            size="tiny"
                            key={langKey}
                            className="lang-list"
                          >
                            <List.Item
                              style={{
                                display: "flex",
                                padding: "24px"
                              }}
                            >
                              <i
                                className={`devicon-${lang[0]}-plain`}
                                style={{
                                  display: "inline-block",
                                  fontSize: "24px"
                                }}
                              />
                              <List.Content>
                                <List.Header
                                  style={{
                                    color: "white",
                                    paddingLeft: "20px"
                                  }}
                                >
                                  {lang[1]}
                                </List.Header>
                              </List.Content>
                            </List.Item>
                          </List>
                        ))}
                      </div>
                      {item.url && (
                        <a href={item.url}>
                          <Label as="a" image size="medium">
                            <Icon name="github alternate" color="pink" />
                            Source Code
                          </Label>
                        </a>
                      )}
                    </div>
                  }
                  closeIcon
                  position="bottom center"
                />
              ))}
          </Card.Group>
        </Content>
      </Main>
    );
  }
}
