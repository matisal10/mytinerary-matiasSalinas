import { createAsyncThunk } from '@reduxjs/toolkit'

const getItinerariesForCity = createAsyncThunk('getAllItineraries', async ({id}) => {

    try {
        const response = await fetch(`http://localhost:4000/api/itinerary/${id}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.response
    } catch (error) {
        console.error('Error fetching Itineraries:', error);
        return []
    }
})

const itineraryActions = { getItinerariesForCity };
export default itineraryActions;