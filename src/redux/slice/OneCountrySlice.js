import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    isError: '',
}

export const fetchOneCountryData = createAsyncThunk('fetchOneCountryData', async (name) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
});

const oneCountrySlice = createSlice({
    name: 'oneCountry',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchOneCountryData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchOneCountryData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchOneCountryData.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default oneCountrySlice.reducer;