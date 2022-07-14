import SimpleTable from "../simpleTable";
import React from "react";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import achievements from '../../Moks/Achievements.json'

const NationalTrainers = () => {
    const Columns = [
        {"title": "Imię", "field": "place"},
        {"title": "Nazwisko", "field": "competitions.type"},
        {"title": "Płeć", "field": "category.ageCategory"},
        {"title": "Klasa trenerska", "field": "category.ageCategory"},
        {"title": "Funkcja", "field": "category.category"},
    ]

    return (
        <>
            <SimpleTable title={"Trenerzy kadrowi"} columns={Columns} data={achievements}/>
        </>
    )
}

export default NationalTrainers;