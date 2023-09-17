import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/CountrySlice';
import Filter from '../components/Filter';
import PaginationComponent from '../components/Pagination';
import { Link } from "react-router-dom";


const Home = () => {
    const countryData = useSelector((state) => state.country.data);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>
            <div>
                <Filter countryData={countryData} setFilteredData={setFilteredData} />
            </div>
            <div className='flex flex-wrap gap-4 justify-center my-32 dark:text-white' >
                {filteredData.slice(0, 24).map((elm) => (
                    <div key={elm.name.official} className='shadow-2xl w-[350px] h-full pb-2 rounded-2xl pb-6 dark:shadow-2xl  dark:border-b-2 dark:border-slate-500'>
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
                <PaginationComponent />
            </div>
        </>
    );
}

export default Home;

