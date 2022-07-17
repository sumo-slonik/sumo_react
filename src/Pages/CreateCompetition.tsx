import React from "react";
import BootstrapPage from "./BootstrapPage";
import CreateCompetitionsFirstPage from "../Components/CreateCompetition/CreateCompetitionsFirstPage";
import CreateCompetitionsSecondPage from "../Components/CreateCompetition/CreateCompetitionsSecondPage";
import CreateCompetitionsThirdPage from "../Components/CreateCompetition/CreateCompetitionsThirdPage";

const CreateCompetition = () => {

    return (
        <BootstrapPage>
            <>
                <CreateCompetitionsFirstPage/>
                <CreateCompetitionsSecondPage/>
                <CreateCompetitionsThirdPage/>
            </>
        </BootstrapPage>)
}
export default CreateCompetition;