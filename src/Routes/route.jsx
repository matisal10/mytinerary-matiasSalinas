import { BrowserRouter as Router, Routes, Route, Navigate, Link, redirect } from 'react-router-dom';
import Cities from '../components/Cities/Cities'
import City from '../components/City/City'
import Home from '../components/Home'
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

export const AppRoute = () => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/cities' element={<Cities />}></Route>
                <Route path='/city/:id' element={<City />}></Route>
                <Route path='/register' element={ isAuthenticated ? (<Navigate to="/"/>): (<Register />)}></Route>
                <Route path='/login' element={ isAuthenticated ? (<Navigate to="/"/>): (<Login />)}></Route>
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
