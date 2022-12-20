import React from "react";
import BootstrapPage from "./BootstrapPage";
import countries from '../Moks/Countries.json'
import {Button, Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai";
import { Nav } from "react-bootstrap";
import NationalTeam from "../Components/NationalRepresentationDetails/NationalTeam";
import HallOfFame from "../Components/NationalRepresentationDetails/HallOfFame";
import NationalTrainers from "../Components/NationalRepresentationDetails/NationalTrainers";


const NationalRepresentationDetails = () => {

    return (
        <BootstrapPage>
           <h1>Polska</h1>
            <Row className="align-items-lg-start">
                <Col className="col-1 p-1 m-1"><Button className={"button"}>Kluby</Button></Col>
                <Col className="col-1 p-1 m-1"><Button className={"button"}>Zaowdnicy</Button></Col>
                <Col className="col-1 p-1 m-1"><Button className={"button"}>Trenerzy</Button></Col>
                <Col className="col-1 p-1 m-1"><Button className={"button"}>Sędziowie</Button></Col>
            </Row>
            <Row>
                    <NationalTeam/>
            </Row>
            <Row>
                <h1>
                    Galeria sław
                </h1>
                <HallOfFame/>
            </Row>
            <Row>
                <h1>
                    Trenerzy kadrowi
                </h1>
                <NationalTrainers/>
            </Row>
        </BootstrapPage>)
}
export default NationalRepresentationDetails;