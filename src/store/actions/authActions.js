import { createAsyncThunk } from '@reduxjs/toolkit'

const signUp = createAsyncThunk('signUp', async (dataForm) => {
    try {
        const response = await fetch('http://localhost:4000/api/auth/singUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataForm),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Usuario autenticado:', data);
        localStorage.setItem('token', data.token)
        localStorage.setItem('userData', data.userData)

    } catch (error) {
        console.error('Error with signup:', error);
    }

})

const signIn = createAsyncThunk('login', async (formData) => {

    try {
        const response = await fetch('http://localhost:4000/api/auth/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Usuario autenticado:', data);
        localStorage.setItem('token', data.token)
        localStorage.setItem('userData', data.userData)

    } catch (error) {
        console.error('Error with singIn:', error);
    }
})

const actions = { signUp, signIn }
export default actions
