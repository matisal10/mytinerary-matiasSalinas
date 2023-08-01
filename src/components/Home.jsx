import { useState } from 'react'
import '../App.css'
import { Button, ButtonGroup, Image } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <nav className="navbar">
                    <h1 className="logo">My Tinerary</h1>
                    <ul className="nav-links">
                        <li><Link to="/ ">Home</Link></li>
                        <li><Link to="/cities" style={{ padding: "0px 1rem" }}>Cities</Link></li>
                        <li><Button colorScheme='facebook'>  Login</Button></li>
                    </ul>
                </nav>
            </header>
            <main>
                <article className="hero">
                    <div className="content">
                        <h1>Find the perfect destination</h1>
                        <p>Our app will help you find the perfect path for your next trip.
                            With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                        <Button colorScheme='facebook'>View More</Button>
                    </div>

                    <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
                </article>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home
