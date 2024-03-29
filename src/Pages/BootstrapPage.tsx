import React from "react";
import Menu from "../Components/BootstrapMenu";
import {Col, Container, Row} from "react-bootstrap";
import ProfileSection from "../Components/ProfileSection/ProfileSection";
import {createGlobalState} from "react-hooks-global-state";

type Props = {
    children?: React.ReactNode
};

const initialState = {userLoggedIn: false};
const {useGlobalState} = createGlobalState(initialState);

const BootstrapPage: React.FC<Props> = ({children}) => {

    const [userLoggedIn, setUserLoggedIn] = useGlobalState('userLoggedIn')

    return (
        <>
            <Container fluid className="text-center d-flex flex-column vh-95">
                <Row className="content row-eq-height h-auto">
                    <Col className={"sticky-top sidenav vh-100 left-page-margin" + (userLoggedIn ? "col-2" : "col-1")} >
                            <ProfileSection userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>
                    </Col>
                    <Col className={" vh-95 container-fluid " + (userLoggedIn ? "col-10" : "col-11")}>
                        <Menu userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>
                        <Container fluid className={" mainContent" + (userLoggedIn ? "col-offset-2" : "col-offset-1")}>
                            {children}
                        </Container>
                    </Col>
                </Row>
            </Container>

            {/*<footer className="container-fluid text-center vh-5 sticky-bottom footer ">*/}
            {/*    <p>Footer Text</p>*/}
            {/*</footer>*/}
        </>
    )
}

export default BootstrapPage