import React from "react";
import BootstrapPage from "./BootstrapPage";
import CreateCompetitionsFirstPage from "../Components/CreateCompetition/CreateCompetitionsFirstPage";
import CreateCompetitionsSecondPage from "../Components/CreateCompetition/CreateCompetitionsSecondPage";

const CreateCompetition = () => {

    return (
        <BootstrapPage>
            <>
                <CreateCompetitionsFirstPage/>
                <CreateCompetitionsSecondPage/>
            </>
        </BootstrapPage>)
}
export default CreateCompetition;