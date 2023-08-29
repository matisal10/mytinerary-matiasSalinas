import { createReducer } from '@reduxjs/toolkit'
import cityActions from '../../store/actions/cityActions.js'
const { saveCity, saveCities } = cityActions

const initialState = {
    city: {}
}

const cityReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(saveCity.fulfilled, (state, action) => {
                const newState = { ...state, city: action.payload, loadingCity: false }
                return newState
            })

            .addCase(saveCity.pending, (state) => {
                const newState = { ...state, loadingCity: true }
                return newState
            })

            .addCase(saveCity.rejected, (state) => {
                const newState = { ...state, loadingCity: false }
                return newState
            })

            .addCase(saveCities.fulfilled, (state, action) => {
                const newState = { ...state, cities: action.payload, loadingCities: false }
                return newState
            })

            .addCase(saveCities.pending, (state) => {
                const newState = { ...state, loadingCities: true }
                return newState
            })

            .addCase(saveCities.rejected, (state) => {
                const newState = { ...state, loadingCities: false }
                return newState
            })
    });

export default cityReducer