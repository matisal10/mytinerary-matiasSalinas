import { useState, useEffect } from 'react'
import './App.css'
import { AppRoute } from './Routes/route';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [navbarColor, setNavbarColor] = useState('transparent');
  const [logoNavColor, setLogoNavColor] = useState('white');

  const handleScroll = () => {
    const homeSection = document.getElementById('home-section');

    if (homeSection) {
      const scrollPosition = window.scrollY;
      const homeSectionHeight = homeSection.offsetHeight;
      const triggerPoint = 50; 

      if (scrollPosition > triggerPoint) {
        setNavbarColor('#FFF'); 
        setLogoNavColor('black')
      } else {
        setNavbarColor('transparent'); 
        setLogoNavColor('white')
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <Navbar backgroundColor={navbarColor} logoColor={logoNavColor} />
      </header>
      <AppRoute />
      <footer>

      </footer>
    </>
  )
}

export default App
