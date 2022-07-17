import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import Category from "../../Objects/Category";


const CreateCompetitionsFirstPage = () => {
    const [page, setPage] = useState<Number>(0);


    switch (page){
        case 0:
            return (
                <>
                    <CreateCompetitionsFirstPage/>
                </>)
        break;
    }
}

export default CreateCompetitionsFirstPage;