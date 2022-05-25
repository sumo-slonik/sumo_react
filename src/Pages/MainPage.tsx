import React from "react";
import Menu from "../Components/Menu";

const MainPage = () => (
    <div className={"main-page"}>
        <div className={"left-column"}></div>
        <div className={"center"}>
        <Menu/>
        <div className={"content"}>
                <div className={"fulll-width-content"}></div>
                <div className={"content-block"}>
                        <div className={"quarter-width_content"}></div>
                        <div className={"three-quarters-width_content"}></div>
                </div>
        </div>
        <div className={"fotter"}></div>
        </div>
        <div className={"right-column"}></div>
    </div>
)

export default MainPage