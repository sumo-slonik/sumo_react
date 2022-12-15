import React, {useState} from "react";
import {Card, ProgressBar} from "react-bootstrap";
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
            <Card className={"mh-100"}>
                <Card.Title>
                    <ProgressBar animated now={Math.floor((page + 1) * 100 / 3)} label={page + 1 + '/3'}/>
                </Card.Title>
                <Card.Body>
                    <CreateCompetitionsFirstPage page={page} nextPage={nextPage} prevPage={prevPage}/>
                    <CreateCompetitionsSecondPage page={page} nextPage={nextPage} prevPage={prevPage}/>
                    <CreateCompetitionsThirdPage page={page} nextPage={nextPage} prevPage={prevPage}/>
                </Card.Body>
            </Card>

        </>
    )

}

export default CreateCompetitionForm;