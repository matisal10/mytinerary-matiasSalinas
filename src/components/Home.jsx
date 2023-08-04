import { useState } from 'react'
import '../App.css'
import { Button, Image } from '@chakra-ui/react'
import Navbar from './Navbar/Navbar';
import Carousel from './Carousel/Carousel';
import img1 from '/assets/city1.png';
import img2 from '/assets/city2.png';
import img3 from '/assets/city3.png';
import img4 from '/assets/city4.png';

const images = [img1, img2, img3,img4];


function Home() {


    return (
        <>
            <main>
                <section className="hero">
                    <div className="content">
                        <h1>Find the perfect destination</h1>
                        <p>Our app will help you find the perfect path for your next trip.
                            With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                        <Button colorScheme='facebook'>View More</Button>
                    </div>

                    <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/200" />
                </section>
                <section>
                    <Carousel images={images} />
                </section>
            </main>

        </>
    )
}

export default Home
