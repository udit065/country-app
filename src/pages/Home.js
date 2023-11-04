import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/CountrySlice';
import Filter from '../components/Filter';
import { Link } from "react-router-dom";
import { Pagination } from '@mui/material';
import { useTheme } from '../Context/ThemeContext';
// for dark mode mui
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../Context/MuiTheme';
import Spinner from '../components/Spinner';


const Home = () => {

    // for dark mode 
    const { theme, toggleTheme } = useTheme(); // theme context
    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;


    const countryData = useSelector((state) => state.country.data);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);

    // Pagination logic ---------
    const [page, setPage] = useState(1);
    const itemsPerPage = 24;

    // Calculate the total number of pages
    const totalItems = 248; // Total number of items to show
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    // Calculate the starting and ending index for the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const slicedData = filteredData.slice(startIndex, endIndex);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);


    return (
        <>

            <div>
                <Filter countryData={countryData} setFilteredData={setFilteredData} setPage={setPage} />
            </div>
            <div className='flex flex-wrap gap-4 justify-center mt-32 mb-20 dark:text-white' >
                {slicedData.map((elm) => (
                    <div key={elm.name.official} className='shadow-2xl w-[350px] mobile:w-[240px] h-full rounded-2xl pb-6 dark:shadow-2xl  dark:border-b-2 dark:border-slate-500'>
                        <Link to={`/country/${elm.name.official}`}>
                            <div className='flex justify-center'>
                                <img src={elm.flags.svg} alt={elm.name.common} className='w-full h-[190px] object-cover shadow-xl rounded-xl' />
                            </div>
                        </Link>
                        <div className='font-bold uppercase mt-2 text-lg ml-4'>{elm.name.common}</div>
                        <div className='font-medium uppercase ml-4'>Capital: {Array.isArray(elm.capital) ? elm.capital[0] : ''}</div>
                        <div className='font-medium uppercase ml-4'>Population: {elm.population.toLocaleString()}</div>
                        <div className='font-medium uppercase ml-4'>Continent: {elm.region}</div>
                    </div>
                ))}
            </div>'
            <ThemeProvider theme={selectedTheme}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color='primary'
                    showFirstButton showLastButton
                    className='flex justify-center mb-20'
                />
            </ThemeProvider>
            {/* <Spinner /> */}
        </>
    );
}

export default Home;

