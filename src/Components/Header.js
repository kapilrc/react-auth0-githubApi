import React, { Component } from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";



class Header extends Component {
  onLogin() {
    this.props.onLogin();
  }

  logout() {
    this.props.onLogout();
  }

  render() {
    let page;
    if(this.props.idToken){
      page = <NavItem onClick={this.logout.bind(this)} href="#">Logout</NavItem>
    }else{
      page = <NavItem onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
    }
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Github Searcher
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {page}          
        </Nav>
      </Navbar>
    );
  }
}

export default Header;