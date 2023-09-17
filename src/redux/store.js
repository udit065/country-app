import { configureStore } from "@reduxjs/toolkit";
import countryReducer from './slice/CountrySlice';
import oneCountryReducer from './slice/OneCountrySlice';

const store = configureStore({
    reducer: {
        country: countryReducer,
        oneCountry: oneCountryReducer,
    },
})

export default store;