import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    isError: '',
}

export const fetchData = createAsyncThunk('fetchCountry', async () => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
});

const countrySlice = createSlice({
    name: 'country',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default countrySlice.reducer;