import { useState } from 'react'
import './App.css'
import { AppRoute } from './Routes/route';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <AppRoute />
      <footer>

      </footer>
    </>
  )
}

export default App
