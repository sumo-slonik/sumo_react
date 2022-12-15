import {Nav} from "react-bootstrap";
import React from "react";
import Authorities from "../../Objects/Authorities";
import {LinkContainer} from "react-router-bootstrap";

type Props = {
    authorities: Authorities
}

const ProfileSectionMenu: React.FC<Props> = (props) => {
    return (
        <>
            {console.log("mamy ten przypadek")}
            {console.log(props.authorities)}
            {props.authorities ?
            (<>
                <>
                    {
                        props.authorities.roles.includes("CLUB_COACH") ?
                            (<LinkContainer to="/clubAdmin">
                                <Nav.Link>Panel trenera klubowego</Nav.Link>
                            </LinkContainer>) :
                            <></>
                    }

                    {
                        props.authorities.roles.includes("NATIONAL_COACH")?
                            (<LinkContainer to="/nationalCoach/editTeam">
                                <Nav.Link>Edytuj reprezentacje</Nav.Link>
                            </LinkContainer>):
                            <></>
                    }

                    {
                        props.authorities.roles.includes("NATIONAL_COACH")?
                            (<LinkContainer to="/nationalCoach/competitionRegistration">
                                <Nav.Link>Zgłaszanie na zawody</Nav.Link>
                            </LinkContainer>):
                            <></>
                    }
                </>
            </>) :
            (<>
                Jenak inaczej
            </>)
            }



        </>
    )
}

export default ProfileSectionMenu;