import React, {useEffect, useState} from "react";
import BootstrapPage from "./BootstrapPage";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import AllCompetitorsInCountry from "../Components/NationalTeamEdit/AllCompetitorsInCountry";
import AllCompetitorsInNationalTeam from "../Components/NationalTeamEdit/AllCompetitorsInNationalTeam";
import SimpleTable from "../Components/simpleTable";
import {useCookies} from "react-cookie";
import Authorities from "../Objects/Authorities";
import axios from "axios";
import Competitor from "../Objects/Competitor";
import AgeCategory from "../Objects/ageCategory";
import WeightCategory from "../Objects/WeightCategory";
import Sex from "../Objects/Sex";
import NationalTeamMembershipOfCompetitor from "../Objects/NationalTeamMembershipOfCompetitor";


const NationalTeamEdit = () => {
    const [showAddModal, setShowAddModal] = useState<boolean>(false)
    const [selectedCompetitors, setSelectedCompetitors] = useState<Competitor[]>([])
    const [actualNationalTeam, setActualNationalTeam] = useState<NationalTeamMembershipOfCompetitor[]>([])
    const [ageCategories, setAgeCategoriesy] = useState<AgeCategory[]>([])
    const [genders, setGenders] = useState<Sex[]>([])
    const [weightCategories, setweightCategories] = useState<WeightCategory[]>([])

    const [actualSelectedAgeCategory, setActualSelectedAgeCategory] = useState<AgeCategory>()
    const [actualSelectedGender, setActualSelectedGender] = useState<Sex>()
    const [actualSelectedWeightCategory, setActualSelectedWeightCategory] = useState<WeightCategory>()
    const [chengesMembershipToDataBese, setChengesMembershipToDataBese] = useState<NationalTeamMembershipOfCompetitor[]>([])

    const [competitorsInCountry, setCompetitorsInCountry] = useState<Competitor[]>([])
    const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token', 'username', 'roles_details']);


    const authorities = cookies.roles_details as Authorities

    useEffect(() => {
        axios({
            url: "http://localhost:8090/competitors/country?country=" + authorities.trainedNationalTeam[0].country.country,
            method: "get",
        }).then((response) => {
            setCompetitorsInCountry(response.data);
        }).catch((e) => {
            console.error("cannot fetch subjects: " + e);
        }).then(() => {
            console.log("zawodnicy w kraju")
            console.log(competitorsInCountry)
        })

        axios({
            url: "http://localhost:8090/competitors/nationalTeam/memberships?nationalTeamId=" + authorities.trainedNationalTeam[0].id,
            method: "get"
        }).then((response) => {
            console.log("zawodnicy w kadrze z bazy")
            console.log("__________________________")
            console.log(response)
            console.log("__________________________")

            let variable = JSON.stringify(response.data);
            // variable = parseNationalTeamMembershipRs(variable)
            console.log(variable)
            let result = JSON.parse(variable) as NationalTeamMembershipOfCompetitor[]
            // setActualNationalTeam(result.map(element => (new NationalTeamMembershipOfCompetitor(element._id,element._nationalTeam,element._competitor,element._membershipStart,element._membershipEnd,element._weightCategory))) );
            let mapa = result.map(element => (new NationalTeamMembershipOfCompetitor(element.id, element.nationalTeam, element.competitor, element.membershipStart, element.membershipEnd, element.category)))
            setActualNationalTeam(mapa);
        }).catch((e) => {
            console.error("cannot fetch subjects: " + e);
        })
    }, [])


    const sendNationalMembershipData = (data: string) => {
        axios({
            url: "http://localhost:8090/national-teams/saveCompetitorsMemberships",
            method: "post",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + cookies.access_token
            },
            data: data
        })
    }

    const parseNationalTeamMembershipRq = (data: string) => {
        data = data.replaceAll("_personalDetails", "personalDetails")
        data = data.replaceAll("_competitor", "competitor")
        data = data.replaceAll("_membershipStart", "membershipStart")
        data = data.replaceAll("_membershipEnd", "membershipEnd")
        data = data.replaceAll("_category", "category")
        data = data.replaceAll("_nationalTeam", "nationalTeam")
        return data
    }

    const parseNationalTeamMembershipRs = (data: string) => {
        data = data.replaceAll("personalDetails", "_personalDetails")
        data = data.replaceAll("competitor", "_competitor")
        data = data.replaceAll("membershipStart", "_membershipStart")
        data = data.replaceAll("membershipEnd", "_membershipEnd")
        data = data.replaceAll("weightCategory", "_category")
        data = data.replaceAll("nationalTeam", "_nationalTeam")
        return data
    }
    const addMembership = (nationalMembership: NationalTeamMembershipOfCompetitor) => {
        let membership = new NationalTeamMembershipOfCompetitor(nationalMembership.id, nationalMembership.nationalTeam, nationalMembership.competitor, nationalMembership.membershipStart, nationalMembership.membershipEnd, nationalMembership.category);
        setChengesMembershipToDataBese((actual) => {
            return [membership, ...actual]
        })
        setActualNationalTeam((actual) => {
            return [membership, ...actual]
        })
    }

    const prepareDataTOSend = () => {
        chengesMembershipToDataBese.sort((a: NationalTeamMembershipOfCompetitor, b: NationalTeamMembershipOfCompetitor) => {
            if (a.competitor.personalDetails.id != null && b.competitor.personalDetails.id != null)
                return a.competitor.personalDetails?.id - b.competitor.personalDetails?.id
            else
                return 0
        })

        let sizeOfList = chengesMembershipToDataBese.length
        let resultToSend = []
        for (let i: number = 0; i < sizeOfList; i++) {
            let actual = chengesMembershipToDataBese[i]
            if (i + 1 < sizeOfList) {
                let next = chengesMembershipToDataBese[i + 1]
                if (actual.competitor.personalDetails?.id === next.competitor.personalDetails?.id) {
                    //    mamy dwie daty pojmiam (usuwam pierwszy z rekordów)
                    if (actual.membershipEnd != null && next.membershipEnd != null) {
                        //    pass
                    }
                    //    data dodania i data zakończenia (usuwam oba)
                    else if ((actual.membershipEnd != null && next.membershipEnd == null) || (actual.membershipEnd == null && next.membershipEnd != null)) {
                        console.log("TAK JEST!")
                        i++;
                    } else {
                        resultToSend.push(actual)
                    }
                } else {
                    resultToSend.push(actual)
                }
            }
        }
        setChengesMembershipToDataBese(resultToSend)
    }

    const getAgeCategories: () => void = () => {
        axios({
            url: "http://localhost:8090/category/ageCategory",
            method: "get"
        }).then((response) => {
                setAgeCategoriesy(response.data)
            }
        )
    }

    const getGenders: () => void = () => {
        axios({
            url: "http://localhost:8090/sex",
            method: "get"
        }).then((response) => {
                setGenders(response.data)
            }
        )
    }

    const getWeightCategories: (ageCategoryId: number, sex: string) => void = (ageCategoryId: number, sex: string) => {
        axios({
            url: "http://localhost:8090/category/weightCategoriesForSexAndAge?sex=" + sex + "&ageCategoryId=" + ageCategoryId,
            method: "get"
        }).then((response) => {
                setweightCategories(response.data)
            }
        )

    }

    const addCompetitorsToNationalTeam = () => {
        console.log(selectedCompetitors)
        let nationalTeam = selectedCompetitors.map((competitor) => {
            return ({
                "personalDetails": competitor.personalDetails,
                "ageCategory": actualSelectedAgeCategory?.name,
                "weightCategory": actualSelectedWeightCategory?.weightCategory
            })
        })

        nationalTeam.map((membership) => {
            let competitor = new Competitor(membership.personalDetails, null, null)
            let membershipObj;
            try {
                console.log("__________________")
                console.log(actualSelectedWeightCategory)
                console.log("__________________")
                membershipObj = new NationalTeamMembershipOfCompetitor(null, authorities.trainedNationalTeam[0], competitor, new Date(Date.now()), null, actualSelectedWeightCategory as WeightCategory)
            } catch (ex) {
                console.log(ex)
            }
            addMembership(membershipObj as NationalTeamMembershipOfCompetitor)
            console.log(actualNationalTeam)
        })
    }

    const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let actual = genders.filter((gender) => {
            return gender.sex === e.target.value
        })
        if (actual.length > 0) {
            setActualSelectedGender(actual[0])
        }
    };
    const handleAgeCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let actual = ageCategories.filter((category) => {
            return category.name === e.target.value
        })
        if (actual.length > 0) {
            setActualSelectedAgeCategory(actual[0])
            try {
                getWeightCategories(actual[0].id, actualSelectedGender?.sex as string)
            } catch (ex) {
                console.log(ex)
            }
        }
    };


    const handleWeightCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let actual = weightCategories.filter((category) => {
            return category.weightCategory === e.target.value
        })
        if (actual.length > 0) {
            setActualSelectedWeightCategory(actual[0])
        }
    };


    const columns = [
        {"title": "Imię", "field": "personalDetails.name"},
        {"title": "Nazwisko", "field": "personalDetails.surname"},
        {"title": "Rok urodzenia", "field": "personalDetails.birthYear"}
    ]

    return (
        <BootstrapPage>

            <Row className="vh-5">{}</Row>
            <Row className="vh-75">
                <Col className="col-6">
                    <h3>
                        <>
                            {console.log("autorytety")}
                            {console.log(authorities)}
                            Wszyscy zawodnicy w państwie
                        </>
                    </h3>

                    <AllCompetitorsInCountry data={competitorsInCountry} setSelectedCompetitors={setSelectedCompetitors}
                                             setModalShow={setShowAddModal} getAgeCategories={getAgeCategories}
                                             getGenders={getGenders}/>
                </Col>

                <Col className="col-6">
                    <h3> Zawodnicy wybrani do kadry</h3>
                    <AllCompetitorsInNationalTeam data={actualNationalTeam} dataSetter={setActualNationalTeam}
                                                  diffSetter={setChengesMembershipToDataBese}/>
                </Col>
            </Row>
            <Row className="vh-5 text-center">
                <Button className={"button"} onClick={
                    () => {
                        prepareDataTOSend()
                        let data = parseNationalTeamMembershipRq(JSON.stringify(chengesMembershipToDataBese))
                        sendNationalMembershipData(data)
                        console.log(data)
                    }
                }>Zapisz</Button>
            </Row>
            <Modal
                show={showAddModal}
                onHide={() => {
                    setShowAddModal(false)
                }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Dodawanie zaowników do kadry
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className="col-9">
                            <SimpleTable title={"Wybrani zawodnicy"} columns={columns} data={selectedCompetitors}/>
                        </Col>
                        <Col className="col-3">

                            <Form>

                                <Form.Select aria-label="Default select example" onChange={handleGenderChange}>
                                    <option>Płeć</option>
                                    {
                                        genders.map((gender) => {
                                            return (<option id={gender?.sex}> {gender.sex} </option>)
                                        })
                                    }
                                </Form.Select>


                                <Form.Select aria-label="Default select example" onChange={handleAgeCategoryChange}>
                                    <option>Kategoria wiekowa</option>
                                    {
                                        ageCategories.map((category) => {
                                            return (<option> {category.name} </option>)
                                        })
                                    }
                                </Form.Select>

                                <Form.Select aria-label="Default select example" onChange={handleWeightCategoryChange}>
                                    <option>Kategoria wagowa</option>
                                    {
                                        weightCategories.map((category) => {
                                            return (<option> {category.weightCategory} </option>)
                                        })
                                    }
                                </Form.Select>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="text-center m-1"><Button className={"button"} onClick={() => {
                        setShowAddModal(false)
                        addCompetitorsToNationalTeam()
                    }}> Zapisz </Button></Row>
                </Modal.Body>
            </Modal>


        </BootstrapPage>)
}

export default NationalTeamEdit