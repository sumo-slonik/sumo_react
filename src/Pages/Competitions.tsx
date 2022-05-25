import React from "react";
import Menu from "../Components/Menu";
import MyTable from "../Components/MyTable";



const Competitions = () => (
    <div className={"main-page"}>
        <div className={"left-column"}></div>
        <div className={"center"}>
        <Menu/>
        <div className={"content"}>
                <div className={"content-block"}>
                        <div className={"Header"}>Wydarzenia</div>
                </div>
            <MyTable/>
        </div>
        <div className={"fotter"}></div>
        </div>
        <div className={"right-column"}></div>
    </div>
)

export default Competitions