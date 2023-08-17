import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/CountrySlice';

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
                {countryData.map((elm) => (
                    <div key={elm.name.official}>
                        <div>
                            <img src={elm.flags.svg} alt={elm.name.common} className='w-40 h-40' />
                        </div>
                        <div>{elm.name.common}</div>
                        <div>capital: {elm.capital}</div>
                        <div>population:{elm.population}</div>
                        <div>continents :{elm.continents}</div>
                    </div>

                ))}
            </div>
        </>
    );
}

export default Home