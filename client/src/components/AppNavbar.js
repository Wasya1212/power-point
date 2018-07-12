import React, { Component } from 'react';
import AppSearch from './AppSearch';
import {
  TopBar,
  TopBarLeft,
  TopBarRight,
  Menu,
  MenuItem,
  MenuText,
  Button,
  Link,
  isDropdown,
  isVertical,
  Colors
} from 'react-foundation';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <TopBar>
        <TopBarLeft>
          <Menu>
            <div className="logo">
              <MenuText><a href="/">Presentate.com</a></MenuText>
            </div>
            <MenuItem><a href="/dashboard">dashboard</a></MenuItem>
            <MenuItem><a href="/collections">collections</a></MenuItem>
            <MenuItem><a href="/presentations">presentations</a></MenuItem>
            <MenuItem><a href="/favorites">favorites</a></MenuItem>
          </Menu>
        </TopBarLeft>
        <TopBarRight>
          <div className="top-search">
            <AppSearch />
          </div>
          <Menu>
            <li className="projects-controll"><Button color={Colors.SECONDARY}>create</Button></li>
            <li visible={this.state.isOpen ? "true" : "false"} className="user-profile">
              <Link isDropdown onClick={this.toggle}>
                <div className="user-picture"><img src="https://i09.fotocdn.net/s21/34/gallery_m/59/2523150881.jpg" alt="profile picture" className="profile-picture" /></div>
                <Menu isVertical>
                  <MenuItem><a href="#">profile</a></MenuItem>
                  <MenuItem><a href="#">settings</a></MenuItem>
                  <MenuItem><a href="#">logout</a></MenuItem>
                </Menu>
              </Link>
            </li>
          </Menu>
        </TopBarRight>
      </TopBar>
    )
  }
}

export default AppNavbar;
