import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

const Filter = ({ countryData, setFilteredData }) => {
    const [selectText, setSelectText] = useState("");

    useEffect(() => {
        setFilteredData(countryData);
    }, [countryData, setFilteredData]);

    const handleChangeFilter = event => {
        setSelectText(event.target.value);
        if (event.target.value === "") {
            // If no continent is selected, show all countries
            setFilteredData(countryData);
        } else {
            axios.get(`https://restcountries.com/v3.1/region/${event.target.value}`)
                .then(response => response.data)
                .then(data => setFilteredData(data));
        }
    }

    return (
        <>
            <div className='relative dropdown-filter'>
                <Box sx={{ width: 200, position: "absolute", right: 40, top: 35 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">CONTINENT</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectText} label="Filter" onChange={handleChangeFilter}>
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="Asia">ASIA</MenuItem>
                            <MenuItem value="Europe">EUROPE</MenuItem>
                            <MenuItem value="Africa">AFRICA</MenuItem>
                            <MenuItem value="Americas">AMERICAS</MenuItem>
                            <MenuItem value="Oceania">OCEANIA</MenuItem>
                            <MenuItem value="Antarctic">ANTARCTICA</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </>
    )
}

export default Filter;
