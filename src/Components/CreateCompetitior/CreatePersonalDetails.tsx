import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useCookies} from "react-cookie";
import axios from "axios";
import Sex from "../../Objects/Sex";
import Authorities from "../../Objects/Authorities";
import CreateNewCompetitorData from "../../Objects/CreateNewCompetitorData";
import Club from "../../Objects/Club";
import PersonalDetails from "../../Objects/PersonalDetails";

type Props = {}


const CreatePersonalDetails: React.FC<Props> = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token', 'username', 'roles_details']);
    const [accessToken, setAccessToken, removeAccessToken] = useCookies(['access_token']);
    const [loading, setLoading] = useState<boolean>(true);
    const [genders, setGender] = useState<Sex[]>([])
    const cookie: Authorities = cookies.roles_details;
    // const competitorData: CreateNewCompetitorData = new CreateNewCompetitorData("", "", "", new Date(), "");
    const [competitorData, setCompetitorData] = useState<CreateNewCompetitorData>(new CreateNewCompetitorData("", "", "", new Date(), ""))
    const handleNamesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        competitorData.names = e.target.value
    };
    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        competitorData.surname = e.target.value
    };
    const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        competitorData.gender = e.target.value
    };
    const handleBornDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        competitorData.bornDate = new Date(e.target.value)
    };
    const handleClubChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        competitorData.club = e.target.value
    };

    const submitForm = () => {
        console.log(cookies.roles_details)
        let club: Club = cookies.roles_details.administeredClubs.filter((element: Club, index: any, array: any) => {
            return element.name === competitorData.club
        })[0]
        let personalDetails: PersonalDetails = new PersonalDetails(competitorData.names, competitorData.surname, null, null, null, competitorData.bornDate.toLocaleDateString(), competitorData.gender, null);
        let data = {
            club: club,
            personalDetails: {
                name: personalDetails.names,
                surname: personalDetails.surname,
                sex: {
                    sex: personalDetails.gender
                }
            }
        }
        var formdata = new FormData();
        formdata.append("club", JSON.stringify(club));
        formdata.append("personalDetails", JSON.stringify({
            name: personalDetails.names,
            surname: personalDetails.surname,
            sex: {
                sex: personalDetails.gender
            }
        }));

        let date = personalDetails.birthDate ? personalDetails.birthDate.toString().split("/") : ""
        let parsedDate = date[2] + "-" + date[1] + "-" + (date[0].length > 1 ? date[0] : '0' + date[0])


        axios({
            url: "http://localhost:8090/competitors/addNew",
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + accessToken.access_token
            },
            data: {
                "club": club,
                "personalDetails": {
                    "name": personalDetails.names,
                    "surname": personalDetails.surname,
                    "sex": {
                        "sex": personalDetails.gender
                    },
                    "birthDate": parsedDate
                }
            }
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8090/sex").then(response => {
            setGender(response.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="App">Loading...</div>;
    }


    return (

        <Row className={'justify-content-center'}>
            <>
                {console.log(genders)}
            </>
            <Col className={'col-7'}>
                <Form className={"form-control-lg"}>

                    <Form.Group className="mb-3" controlId="competitorNames">
                        <Form.Label>Imiona</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź imiona zawodnika" onChange={handleNamesChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="competitorSurname">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź nazwisko zawodnika"
                                      onChange={handleSurnameChange}/>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="competitorSurname">
                        <Form.Label>Płeć</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleGenderChange}>

                            <option>Wybierz Płeć</option>
                            <>
                                {genders.map((gender) => <option value={gender.sex}>{gender.sex}</option>)
                                }
                            </>

                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="competitorBirthDate">
                        <Form.Label>Data urodzenia</Form.Label>
                        <Form.Control type="date" onChange={handleBornDateChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="competitorSurname">
                        <Form.Label>Klub</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleClubChange}>


                            <option>Wybierz Klub</option>
                            {
                                cookie.administeredClubs.map(club => {
                                    return (<option value={club.name}>{club.name}</option>)
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    {/*<Form.Group className="mb-3" controlId="profile photo">*/}
                    {/*    <Form.Label>Zdjęcie profilowe</Form.Label>*/}
                    {/*    <Form.Control type="file"/>*/}
                    {/*</Form.Group>*/}

                    <Button className={"button"} onClick={submitForm}>Zapisz</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default CreatePersonalDetails;