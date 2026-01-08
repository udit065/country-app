import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    isError: false,
};

export const fetchData = createAsyncThunk(
    "country/fetchCountry",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all",
                {
                    params: {
                        fields:
                            "name,capital,region,subregion,population,flags,cca2,cca3,currencies",
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const countrySlice = createSlice({
    name: "country",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.isError = false;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.loading = false;
                state.isError = true;
            });
    },
});

export default countrySlice.reducer;
