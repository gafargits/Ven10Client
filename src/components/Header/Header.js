import React, { useState } from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="mb-3">
        <NavbarBrand href="/">Ven10</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`mr-auto ${classes.NavCenter}`} navbar>
            <NavItem>
              <Link className={classes.Link} to="/filter1">Filter 1</Link>
            </NavItem>
            <NavItem>
              <Link className={classes.Link} to="/filter2">Filter 2</Link>
            </NavItem>
            <NavItem>
              <Link className={classes.Link} to="/filter3">Filter 3</Link>
            </NavItem>
            <NavItem>
              <Link className={classes.Link} to="/filter4">Filter 4</Link>
            </NavItem>
            <NavItem>
              <Link className={classes.Link} to="/filter5">Filter 5</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;