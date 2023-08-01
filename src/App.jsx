import { useState } from 'react'
import './App.css'
import { Button, ButtonGroup, Image } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
import { AppRoute } from './Routes/route';
import Cities from './components/Cities'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cities' element={<Cities />}></Route>
    </Routes>
  )
}

export default App
