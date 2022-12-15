import SelectionGroupingTable from "../selectionGropingTable";
import React from "react";
import {ImArrowRight} from "react-icons/im";

type Props = {
    data: any[]
    setModalShow: (show: boolean) => void,
    setSelectedCompetitors: (competitors: any) => void
    getAgeCategories: () => void
    getGenders: () => void

}
const AllCompetitorsInCountry: React.FC<Props> = (props) => {

    const columns = [
        {"title": "Imię", "field": "personalDetails.name"},
        {"title": "Nazwisko", "field": "personalDetails.surname"},
        {"title": "Klub", "field": "club.club"},
        {"title": "Rok urodzenia", "field": "personalDetails.birthYear"}
    ]
    const action = [
        {
            tooltip: 'Dodaj zaznaczonych zawodników do kadry w konkretnej kategorii',
            icon: ImArrowRight,
            onClick: (evt: any, data: { length: string; }) => {
                console.log(data)
                props.setSelectedCompetitors(data)
                props.setModalShow(true)
                props.getAgeCategories()
                props.getGenders()
            }
        }
    ]

    return (

        <>
            <SelectionGroupingTable data={props.data} columns={columns} action={action}/>
        </>
    )
}

export default AllCompetitorsInCountry