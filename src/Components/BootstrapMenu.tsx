import React, {Dispatch, SetStateAction} from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import LoginModal from "./LoginModal";
import {useCookies} from "react-cookie";

type Props = {
    userLoggedIn:boolean,
    setUserLoggedIn:Dispatch<SetStateAction<boolean>>
}

const Menu:React.FC<Props> = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token', 'username', 'roles_details']);

    const handleCloseLogin = () => setModalShow(false);
    const handleShowLogin = () => {
        if (props.userLoggedIn) {
            console.log("wylogowanie")
            removeCookie('access_token')
            removeCookie('refresh_token')
            removeCookie('username')
            removeCookie('roles_details')
            props.setUserLoggedIn(false)
        } else {
            setModalShow(true)
        }
    }
    return (<>
            <Navbar bg="primary" variant="dark" className="vh-5 sticky-top mt-3 mb-1" expand="md">
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/competitions">
                            <Nav.Link>Zawody</Nav.Link>
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
                        <Button onClick={() => handleShowLogin()}>
                            {props.userLoggedIn ? "wyloguj" : "zaloguj"}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LoginModal userLoggedIn={props.userLoggedIn} setUserLoggedIn={props.setUserLoggedIn} show={modalShow} onHide={() => {
                handleCloseLogin()
            }} loginSuccess={props.userLoggedIn} setLoginSuccess={props.setUserLoggedIn}/>

        </>
    )
}

export default Menu