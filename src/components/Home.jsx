import '../App.css'
import { Button } from '@chakra-ui/react'
import Carousel from './Carousel/Carousel';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <main>
                <section id="home-section" className="hero">
                    <div className="hero-background">
                        {/* Content inside the hero section */}
                        <div className="content">
                            <h1 style={{color:'#ffbc40'}}>Find the perfect destination</h1>
                            <p>
                                Our app will help you find the perfect path for your next trip. With an easy-to-use
                                interface and a host of itinerary options, planning your next trip has never been
                                easier.
                            </p>
                            <Button as={Link} to="/cities" colorScheme="facebook" width="300px" >
                                View More
                            </Button>
                        </div>
                    </div>
                </section>
                <section>
                    <Carousel />
                </section>
            </main>

        </>
    )
}

export default Home
