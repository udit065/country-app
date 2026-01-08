import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useTheme } from '../Context/ThemeContext';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../Context/MuiTheme';

const Filter = ({ countryData, setFilteredData }) => {

    // dark mode
    const { theme } = useTheme();
    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

    const [selectText, setSelectText] = useState("");
    const [searchText, setSearchText] = useState("");

    // Search filter
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchText(value);

        const filteredCountries = countryData.filter((data) =>
            data.name.common.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredData(filteredCountries);
    };

    // Continent filter 
    const handleChangeFilter = (event) => {
        const value = event.target.value;
        setSelectText(value);

        if (value === "") {
            setFilteredData(countryData);
        } else {
            const filteredCountries = countryData.filter(
                (data) => data.region === value
            );
            setFilteredData(filteredCountries);
        }
    };

    // Reset when data loads
    useEffect(() => {
        setFilteredData(countryData);
    }, [countryData, setFilteredData]);

    return (
        <ThemeProvider theme={selectedTheme}>
            <div className="relative">

                {/* Mobile wrapper to center search + filter */}
                <div className="mobile:flex mobile:flex-col mobile:items-center mobile:gap-4">
                    {/* Search Box */}
                    <Box
                        sx={{
                            width: { xs: "90%", sm: 200 }, // full width on mobile, fixed on desktop
                            position: { xs: "static", sm: "absolute" },
                            left: { xs: "auto", sm: 40 },
                            top: { xs: "auto", sm: 35 },
                        }}
                    >
                        <TextField
                            label="Search"
                            variant="outlined"
                            value={searchText}
                            onChange={handleSearch}
                            fullWidth
                        />
                    </Box>

                    {/* Filter Dropdown */}
                    <Box
                        sx={{
                            width: { xs: "90%", sm: 200 },
                            position: { xs: "static", sm: "absolute" },
                            right: { xs: "auto", sm: 40 },
                            top: { xs: "auto", sm: 35 },
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel>CONTINENT</InputLabel>
                            <Select
                                value={selectText}
                                label="CONTINENT"
                                onChange={handleChangeFilter}
                            >
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

            </div>
        </ThemeProvider>
    );
};

export default Filter;
