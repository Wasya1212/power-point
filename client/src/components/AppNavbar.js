import React, { Component } from 'react';
import Modal from 'react-modal';
import {Link as RouteLink} from 'react-router-dom';
import AppSearch from './AppSearch';
import {Login as AppLogin} from './AppLogin';
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

Modal.setAppElement('#modal-container')

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      loginModal: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showLoginModal = () => {
    this.setState({
      loginModal: true
    });
    document.getElementById('root').classList.add('blured');
    document.body.style.overflow = 'hidden';
  }

  hideLoginModal = () => {
    this.setState({
      loginModal: false
    });
    document.getElementById('root').classList.remove('blured');
    document.body.style.overflow = 'auto';
  }

  render() {
    return (
      <TopBar>
        <TopBarLeft>
          <Menu>
            <div className="logo">
              <MenuText><RouteLink to='/'>Presentate.com</RouteLink></MenuText>
            </div>
            <MenuItem><RouteLink to='/collections'>collections</RouteLink></MenuItem>
            <MenuItem><RouteLink to='/presentations'>presentations</RouteLink></MenuItem>
            <MenuItem><RouteLink to='/favorites'>favorites</RouteLink></MenuItem>
          </Menu>
        </TopBarLeft>
        <TopBarRight>
          <div className="top-search">
            <AppSearch />
          </div>
          {
            this.props.isAuthenticated
              ? (
                <Menu>
                  <MenuItem className="projects-controll"><Button color={Colors.SECONDARY}>create</Button></MenuItem>
                  <MenuItem visible={this.state.isOpen ? "true" : "false"} className="user-profile">
                    <Link isDropdown onClick={this.toggle}>
                      <div className="user-picture"><img src="https://i09.fotocdn.net/s21/34/gallery_m/59/2523150881.jpg" alt="profile picture" className="profile-picture" /></div>
                      <Menu isVertical>
                        <MenuItem><a href="#">profile</a></MenuItem>
                        <MenuItem><a href="#">settings</a></MenuItem>
                        <MenuItem><a href="#">logout</a></MenuItem>
                      </Menu>
                    </Link>
                  </MenuItem>
                </Menu>
              )
              : (
                <Menu>
                  <MenuItem className="login-btn">
                    <Button color={Colors.SUCCESS} onClick={this.showLoginModal}>Sign Up</Button>
                  </MenuItem>
                </Menu>
              )
          }
        </TopBarRight>
        {
          this.state.loginModal
            ? <Modal isOpen={true}>
              <Button className="close-modal-btn" onClick={this.hideLoginModal}></Button>
              <AppLogin />
            </Modal>
            // (
            //   <aside className="login-modal">
            //     <div className="modal-container">
            //       <Button className="close-modal-btn" onClick={this.hideLoginModal}></Button>
            //       <AppLogin />
            //     </div>
            //   </aside>
            // )
            : null
        }
      </TopBar>
    )
  }
}

export default AppNavbar;
