import React, {useState} from "react";
import {Button, Card, ListGroup, ListGroupItem, Nav, ProgressBar} from "react-bootstrap";
import CreateCompetitionsSecondPage from "./CreateCompetitionsSecondPage";
import CreateCompetitionsThirdPage from "./CreateCompetitionsThirdPage";
import CreateCompetitionsFirstPage from "./CreatePersonalDetails";
import CreatePersonalDetails from "./CreatePersonalDetails";
import {LinkContainer} from "react-router-bootstrap";

enum CreationTypes{
    newUser,
    existingUser,
    noSet
}

const CreateCompetitorForm = () => {
    const [page, setPage] = useState<number>(0);
    const [creationType, setCreationType] = useState<CreationTypes>(CreationTypes.noSet);
    const nextPage = function () {
        setPage(page + 1)
    }

    const prevPage = function () {
        setPage(page - 1)
    }

    const goToNoSetType = function () {
        setCreationType(CreationTypes.noSet)
    }

    const goToExistingUserType = function () {
        setCreationType(CreationTypes.existingUser)
    }

    const goToNewUserType= function () {
        setCreationType(CreationTypes.newUser)
    }

    switch (creationType){
        case CreationTypes.existingUser:
            return (<>
            </>)
        case CreationTypes.newUser:
            return (
                <>
                    <CreatePersonalDetails/>
                </>
            )
        case CreationTypes.noSet:
            return (
                <>
                    <Card className={"mh-100"}>
                        <Card.Title>
                            Wybierz co chcesz zrobić
                        </Card.Title>
                        <Card.Body>
                            <ListGroup>
                                <ListGroupItem>
                                    <LinkContainer to="/clubAdmin/addCompetitor/addNew">
                                        <Button>Tworzenie nowego zawodnika</Button>
                                    </LinkContainer>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Button onClick={goToExistingUserType}>Spięcie zawodnika z instniejącym profilem</Button>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Button>Transfer zawodnika z innego klubu</Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </>

            )
            break;
    }
}

export default CreateCompetitorForm;