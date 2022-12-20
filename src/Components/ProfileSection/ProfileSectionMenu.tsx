import {Card, ListGroup, Nav} from "react-bootstrap";
import React from "react";
import Authorities from "../../Objects/Authorities";
import {LinkContainer} from "react-router-bootstrap";

type Props = {
    authorities: Authorities
}

const ProfileSectionMenu: React.FC<Props> = (props) => {
    return (
        <>
            {console.log("mamy ten przypadek")}
            {console.log(props.authorities)}
                <>
                    <>
                        {
                            props.authorities.roles.includes("CLUB_COACH") ?
                                (
                                    <>
                                        <Card>
                                            <Card.Header>
                                                <LinkContainer to="/clubAdmin">
                                                    <Nav.Link>Trener klubowy</Nav.Link>
                                                </LinkContainer>
                                            </Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <LinkContainer to="/clubAdmin">
                                                        <Nav.Link>Dodaj nowego</Nav.Link>
                                                    </LinkContainer>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <LinkContainer to="/clubAdmin">
                                                        <Nav.Link>Połącz profil</Nav.Link>
                                                    </LinkContainer>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <LinkContainer to="/clubAdmin">
                                                        <Nav.Link>Transfer</Nav.Link>
                                                    </LinkContainer>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card>

                                    </>
                                ) :
                                <></>
                        }

                        {
                            props.authorities.roles.includes("NATIONAL_COACH") ?

                                (<>
                                        <Card>
                                            <Card.Header>
                                                <LinkContainer to="/clubAdmin">
                                                    <Nav.Link>Trener kadrowy</Nav.Link>
                                                </LinkContainer>
                                            </Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <LinkContainer to="/nationalCoach/editTeam">
                                                        <Nav.Link>Edytuj reprezentacje</Nav.Link>
                                                    </LinkContainer>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <LinkContainer to="/nationalCoach/competitionRegistration">
                                                        <Nav.Link>Zgłoś na zawody</Nav.Link>
                                                    </LinkContainer>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card>

                                    </>
                                ) :
                                <></>
                        }

                        {
                            props.authorities.roles.includes("NATIONAL_COACH") ?

                                (<>
                                        <Card>
                                            <Card.Header>
                                                <LinkContainer to="/countryAdmin">
                                                    <Nav.Link>Administrator Kadrowy</Nav.Link>
                                                </LinkContainer>
                                            </Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <LinkContainer to="/countryAdmin">
                                                        <Nav.Link>Stwórz zawody</Nav.Link>
                                                    </LinkContainer>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <LinkContainer to="/nationalCoach/editTeam">
                                                        <Nav.Link>Edytuj reprezentacje</Nav.Link>
                                                    </LinkContainer>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <LinkContainer to="/nationalCoach/competitionRegistration">
                                                        <Nav.Link>Zgłoś na zawody</Nav.Link>
                                                    </LinkContainer>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card>

                                    </>
                                ) :
                                <></>
                        }
                    </>
                </>

        </>
    )
}

export default ProfileSectionMenu;