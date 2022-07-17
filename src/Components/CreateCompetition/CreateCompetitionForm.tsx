import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import Category from "../../Objects/Category";
import CreateCompetitionsSecondPage from "./CreateCompetitionsSecondPage";
import CreateCompetitionsThirdPage from "./CreateCompetitionsThirdPage";
import CreateCompetitionsFirstPage from "./CreateCompetitionsFirstPage";


const CreateCompetitionForm = () => {
    const [page, setPage] = useState<number>(0);
    const nextPage = function () {
        setPage(page + 1)
    }

    const prevPage = function () {
        setPage(page - 1)
    }


    return (
        <>
            <CreateCompetitionsFirstPage page={page} nextPage={nextPage}/>
            <CreateCompetitionsSecondPage/>
            <CreateCompetitionsThirdPage/>
        </>
    )

}

export default CreateCompetitionForm;