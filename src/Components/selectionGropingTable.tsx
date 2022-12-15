import React from 'react';
import {Column} from "../Objects/Column";
import MaterialTable from "@material-table/core";
import MaterialTableAction from "../Objects/MaterialTableAction";
import {Action} from "material-table";

type Props = {
    title?: string,
    columns: Column[],
    data: any[],
    options?: any,
    action?: (Action<any> | ((rowData: any) => Action<any>) | { action: (rowData: any) => Action<any>; position: string; })[] | any[]
}
const SelectionGroupingTable: React.FC<Props> = function BasicSearch(props) {
    return (
        <MaterialTable
            title={props.title}
            columns={props.columns}
            data={props.data}
            options={props.options ? props.options : {
                search: true,
                selection: true,
                grouping: true,
                maxBodyHeight: 350,
                showTitle: props.title !== undefined
            }}
            onRowClick={(event, rowData, togglePanel) => console.log(rowData)}
            actions={props.action ? props.action : []}
        />
    )
}

export default SelectionGroupingTable