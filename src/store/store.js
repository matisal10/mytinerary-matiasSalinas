import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './reducers/cityReducer.js'
import itineraryReducer from "./reducers/itineraryReducer.js";
import authReducer from "./reducers/authReducer.js";


const store = configureStore({
    reducer: {
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer,
        authReducer: authReducer
    }
})

export default store