import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/CountrySlice';
import Filter from '../components/Filter';
import Search from '../components/Search';

const Home = () => {

    const countryData = useSelector((state) => state.country.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    // console.log("state", countryData);
    return (
        <>
            <div>
                <Search />
                <Filter />
            </div>
            <div className='flex flex-wrap gap-4 justify-center my-32'>
                {countryData.slice(0, 80).map((elm) => (

                    <div key={elm.name.official} className=' shadow-2xl w-[350px] h-full pb-2 rounded-2xl pb-6'>
                        <div className='flex justify-center'>
                            <img src={elm.flags.svg} alt={elm.name.common} className='w-full h-[190px] object-cover shadow-xl rounded-xl' />
                        </div>
                        <div className='font-bold uppercase mt-2 text-lg ml-4'>{elm.name.common}</div>
                        <div className='font-medium uppercase ml-4'>Capital: {Array.isArray(elm.capital) ? elm.capital[0] : ''}</div>
                        <div className='font-medium uppercase ml-4'>Population: {elm.population}</div>
                        <div className='font-medium uppercase ml-4'>Continent : {elm.region}</div>
                    </div>

                ))}
            </div>
        </>
    );
}

export default Home;