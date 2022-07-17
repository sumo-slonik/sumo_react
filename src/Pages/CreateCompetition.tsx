import React from "react";
import BootstrapPage from "./BootstrapPage";
import CreateCompetitionsFirstPage from "../Components/CreateCompetition/CreateCompetitionsFirstPage";
import CreateCompetitionsSecondPage from "../Components/CreateCompetition/CreateCompetitionsSecondPage";
import CreateCompetitionsThirdPage from "../Components/CreateCompetition/CreateCompetitionsThirdPage";
import CreateCompetitionForm from "../Components/CreateCompetition/CreateCompetitionForm";

const CreateCompetition = () => {

    return (
        <BootstrapPage>
            <>
                <CreateCompetitionForm/>
            </>
        </BootstrapPage>)
}
export default CreateCompetition;