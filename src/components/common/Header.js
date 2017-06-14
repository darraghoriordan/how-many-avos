import React, {PropTypes} from 'react';
// import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

const Header = ({loading}) => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <a href="#" className="navbar-left">
          <img
            className="navbar__logo"
            src={require("../../images/avocalc-logo-56-x-45.png")}
            alt="Main logo imgage"/>
        </a>

        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>

        <Navbar.Text>
          {loading && <LoadingDots interval={100} dots={20}/>}
        </Navbar.Text>
        <Nav pullRight>
          <IndexLinkContainer to="/" className="nav-item">
            <NavItem eventKey={1}>calculate your order</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about" activeClassName="active" className="nav-item">
            <NavItem eventKey={2}>about</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
