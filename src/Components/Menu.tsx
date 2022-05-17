import React from 'react';
import ButtonInMenu from "./ButtonInMenu";

const Menu = () => (
     <div className={"navi-panel"}>
        <div className={"menu-logo-image"}>LOGO</div>
        <div className={"menu-centre"}>
            <ul className={"horizontal-menu"}>
                <li><ButtonInMenu text={"Zawody"} href={"/competitions"}/></li>
                <li><ButtonInMenu text={"Państwa"} href={"/countries"}/></li>
                <li><ButtonInMenu text={"Rankingi Europejskie"} href={"/rankings"}/></li>
            </ul>
        </div>
        <div className={"menu-login-section"}>
            <ul className={"login-menu horizontal-menu"}>
                <li><ButtonInMenu text={"Login"} href={"/login"}/></li>
            </ul>
        </div>
    </div>
)

export default Menu