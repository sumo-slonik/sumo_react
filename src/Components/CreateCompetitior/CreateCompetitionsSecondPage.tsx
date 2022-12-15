import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import SelectionGropingTable from "../selectionGropingTable";
import categories from '../../Moks/Categories.json'
import Category from "../../Objects/Category";

type Props = {
    page: number
    nextPage: () => void
    prevPage: () => void
}


const CreateCompetitionsSecondPage: React.FC<Props> = (props) => {
    const [categories1, setcategories] = useState<Category[]>([]);

    const columns = [
        {"title": "Kategoria wagowa", "field": "category"},
        {"title": "Kategoria wiekowa", "field": "ageCategory"},
        {"title": "Płeć", "field": "gender"},
    ]
    if (props.page === 1) {
        return (
            <Row className={'justify-content-center'}>
                <Col className={'col-7'}>
                    <Form className={"form-control-lg"}>


                        <SelectionGropingTable title={'Kategorie na zawodach'} columns={columns}
                                               data={categories as Category[]}/>

                        <Button variant="primary" className={"m-2"} onClick={props.prevPage}>
                            Wstecz
                        </Button>
                        <Button variant="primary" onClick={props.nextPage}>
                            Dalej
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default CreateCompetitionsSecondPage;