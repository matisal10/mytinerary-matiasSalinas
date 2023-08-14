import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Cities from '../components/Cities/Cities'
import City from '../components/City/City'
import Home from '../components/Home'

export const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/cities' element={<Cities />}></Route>
                <Route path='/city' element={<City />}></Route>
            </Routes>
        </div>
    )
}
