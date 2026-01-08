import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneCountryData } from '../redux/slice/OneCountrySlice';
import { useParams } from "react-router-dom";
import Spinner from '../components/Spinner';

const Country = () => {
    const dispatch = useDispatch();
    const { name } = useParams();

    const { data: oneData, loading, isError } = useSelector(
        (state) => state.oneCountry
    );

    useEffect(() => {
        dispatch(fetchOneCountryData(name));
    }, [dispatch, name]);

    //  Show spinner until fresh data loads
    if (loading || !oneData) {
        return <Spinner />;
    }

    //  Error fallback
    if (isError) {
        return (
            <p className="text-center mt-40 text-red-500">
                Failed to load country details
            </p>
        );
    }

    return (
        <div className="dark:text-white mobile:h-auto mobile:px-4 mobile:py-10 mobile:text-center tablet:h-full tablet:text-center">
            <div className="flex justify-evenly items-center mt-36 mobile:flex-col mobile:mt-10 mobile:gap-8 mobile:items-center tablet:flex-col tablet:mt-20">

                {/* Image */}
                <div className="mobile:flex mobile:justify-center">
                    <img
                        src={oneData.flags.svg}
                        alt={oneData.name.common}
                        className="w-96 rounded-xl mobile:w-64 mobile:h-auto tablet:w-72"
                    />
                </div>

                {/* Country Details */}
                <div className="mobile:text-center mobile:mt-4 tablet:mt-8">
                    <h1 className="text-3xl mb-8">
                        <b>{oneData.name.common}</b>
                    </h1>

                    <p className="font-bold mb-2">
                        Official Name: <span className="font-normal">{oneData.name.official}</span>
                    </p>

                    <p className="font-bold mb-2">
                        Capital: <span className="font-normal">{Array.isArray(oneData.capital) ? oneData.capital[0] : "N/A"}</span>
                    </p>

                    <p className="font-bold mb-2">
                        Region: <span className="font-normal">{oneData.region}</span>
                    </p>

                    <p className="font-bold mb-2">
                        Sub Region: <span className="font-normal">{oneData.subregion}</span>
                    </p>

                    <p className="font-bold mb-2">
                        Population: <span className="font-normal">{oneData?.population?.toLocaleString() || "N/A"}</span>
                    </p>
                </div>

                {/* Extra Info */}
                <div className="mobile:mt-6 mobile:text-center tablet:mb-10">
                    <p className="font-bold mb-2">
                        Area (km²): <span className="font-normal">{oneData?.area?.toLocaleString() || "N/A"} km²</span>
                    </p>

                    <p className="font-bold mb-2">
                        Currency:{" "}
                        <span className="font-normal">
                            {oneData.currencies &&
                                Object.keys(oneData.currencies).map((key, index, array) => (
                                    <span key={key}>
                                        {oneData.currencies[key].name}
                                        {oneData.currencies[key].symbol ? ` (${oneData.currencies[key].symbol})` : ""}
                                        {index < array.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                        </span>
                    </p>

                    <p className="font-bold mb-2">
                        Languages: <span className="font-normal">{oneData.languages && Object.values(oneData.languages).join(", ")}</span>
                    </p>
                </div>

            </div>
        </div>


    );
};

export default Country;
