import SimpleTable from "../simpleTable";
import React from "react";
import {Nav} from "react-bootstrap";
import {BsArrowUpRight} from "react-icons/bs";
import achievements from '../../Moks/Achievements.json'

const Achievements = () => {
    const Columns = [
        {
            title: "", field: 'personalDetails', render: (rowData: { personalDetails: {profilePhoto: string } }) => {
                return <img src="https://img.myloview.pl/fototapety/gold-stamp-number-one-1-first-place-award-reward-medal-rosette-700-178546607.jpg" style={{width: 40, borderRadius: '50%'}} alt=""/>
            }
        },
        {"title": "Miejsce", "field": "place"},
        {"title": "Ranga", "field": "competitions.type"},
        {"title": "Rok", "field": "competitions.year"},
        {"title": "Kategoria wagowa", "field": "category.category"},
        {"title": "kategoria wiekowa", "field": "category.ageCategory"},
    ]

    return (
        <>
            <SimpleTable title={"Zajęte miejsca"} columns={Columns} data={achievements}/>
        </>
    )
}

export default Achievements;