import {Button, Container} from "react-bootstrap";
import {useCookies} from "react-cookie";
import React, {Dispatch, SetStateAction, useState} from "react";
import Authorities from "../../Objects/Authorities";
import ProfileSectionMenu from "./ProfileSectionMenu";

type Props = {
    userLoggedIn: boolean,
    setUserLoggedIn: Dispatch<SetStateAction<boolean>>
}

const ProfileSection: React.FC<Props> = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies(['roles_details']);



    if (props.userLoggedIn) {
        return (
            <Container fluid>

                <ProfileSectionMenu authorities={cookies.roles_details}/>
                <Button onClick={() => {
                    console.log(cookies.roles_details)
                    console.log(cookies)
                }}>kliknij mnie</Button>

            </Container>
        )
    } else {
        return <Container/>
    }
}

export default ProfileSection;