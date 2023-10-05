import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/CountrySlice';
import Filter from '../components/Filter';
import PaginationComponent from '../components/Pagination';
import { Link } from "react-router-dom";
import { Pagination } from '@mui/material';


const Home = () => {
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
            <div className='flex flex-wrap gap-4 justify-center my-32 dark:text-white' >
                {slicedData.map((elm) => (
                    <div key={elm.name.official} className='shadow-2xl w-[350px] mobile:w-[240px] h-full pb-2 rounded-2xl pb-6 dark:shadow-2xl  dark:border-b-2 dark:border-slate-500'>
                        <Link to={`/country/${elm.name.official}`}>
                            <div className='flex justify-center'>
                                <img src={elm.flags.svg} alt={elm.name.common} className='w-full h-[190px] object-cover shadow-xl rounded-xl' />
                            </div>
                        </Link>
                        <div className='font-bold uppercase mt-2 text-lg ml-4'>{elm.name.common}</div>
                        <div className='font-medium uppercase ml-4'>Capital: {Array.isArray(elm.capital) ? elm.capital[0] : ''}</div>
                        <div className='font-medium uppercase ml-4'>Population: {elm.population}</div>
                        <div className='font-medium uppercase ml-4'>Continent: {elm.region}</div>
                    </div>
                ))}
                {/* <PaginationComponent /> */}
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    // variant="outlined"
                    // shape="rounded"
                    showFirstButton showLastButton
                    className='pagination-btn dark:bg-[#b9bec8]'
                />
            </div>
        </>
    );
}

export default Home;

