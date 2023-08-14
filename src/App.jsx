import { useState, useEffect } from 'react'
import './App.css'
import { AppRoute } from './Routes/route';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  const [navbarColor, setNavbarColor] = useState('transparent');
  const [logoNavColor, setLogoNavColor] = useState('white');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPoint = 50;

    if (scrollPosition > triggerPoint) {
      setNavbarColor('#FFF');
      setLogoNavColor('black');
    } else {
      setNavbarColor('transparent');
      setLogoNavColor('white');
    }
  };

  // Llamar a handleScroll cuando ocurre un evento de desplazamiento en la ventana
  window.addEventListener('scroll', handleScroll);

  // Asegúrate de eliminar el evento cuando el componente se desmonta
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
        <Footer />
      </footer>
    </>
  )
}

export default App
