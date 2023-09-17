import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/CountrySlice';
import Filter from '../components/Filter';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Home = () => {
    const countryData = useSelector((state) => state.country.data);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    // const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleSearch = event => {
        setSearchText(event.target.value);

        const filteredCountries = countryData.filter(data => {
            return data.name.common.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredData(filteredCountries);
        // console.log(filteredData)
    }

    return (
        <>
            <div className=''>
                <div className='relative '>
                    <Box sx={{ width: 200, position: "absolute", left: 40, top: 35 }} component="form" noValidate autoComplete="off" >
                        <TextField id="outlined-basic" label="Search" variant="outlined" className="search-btn" value={searchText} onChange={handleSearch} />
                    </Box >
                </div>
                <Filter countryData={countryData} setFilteredData={setFilteredData} />
            </div>
            <div className='flex flex-wrap gap-4 justify-center my-32 dark:text-white' >
                {filteredData.slice(0, 24).map((elm) => (
                    <div key={elm.name.official} className='shadow-2xl w-[350px] h-full pb-2 rounded-2xl pb-6 dark:shadow-2xl  dark:border-b-2 dark:border-slate-500'>
                        <div className='flex justify-center'>
                            <img src={elm.flags.svg} alt={elm.name.common} className='w-full h-[190px] object-cover shadow-xl rounded-xl' />
                        </div>
                        <div className='font-bold uppercase mt-2 text-lg ml-4'>{elm.name.common}</div>
                        <div className='font-medium uppercase ml-4'>Capital: {Array.isArray(elm.capital) ? elm.capital[0] : ''}</div>
                        <div className='font-medium uppercase ml-4'>Population: {elm.population}</div>
                        <div className='font-medium uppercase ml-4'>Continent: {elm.region}</div>
                    </div>
                ))}
                <Stack spacing={2}>
                    <Pagination count={10} size="large" />
                </Stack>
            </div>
        </>
    );
}

export default Home;

