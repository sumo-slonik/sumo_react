import React from 'react';
import ButtonInMenu from "./ButtonInMenu";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import LoginModal from "./LoginModal";


const Menu = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const handleCloseLogin = () => setModalShow(false);
    const handleShowLogin = () => setModalShow(true);
    return (<>
        <Navbar bg="primary" variant="dark" className=" sticky-top mt-3 mb-1" expand="md">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/competitions">
                            <Nav.Link >Zawody</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/countries">
                            <Nav.Link>Państwa</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/rankings">
                            <Nav.Link>Rankingi Europejskie</Nav.Link>
                        </LinkContainer>
                        {/*admin part*/}
                        <LinkContainer to="/countryAdmin">
                            <Nav.Link>Panel administratora reprezentacji</Nav.Link>
                        </LinkContainer>
                        {/*admin part*/}
                    </Nav>
                        <Nav className="me-auto">
                            <Button onClick={()=>handleShowLogin()}>
                                Login
                            </Button>
                        </Nav>
        </Navbar.Collapse>
    </Navbar>
    <LoginModal show={modalShow} onHide={()=>{handleCloseLogin()}}/>

</>
)
}

export default Menu