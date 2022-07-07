import React from 'react';
import ButtonInMenu from "./ButtonInMenu";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Menu = () => (
<>
    {/*<Navbar bg="primary" variant="dark" className=" sticky-top mt-3 mb-1">*/}
    {/*    <Container>*/}
    {/*        <Navbar.Brand href="/">LOGO</Navbar.Brand>*/}
    {/*        <Nav className="me-auto">*/}
    {/*            <Nav.Link href={"/competitions"}>Zawody</Nav.Link>*/}
    {/*            <Nav.Link href={"/countries"}>Państwa</Nav.Link>*/}
    {/*            <Nav.Link href={"/rankings"}>Rankingi Europejskie</Nav.Link>*/}
    {/*        </Nav>*/}
    {/*            <Nav className="me-auto">*/}
    {/*                <Nav.Link href={"/login"}>Login</Nav.Link>*/}
    {/*            </Nav>*/}
    {/*    </Container>*/}
    {/*</Navbar>*/}
        <Navbar bg="primary" variant="dark" className=" sticky-top mt-3 mb-1" expand="md">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={"/competitions"}>Zawody</Nav.Link>
                        <Nav.Link href={"/countries"}>Państwa</Nav.Link>
                        <Nav.Link href={"/rankings"}>Rankingi Europejskie</Nav.Link>
                    </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href={"/login"}>Login</Nav.Link>
                        </Nav>
        </Navbar.Collapse>
    </Navbar>

</>
)

export default Menu