import MaterialTable from 'material-table';
import React, {Component, useEffect, useState} from 'react';
import competitions from '../Moks/Competitions.json';
import axios from "axios";



const MyTable = function BasicSearch() {
    const [subjects, setSubjects] = useState([]);

    useEffect( () => {
        axios({
            url: "http://localhost:8090/employee/currentLocation",
            method: "get",
        }).then((response) => {
            setSubjects(response.data);

        }).catch((e) => {
            console.error("cannot fetch subjects: " + e);
        })

    }, [])
    return (
        <MaterialTable

            title="Lokalizacje pracowników"
            columns={[
                { title: 'Imię', field: 'employee.name' },
                { title: 'Nazwisko', field: 'employee.surname' },
                { title: 'Karta', field: 'employee.cardId' },
                { title: 'Pokój', field: 'roomId' },
            ]}
            data={subjects}
            options={{
                search: true,
                maxBodyHeight: 400
            }}
        />
    )
}

export default MyTable