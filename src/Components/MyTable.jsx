import MaterialTable from 'material-table';
import React, { Component }  from 'react';
import competitions from '../Moks/Competitions.json';



const MyTable = function BasicSearch() {
    return (
        <MaterialTable

            title="Basic Search Preview"
            columns={[
                { title: 'competitions', field: 'name' },
                { title: 'city', field: 'city.name' },
                { title: 'start date', field: 'startDate' },
                { title: 'end date', field: 'endDate' },
            ]}
            data={competitions}
            options={{
                search: true,
                maxBodyHeight: 400
            }}
        />
    )
}

export default MyTable