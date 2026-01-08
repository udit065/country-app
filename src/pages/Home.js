import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/CountrySlice';
import Filter from '../components/Filter';
import { Link } from "react-router-dom";
// import { useTheme } from '../Context/ThemeContext';
import Spinner from '../components/Spinner';

const Home = () => {
    // const { theme } = useTheme();
    const { data: countryData, loading, isError } = useSelector(
        (state) => state.country
    );
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <Spinner />;
    if (isError)
        return (
            <p className="text-center mt-40 text-red-500">
                Failed to load countries
            </p>
        );

    return (
        <div className="px-4 mobile:px-6 tablet:px-8 py-10">
            {/* Filter */}
            <Filter countryData={countryData} setFilteredData={setFilteredData} />

            {/* Countries Flex */}
            <div className='flex flex-wrap justify-center gap-4 mt-32 mb-20 dark:text-white'>
                {filteredData.map((elm) => (
                    <Link
                        key={elm.name.official}
                        to={`/country/${elm.name.official}`}
                        className="w-[350px] mobile:w-[90%] tablet:w-[48%] h-full"
                    >
                        <div className='shadow-2xl rounded-2xl pb-6 dark:border-b-2 dark:border-slate-500 hover:scale-105 transition-transform duration-300'>
                            {/* Flag */}
                            <div className='w-full h-[190px] overflow-hidden'>
                                <img
                                    src={elm.flags.svg}
                                    alt={elm.name.common}
                                    className='w-full h-full object-cover rounded-xl shadow-xl'
                                />
                            </div>

                            {/* Text */}
                            <div className='px-4 mt-2'>
                                <h2 className='font-bold uppercase text-lg truncate'>
                                    {elm.name.common}
                                </h2>
                                <p className='font-medium uppercase mt-1 truncate'>
                                    Capital: {Array.isArray(elm.capital) ? elm.capital[0] : 'N/A'}
                                </p>
                                <p className='font-medium uppercase mt-1'>
                                    Population: {elm.population?.toLocaleString() || "N/A"}
                                </p>
                                <p className='font-medium uppercase mt-1'>
                                    Continent: {elm.region}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default Home;
