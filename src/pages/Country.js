import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneCountryData } from '../redux/slice/OneCountrySlice';
import { Link, useParams } from "react-router-dom";


const Country = () => {
    const oneData = useSelector((state) => state.oneCountry.data);
    const dispatch = useDispatch();
    const { name } = useParams();
    // console.log(name)

    useEffect(() => {
        dispatch(fetchOneCountryData(name));
    }, [dispatch]);

    return (
        <>
            <div className="container mx-auto px-4 h-[605px]" style={{ padding: '50px' }}>
                {oneData.map((elm) => (
                    <div className="flex flex-col md:flex-row mb-8" key={elm.name.common} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                        <img
                            src={elm.flags.svg}
                            alt={elm.name.common}
                            className="w-1/2 md:w-40 h-auto md:h-40 mb-4 md:mb-0"
                            style={{ minWidth: '200px' }}
                        />
                        <div className="md:ml-4" style={{ width: "200px" }}>
                            <h1 className="text-2xl mb-4"><b>{elm.name.common}</b></h1>
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2">
                                    <p className="font-semibold mb-2">
                                        Official Name: <span className="font-normal">{elm.name.common}</span>
                                    </p>
                                    <p className="font-semibold mb-2">
                                        Population: <span className="font-normal">{elm.population}</span>
                                    </p>
                                    <p className="font-semibold mb-2">
                                        Region: <span className="font-normal">{elm.region}</span>
                                    </p>
                                    <p className="font-semibold mb-2">
                                        Sub Region: <span className="font-normal">{elm.subregion}</span>
                                    </p>
                                    <p className="font-semibold mb-2">
                                        Capital:{" "}
                                        <span className="font-normal">
                                            {Array.isArray(elm.capital) ? elm.capital[0] : ''}
                                        </span>
                                    </p>
                                    <p className="font-semibold mb-2">
                                        Area(km²): <span className="font-normal">{elm.area} km²</span>
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <p className="font-semibold mb-2">
                                        Top Level Domain: <span className="font-normal">{elm.tld}</span>
                                    </p>
                                    <p className="font-semibold mb-2">
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
                            <div className="flex mt-8">
                                <p className="font-semibold mr-2">Border Countries:{" "}</p>
                                <span className="font-normal">
                                    {elm.borders &&
                                        Object.keys(elm.borders).map((key, index, array) => (
                                            <span key={key}>
                                                {elm.borders[key]}
                                                {index < array.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Country;
