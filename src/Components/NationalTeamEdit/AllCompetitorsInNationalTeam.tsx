import SelectionGroupingTable from "../selectionGropingTable";
import React from "react";
import {RiDeleteBin5Fill} from "react-icons/ri";
import Competitor from "../../Objects/Competitor";
import WeightCategory from "../../Objects/WeightCategory";
import NationalTeamMembershipOfCompetitor from "../../Objects/NationalTeamMembershipOfCompetitor";
import NationalTeam from "../../Objects/NationalTeam";

type Props = {
    data: NationalTeamMembershipOfCompetitor[]
    dataSetter: (arg: any[]) => void
    diffSetter: (arg: (actual: NationalTeamMembershipOfCompetitor[]) => NationalTeamMembershipOfCompetitor[]) => void
}
const AllCompetitorsInNationalTeam: React.FC<Props> = (props) => {

    const columns = [
        {"title": "Imię", "field": "_competitor.personalDetails.name"},
        {"title": "Nazwisko", "field": "_competitor.personalDetails.surname"},
        {"title": "Rok urodzenia", "field": "_competitor.personalDetails.birthDate"},
        {"title": "Kategoria Wiekowa", "field": "_weightCategory.ageCategory.name"},
        {"title": "Kategoria Wagowa", "field": "_weightCategory.weightCategory"}
    ]


    const action = [
        {
            tooltip: 'Usuń przynależność kadrową zawodnika',
            icon: RiDeleteBin5Fill,
            onClick: ((event: any, selectedRows: { tableData: { checked: boolean }, _competitor: Competitor, _category: WeightCategory, _nationalTeam: NationalTeam, _membershipStart: Date }[]) => {
                let _data = [...props.data];
                selectedRows.forEach(row => {
                    _data = _data.filter(rowInState => {
                        return (rowInState.competitor.personalDetails.id !== row._competitor.personalDetails.id) ||
                            (rowInState.category.ageCategory.id !== row._category.ageCategory.id);
                    });
                });
                let shuldRemove = selectedRows.map((row) => {
                     return new NationalTeamMembershipOfCompetitor(null, row._nationalTeam, row._competitor, row._membershipStart, new Date(), row._category)
                })
                props.dataSetter(_data);
                props.diffSetter((actual: NationalTeamMembershipOfCompetitor[]) => {
                    return [...actual, ...shuldRemove]
                })
            })
        }
    ]

    return (

        <>
            <SelectionGroupingTable data={props.data} columns={columns} action={action}/>
        </>
    )
}

export default AllCompetitorsInNationalTeam