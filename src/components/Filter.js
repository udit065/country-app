import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useTheme } from '../Context/ThemeContext';

// for dark mode mui
import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        // Define other light mode palette settings here
    },
});

// Define your dark theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // Define other dark mode palette settings here
    },
});

const Filter = ({ countryData, setFilteredData, setPage }) => {

    // for dark mode 
    const { theme, toggleTheme } = useTheme(); // theme context
    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;


    const [selectText, setSelectText] = useState("");
    const [searchText, setSearchText] = useState('');

    const handleSearch = event => {
        setSearchText(event.target.value);

        const filteredCountries = countryData.filter(data => {
            return data.name.common.toLowerCase().includes(searchText.toLowerCase());
        });
        setPage(1);
        setFilteredData(filteredCountries);
        // console.log(filteredData)
    }


    useEffect(() => {
        setFilteredData(countryData);
    }, [countryData, setFilteredData]);

    const handleChangeFilter = event => {
        setSelectText(event.target.value);
        if (event.target.value === "") {
            // If no continent is selected, show all countries
            setPage(1);
            setFilteredData(countryData);
        } else {
            axios.get(`https://restcountries.com/v3.1/region/${event.target.value}`)
                .then(response => response.data)
                .then((data) => {
                    setPage(1);
                    setFilteredData(data)
                });
        }
    }

    return (
        <>
            <ThemeProvider theme={selectedTheme}>
                <div className='relative '>
                    <Box sx={{ width: 200, position: "absolute", left: 40, top: 35 }} component="form" noValidate autoComplete="off" >
                        <TextField id="outlined-basic" label="Search" variant="outlined" className="search-btn" value={searchText} onChange={handleSearch} />
                    </Box >
                </div>
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
            </ThemeProvider>
        </>
    )
}

export default Filter;
