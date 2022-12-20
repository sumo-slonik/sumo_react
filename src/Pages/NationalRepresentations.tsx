import React from "react";
import BootstrapPage from "./BootstrapPage";
import countries from '../Moks/Countries.json'
import {Button, Card, Col, ListGroup, ListGroupItem, Nav, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai";


const NationalRepresentations = () => {

    return (
        <BootstrapPage>
           <h1>REPREZENTACJE</h1>

            <Row className="justify-content-center align-item-center">
            {
                countries.map((country: { "id": number, "name": string }, index) => <Col className=" .mx-auto mt-4 col-xs-12 col-s-12 col-md-6 col-l-4 col-xl-4 col-xxl-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://countryflagsapi.com/svg/"+country.name} />
                        <Card.Body>
                            <Card.Title>{country.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <LinkContainer to={"/countries/"+country.id}>
                                <ListGroupItem>
                                    <Button className={"button"}>
                                        <AiOutlineHome /> Strona główna
                                    </Button>
                                </ListGroupItem>
                            </LinkContainer>
                            <ListGroupItem>Kadra</ListGroupItem>
                            <ListGroupItem>Wydarzenia</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>)
            }
            </Row>



        </BootstrapPage>)
}
export default NationalRepresentations;