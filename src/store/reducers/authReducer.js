import { createReducer } from '@reduxjs/toolkit'
import authActions from '../actions/authActions.js'
const {signUp, login} = authActions

const initialState = {
    user: {}
}

const authReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                const newState = { ...state, user: action.payload, loadingSignUp: false }
                return newState
            })

            .addCase(signUp.pending, (state) => {
                const newState = { ...state, loadingSignUp: true }
                return newState
            })

            .addCase(signUp.rejected, (state) => {
                const newState = { ...state, loadingSignUp: false }
                return newState
            })

            .addCase(login.fulfilled, (state, action) => {
                const newState = { ...state, user: action.payload, loadingLogin: false }
                return newState
            })

            .addCase(login.pending, (state) => {
                const newState = { ...state, loadingLogin: true }
                return newState
            })

            .addCase(login.rejected, (state) => {
                const newState = { ...state, loadingLogin: false }
                return newState
            })

    });

export default authReducer