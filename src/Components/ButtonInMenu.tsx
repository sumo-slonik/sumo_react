import React from 'react';
import {Link} from "react-router-dom";

interface props {
    text: string,
    href: string
}

const ButtonInMenu = ({text, href}: props) => {
    return <Link className="menu-button" to={href ?? "/"}> {text ?? "CLICK ME"} </Link>
}


export default ButtonInMenu