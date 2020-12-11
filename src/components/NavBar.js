import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          Mi app
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mx-1">
              <Link to="/" className="text-light">Inicio</Link>
            </NavItem>
            <NavItem className="mx-1">
              <Link to="/products" className="text-light">Productos</Link>
            </NavItem>
            <NavItem className="mx-1">
              <Link to="/create-product" className="text-light">Crear Producto</Link>
            </NavItem>
          </Nav>
          <NavbarText className="mx-1">
            React APP B47
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
