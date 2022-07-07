import React from "react";
import Menu from "../Components/BootstrapMenu";
import {Col, Container, Row} from "react-bootstrap";
type Props = {
    children?: React.ReactNode
};

const BootstrapPage: React.FC<Props> = ({children})  => (
    <>
        <Container fluid className="text-center d-flex flex-column vh-95">
            <Row className="content row-eq-height h-auto">
                <Col className="col-1 sidenav vh-95 left-page-margin">
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                </Col>
                <Col className="col-10 vh-95 container-fluid">
                    <Menu/>
                    <Container fluid className="mainContent">
                        {children}
                    </Container>
                </Col>
                <Col className="col-1 sidenav vh-95 right-page-margin">
                    <div className="well">
                        <p>ADS</p>
                    </div>
                    <div className="well">
                        <p>ADS</p>
                    </div>
                </Col>
            </Row>
        </Container>

        <footer className="container-fluid text-center vh-5 sticky-bottom footer ">
            <p>Footer Text</p>
        </footer>
    </>
)

export default BootstrapPage