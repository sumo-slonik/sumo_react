import React, {useEffect, useState} from "react";
import BootstrapPage from "./BootstrapPage";
import axios from "axios";
import SimpleTable from "../Components/simpleTable";
import {Accordion, Col, Nav, Row} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import Achievements from "../Components/Competitor/Achievements";
import Fights from "../Components/Competitor/Fights";
import DeclaredCompetitors from "../Components/Competitions/DeclaredCompetitors";
import FightsOnCompetition from "../Components/Competitions/FightsOnCompetition";
import PieChart from "../Components/Competitor/PieChart";

const CompetitorDetails = () => {

    return (
        <BootstrapPage>
            <>
                <Row className=" border border-primary">
                    <Col className="col-md-12 col-l-4 col-xl-4 col-xl-4">
                        <img src="https://avatars.githubusercontent.com/u/61011609?s=400&u=41647a0aad302f518e14d40cd980f2f41278c57e&v=4"/>
                    </Col>
                    <Col className="col-md-12 col-l-8 col-xl-8 col-xl-8 text-uppercase text-left">
                        <h2 className="text-left">
                            Jakub nowakowski <br/>
                            2000<br/>
                            POLSKA<br/>
                            LUKS LUBZINA<br/>
                        </h2>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-md-12 col-l-6 col-xl-6 col-xl-6">
                        <Achievements/>
                    </Col>
                    <Col className="col-md-12 col-l-6 col-xl-6 col-xl-6">
                        <Accordion defaultActiveKey="0"  className="vh-80 w-auto">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Walki</Accordion.Header>
                                <Accordion.Body>
                                    <Fights/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Przynależność klubowa</Accordion.Header>
                                <Accordion.Body>
                                    <Fights/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-12 col-l-4 col-xl-4 col-xl-4">
                        <PieChart/>
                    </Col>
                    <Col className="col-md-12 col-l-4 col-xl-4 col-xl-4">
                    </Col>
                    <Col className="col-md-12 col-l-4 col-xl-4 col-xl-4">
                    </Col>

                </Row>
            </>
        </BootstrapPage>)
}

export default CompetitorDetails