import BootstrapPage from "./BootstrapPage";
import {useParams} from "react-router-dom";
import DeclaredCompetitors from "../Components/Competitions/DeclaredCompetitors";
import {useEffect, useState} from "react";
import axios from "axios";
import {Tabs} from "../Components/Tabs";
import declaredCompetitions from "../Moks/DeclaredCompetitions.json"
import CompetitionsDescription from "../Components/Competitions/CompetitionsDescription";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import CompetitionHeader from "../Components/Competitions/CompetitionHeader";


const CompetitionDetails = () => {

    const params = useParams();
    const [competitors, setCompetitors] = useState([]);

    console.log(declaredCompetitions)

    return (
        <BootstrapPage>
            <>
                <Row className="h-25">
                    <CompetitionHeader/>
                </Row>
                <Row className="h-75">
                    <Col>
                        <CompetitionsDescription/>
                    </Col>
                    <Col>
                        <Accordion defaultActiveKey="0"  className="vh-80 w-auto">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Zgłoszeni zawodnicy</Accordion.Header>
                                <Accordion.Body>
                                    <DeclaredCompetitors/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Walki</Accordion.Header>
                                <Accordion.Body>
                                    <DeclaredCompetitors/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Skład sędziowski</Accordion.Header>
                                <Accordion.Body>
                                    <DeclaredCompetitors/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Wyniki</Accordion.Header>
                                <Accordion.Body>
                                    <DeclaredCompetitors/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </>
        </BootstrapPage>)
}

export default CompetitionDetails