import React, {PropTypes} from 'react';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

const Header = ({loading}) => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Avo Calc</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/" className="nav-item">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about" activeClassName="active" className="nav-item">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
        </Nav>
        <Navbar.Text>
          {loading && <LoadingDots interval={100} dots={20}/>}
        </Navbar.Text>
        <Nav pullRight></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
