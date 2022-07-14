import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";


const CreateCompetitionsFirstPage = () => {
    return (
        <Row className={'justify-content-center'}>
            <Col className={'col-5'}>
            <Form className={"form-control-sm"}>

                <Form.Group className="mb-3" controlId="competiotionName">
                    <Form.Label>Nazwa zawodów</Form.Label>
                    <Form.Control type="text" placeholder="Wprowadź nazwę zawodów"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Miasto</Form.Label>
                    <Form.Control type="text" placeholder="Miasto"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="startDate">
                    <Form.Label>Data rozpoczęcia</Form.Label>
                    <Form.Control type="date" placeholder="Data rozpoczęcia"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="endDate">
                    <Form.Label>Data zakończnia</Form.Label>
                    <Form.Control type="date" placeholder="Data zakończenia"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Typ zawodów</Form.Label>
                    <Form.Control type="date" placeholder="wprowadź typ zawodów"/>
                </Form.Group>

                <Button variant="primary">
                    Dalej
                </Button>
            </Form>
            </Col>
        </Row>
    )
}

export default CreateCompetitionsFirstPage;