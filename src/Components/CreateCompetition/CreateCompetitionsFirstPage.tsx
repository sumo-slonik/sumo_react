import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

type Props = {
    page: number
    nextPage: () => void
}


const CreateCompetitionsFirstPage: React.FC<Props> = (props) => {
    if (props.page === 0) {
        return (
            <Row className={'justify-content-center'}>
                <Col className={'col-7'}>
                    <Form className={"form-control-lg"}>

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

                        <Button variant="primary" onClick={()=>{props.nextPage()}}>
                            Dalej
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    } else {
        return (<>
        </>)
    }
}

export default CreateCompetitionsFirstPage;