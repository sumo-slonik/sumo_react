import React from 'react';
import ButtonInMenu from "./ButtonInMenu";
import {Container, Nav, Navbar} from "react-bootstrap";

const Menu = () => (
<>
    <Navbar bg="primary" variant="dark" className="vh-5 mt-3 mb-1">
        <Container>
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href={"/competitions"}>Położenia Pracowników</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
</>
)

export default Menu