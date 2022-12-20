import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

type Props = {
    page: number
    nextPage: () => void
    prevPage: () => void
}

const CreateCompetitionsThirdPage : React.FC<Props> = (props) => {
    if (props.page === 2) {
        return (
        <Row className={'justify-content-center'}>
            <Col className={'col-7'}>
            <Form className={"form-control-lg"}>

                <Form.Group className="mb-3" controlId="competiotionName">
                    <Form.Label>Początek zgłaszania zawodników</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Koniec zgłaszania zawodników</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="startDate">
                    <Form.Label>Początek zgłaszania sędziów</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="endDate">
                    <Form.Label>Koniec zgłaszania sędziów</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Komunikat organizacyjny</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>

                <Button className={"button"} variant="primary" onClick={props.prevPage}>
                    Wstecz
                </Button>
                <Button className={"button"} variant="primary">
                    Zapisz
                </Button>
            </Form>
            </Col>
        </Row>
    )}
    else{
        return (
            <>
            </>
        )
    }
}

export default CreateCompetitionsThirdPage;