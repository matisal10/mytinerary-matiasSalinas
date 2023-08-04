import { useState } from 'react'
import '../App.css'
import { Button, Image } from '@chakra-ui/react'
import Navbar from './Navbar/Navbar';


function Home() {

    return (
        <>
            <header>
                <Navbar/>
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
