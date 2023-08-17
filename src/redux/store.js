import { configureStore } from "@reduxjs/toolkit";
import countryReducer from './slice/CountrySlice';

const store = configureStore({
    reducer: {
        country: countryReducer
    },
})

export default store;