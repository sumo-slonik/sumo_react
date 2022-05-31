import React from "react";
import Menu from "../Components/BootstrapMenu";
import MyTable from "../Components/MyTable";
import BootstrapPage from "./BootstrapPage";



const Competitions = () => (
    <BootstrapPage>
            <>
            <div className="well">
                    <p>Competitions</p>
            </div>
            <MyTable/>
            </>
    </BootstrapPage>
)

export default Competitions