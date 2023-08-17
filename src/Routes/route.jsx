import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Cities from '../components/Cities/Cities'
import City from '../components/City/City'
import Home from '../components/Home'
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

export const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/cities' element={<Cities />}></Route>
                <Route path='/city/:id' element={<City />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
    )
}
