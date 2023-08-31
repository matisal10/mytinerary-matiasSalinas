import { createAsyncThunk } from '@reduxjs/toolkit'

const saveCity = createAsyncThunk('getCity', async ({ id }) => {

    try {
        const response = await fetch(`http://localhost:4000/api/cities/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data.response
    } catch (error) {
        console.log(error)
        return []
    }
})

const saveCities = createAsyncThunk('getAllCities', async () => {

    try {
        const response = await fetch('http://localhost:4000/api/cities/');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.response
    } catch (error) {
        console.error('Error fetching cities:', error);
        return []
    }
})

const actions = { saveCity,saveCities }
export default actions
