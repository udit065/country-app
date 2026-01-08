import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: null,     
    isError: false,
};

export const fetchOneCountryData = createAsyncThunk(
    "oneCountry/fetchOneCountryData",
    async (name, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${name}`,
                {
                    params: {
                        fields:
                            "name,capital,region,subregion,population,flags,borders,languages,currencies,area",
                    },
                }
            );
            return response.data[0]; 
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const oneCountrySlice = createSlice({
    name: "oneCountry",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneCountryData.pending, (state) => {
                state.loading = true;
                state.data = null;      // CLEAR old country immediately
                state.isError = false;
            })
            .addCase(fetchOneCountryData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchOneCountryData.rejected, (state) => {
                state.loading = false;
                state.isError = true;
            });
    },
});

export default oneCountrySlice.reducer;