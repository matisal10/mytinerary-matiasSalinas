import  { useRef }from 'react';
import './City.css'
import { Button } from '@chakra-ui/react'
const City = () => {

    const itinerariesRef = useRef(null);

    const cities = [
        { name: 'Neo Tokio', imageUrl: '/assets/city1.png' },
        { name: 'Buenos Aires', imageUrl: '/assets/city2.png' },
        { name: 'Capilla del Monte ', imageUrl: '/assets/city3.png' },
        { name: 'Wakatobi', imageUrl: '/assets/city4.png' },
        { name: 'Assisi', imageUrl: '/assets/assisi-city-7150611_1280.jpg' },
        { name: 'Paris ', imageUrl: '/assets/eiffel-tower-3349075_640.jpg' },
        { name: 'Santorini', imageUrl: '/assets/santorini-4996846_1280.jpg' },
        { name: 'hungarian', imageUrl: '/assets/hungarian-parliament-building-6933621_640.jpg' },
        { name: 'Rio de janeiro', imageUrl: '/assets/rio-de-janeiro-1963744_640.jpg' },
        { name: 'Venecia', imageUrl: '/assets/venice-2451047_640.jpg' },
        { name: 'Praga', imageUrl: '/assets/prague-4794636_1280.jpg' },
        { name: 'Barcelona', imageUrl: '/assets/travel-5188598_1280.jpg' },
        // Add more city objects here...
    ];

    const scrollToItineraries = () => {
        if (itinerariesRef.current) {
            itinerariesRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };


    return (
        <>
            <section className="heroCity">
                <div className="hero-background">
                    {/* Content inside the hero section */}
                    <div className="contentCity">
                        <h1 style={{ color: '#ffbc40' }}>Cities</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante sapien, non vulputate lorem faucibus vitae. Nunc ac ultrices metus. Nam neque ex, dictum sed velit vitae, vehicula sagittis risus. Aenean volutpat ante ex, et scelerisque dui blandit sed. Morbi pretium lorem nec scelerisque consectetur. Donec odio odio, maximus nec magna sed, congue hendrerit sapien.
                        </p>
                        <Button colorScheme="facebook" width="300px" onClick={scrollToItineraries}>View Itineraries ↓</Button>
                    </div>
                </div>
            </section>
            <section>
                <div ref={itinerariesRef} id='itineraries' className='containerItineraries'>
                    <div className='Itineraries'>
                        <img src="https://via.placeholder.com/255x191" />
                        <div>There are no itineraries</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default City;
