import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap"; //{DropdownButton, Dropdown, Row, Button}

import './navbar.css';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUserNinja } from "@fortawesome/free-solid-svg-icons";


export default class menu extends React.Component {
constructor(props) {
    super(props);
    this.state = {};
}
render() {
    return (
    <Navbar id="navbar">
        <Container>
        <Navbar.Brand href="#home">EcoRuta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Servicios</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            </Nav>
            <input type="submit" class="form_nav" value="REGISTRO"></input>
            <input type="submit" class="form_nav" value="ACCEDER"></input>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
}