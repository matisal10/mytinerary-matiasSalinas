import { createReducer } from '@reduxjs/toolkit'
import itineraryActions from '../../store/actions/itineraryActions.js'
const { getItinerariesForCity } = itineraryActions

const initialState = {
    Itineraries: []
}

const itineraryReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(getItinerariesForCity.fulfilled, (state, action) => {  
                const stateItineraries = { ...state, Itineraries: action.payload, loadingItineraries: false }
                return stateItineraries
            })

            .addCase(getItinerariesForCity.pending, (state) => {
                const stateItineraries = { ...state, loadingItineraries: true }
                return stateItineraries
            })

            .addCase(getItinerariesForCity.rejected, (state) => {
                const stateItineraries = { ...state, loadingItineraries: false }
                return stateItineraries
            })

    });

export default itineraryReducer