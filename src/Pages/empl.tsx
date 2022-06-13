import React from "react";
import Menu from "../Components/BootstrapMenu";
import MyTable from "../Components/MyTable";
import BootstrapPage from "./BootstrapPage";
import EmplTable from "../Components/emplTable";



const Empl = () => (
    <BootstrapPage>
            <>
            <div className="well">
                    <p>Lista Pracowników</p>
            </div>
            <EmplTable/>
            </>
    </BootstrapPage>
)

export default Empl