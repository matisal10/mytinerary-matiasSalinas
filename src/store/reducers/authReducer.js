import { createReducer } from '@reduxjs/toolkit'
import authActions from '../actions/authActions.js'
const {signUp, signIn} = authActions

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

            .addCase(signIn.fulfilled, (state, action) => {
                const newState = { ...state, user: action.payload, loadingLogin: false }
                return newState
            })

            .addCase(signIn.pending, (state) => {
                const newState = { ...state, loadingLogin: true }
                return newState
            })

            .addCase(signIn.rejected, (state) => {
                const newState = { ...state, loadingLogin: false }
                return newState
            })

    });

export default authReducer