import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import SelectionGropingTable from "../selectionGropingTable";
import categories from '../../Moks/Categories.json'
import Category from "../../Objects/Category";



const CreateCompetitionsSecondPage = () => {
    const [categories1, setcategories] = useState<Category[]>([]);

    const columns = [
        {"title": "Kategoria wagowa", "field": "category" },
        {"title": "Kategoria wiekowa", "field": "ageCategory" },
        {"title": "Płeć", "field": "gender" },
    ]
    return (
        <Row className={'justify-content-center'}>
            <Col className={'col-7'}>
            <Form className={"form-control-lg"}>


                <SelectionGropingTable title={'Kategorie na zawodach'} columns={columns} data={categories as Category[]}/>

                <Button variant="primary" className={"m-2"}>
                    Wstecz
                </Button>
                <Button variant="primary">
                    Dalej
                </Button>
            </Form>
            </Col>
        </Row>
    )
}

export default CreateCompetitionsSecondPage;