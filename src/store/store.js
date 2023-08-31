import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './reducers/cityReducer.js'
import itineraryReducer from "./reducers/itineraryReducer.js";


const store = configureStore({
    reducer: {
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer
    }
})

export default store