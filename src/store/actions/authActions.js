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
            const errorData = await response.json(); 
            throw new Error(errorData.message);
        }
        const data = await response.json();
        console.log('Usuario autenticado:', data);
        localStorage.setItem('token', data.token)
        localStorage.setItem('userData', data.userData)
        return data.token

    } catch (error) {
        console.error('Error with signUp:', error);
        throw error; 
    }

})

const login = createAsyncThunk('login', async (formData) => {
    try {
        const response = await fetch('http://localhost:4000/api/auth/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();
        console.log('Usuario autenticado:', data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userData', data.userData);
        return data.token;
    } catch (error) {
        console.error('Error with Login:', error);
        return {
            error: error.message,
        };
    }
});

const actions = { signUp, login }
export default actions
