import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import Items from './Items';

const Header = styled.header`
  margin: 0 !important;
  padding: 40px 0;
`

const Resume = styled.div`
  
`

export default class NavMenu extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getNavbarItems = items => 
    items.length > 0 &&
    items.map( item => (
      <NavItem>
        <NavLink tag={Link} className="text-dark" to={item.to}>{item.name}</NavLink>
      </NavItem>
    ));
  render () {
    return (
      <Header>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" light >
          <Container>
            <NavbarBrand tag={Link} to="/">Jacob William</NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
              <ul className="navbar-nav flex-grow">
                {this.getNavbarItems(Items)}
                <Resume>
                  <Button animated='vertical' secondary>
                    <Button.Content hidden>Resume</Button.Content>
                    <Button.Content visible>
                      <Icon name='user' color="white"/>
                    </Button.Content>
                  </Button>
                </Resume> 
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </Header>
    );
  }
}
