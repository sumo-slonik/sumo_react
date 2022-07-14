import MaterialTable from 'material-table';
import React from 'react';
import {Column} from "../Objects/Column";
import Category from "../Objects/Category";

type Props = {
    title: string,
    columns: Column[],
    data: Category[]
}
const SelectionGroupingTable: React.FC<Props> = function BasicSearch(props) {
    return (
        <MaterialTable
            title={props.title}
            columns={props.columns}
            data={props.data}
            options={{
                search: true,
                selection: true,
                grouping:true,
                maxBodyHeight: 350
            }}
            onRowClick={(event, rowData, togglePanel) => console.log(rowData)}

        />
    )
}

export default SelectionGroupingTable