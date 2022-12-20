import React from "react";
import BootstrapPage from "./BootstrapPage";
import Example from "../Components/Calendar/Example";
import {Carousel, Col, Container, Row} from "react-bootstrap";

const MainPage = () => (


    <BootstrapPage>
        <Container className={"fulll-width-content"}>
            GALERIA SłAW
        </Container>
        <Container className={"content-block"}>
            <Row>
                <Col lg="4">
                    <Container className={"quarter-width_content"}>
                        <Example/>
                    </Container>
                </Col>
                <Col lg="8">
                    <Container className={"three-quarters-width_content"}>
                        ARCHIWUM IMPREZ
                    </Container>
                </Col>
            </Row>
        </Container>
    </BootstrapPage>
)

export default MainPage