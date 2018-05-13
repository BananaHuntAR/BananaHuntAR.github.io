import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    activeItem: 'home'
  };

  handleClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted className="navbar-container">
        <Menu inverted pointing secondary className="navbar">
          <Menu.Item
            name="home"
            as={Link}
            to="/"
            active={activeItem === 'home'}
            onClick={this.handleClick}
            className="navbar-item"
          />
          <Menu.Item
            name="about"
            as={Link}
            to="/about"
            active={activeItem === 'about'}
            onClick={this.handleClick}
            className="navbar-item"
          />
          <Menu.Item
            name="meet the team"
            as={Link}
            to="/team"
            active={activeItem === 'meet the team'}
            onClick={this.handleClick}
            className="navbar-item"
          />
        </Menu>
      </Segment>
    );
  }
}
