import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneCountryData } from '../redux/slice/OneCountrySlice';
import { useParams } from "react-router-dom";


const Country = () => {
    const oneData = useSelector((state) => state.oneCountry.data);
    const dispatch = useDispatch();
    const { name } = useParams();
    // console.log(name)

    useEffect(() => {
        dispatch(fetchOneCountryData(name));
    }, [dispatch,name]);

    return (
        <>
            <div className="dark:text-white mobile:h-[100vh] mobile:text-center tablet:h-full tablet:text-center">
                {oneData.map((elm) => (
                    <>
                        <div key={elm.name.common} className='flex justify-evenly items-center mt-36 mobile:flex-col mobile:mt-20 tablet:flex-col tablet:mt-20'>
                            {/* Image Div */}
                            <div>
                                <img
                                    src={elm.flags.svg}
                                    alt={elm.name.common}
                                    className='w-96 rounded-xl mobile:w-64 tablet:w-72'
                                />
                            </div>
                            {/* Country Detail Div */}
                            <div>
                                <h1 className="text-3xl mb-8 mobile:mt-4 tablet:mt-8"><b>{elm.name.common}</b></h1>
                                <p className="font-bold mb-2">
                                    Official Name: <span className="font-normal">{elm.name.common}</span>
                                </p>
                                <p className="font-bold mb-2">
                                    Capital:{" "}
                                    <span className="font-normal">
                                        {Array.isArray(elm.capital) ? elm.capital[0] : ''}
                                    </span>
                                </p>
                                <p className="font-bold mb-2">
                                    Region: <span className="font-normal">{elm.region}</span>
                                </p>
                                <p className="font-bold mb-2">
                                    Sub Region: <span className="font-normal">{elm.subregion}</span>
                                </p>
                                <p className="font-bold mb-2">
                                    Population: <span className="font-normal"> {elm.population.toLocaleString()}</span>
                                </p>
                            </div>
                            <div className='mobile:mb-10 tablet:mb-10'>
                                <p className="font-bold mb-2">
                                    Area(km²): <span className="font-normal">{elm.area.toLocaleString()} km²</span>
                                </p>
                                {/* <p className="font-bold mb-2">
                                Area(km²): <span className="font-normal">{elm.currencies} km²</span>
                            </p> */}
                                <p className="font-bold mb-2">
                                    Currency:{" "}
                                    <span className="font-normal">
                                        {elm.currencies &&
                                            Object.keys(elm.currencies).map((key, index, array) => (
                                                <span key={key}>
                                                    {elm.currencies[key].name} ({elm.currencies[key].symbol})
                                                    {index < array.length - 1 ? ", " : ""}
                                                </span>
                                            ))}
                                    </span>
                                </p>
                                <p className="font-bold mb-2">
                                    Languages:{" "}
                                    <span className="font-normal">
                                        {elm.languages &&
                                            Object.keys(elm.languages).map((key, index, array) => (
                                                <span key={key}>
                                                    {elm.languages[key]}
                                                    {index < array.length - 1 ? ", " : ""}
                                                </span>
                                            ))}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

export default Country;
