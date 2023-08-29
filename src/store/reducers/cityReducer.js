import { createReducer } from '@reduxjs/toolkit'
import cityActions from '../../store/actions/cityActions.js'
const { saveCity } = cityActions

const initialState = {
    city: {}
}

const cityReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(saveCity.fulfilled, (state, action) => {
                console.log('fulfilled', action.payload)
                const newState = { ...state, city: action.payload, loading: false }
                return newState
            })

            .addCase(saveCity.pending, (state, action) => {
                const newState = { ...state, loading: true }
                return newState
            })

            .addCase(saveCity.rejected, (state, action) => {
                const newState = { ...state, loading: false }
                return newState
            })
    });

export default cityReducer