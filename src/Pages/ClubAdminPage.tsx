import React from "react";
import BootstrapPage from "./BootstrapPage";
import countries from '../Moks/Countries.json'
import {Button, Card, Col, ListGroup, ListGroupItem, Nav, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai";
import {TiPlusOutline} from "react-icons/ti";


const ClubAdminPage = () => {

    return (
        <BootstrapPage>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://picsum.photos/1000/1000"} />
                <Card.Body>
                    <Card.Title>{"Dodaj zawodnika"}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <LinkContainer to={"addCompetitor/"}>
                        <ListGroupItem>
                            <Button className={"button"}>
                                <TiPlusOutline /> Dodaj
                            </Button>
                        </ListGroupItem>
                    </LinkContainer>
                </ListGroup>
            </Card>
        </BootstrapPage>)
}
export default ClubAdminPage;