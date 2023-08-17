import { useRef, useState, useEffect } from 'react';
import './City.css'
import { Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
const City = () => {

    const [city, setCity] = useState();
    const itinerariesRef = useRef(null);
    const { id } = useParams();

    const scrollToItineraries = () => {
        if (itinerariesRef.current) {
            itinerariesRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }; 

    const getCity= async() => {
        try {
            const response = await fetch(`http://localhost:4000/api/cities/${id}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setCity(data.response);
            console.log(data.response); // Log the data directly here
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    }


    useEffect(() => {
        getCity();
        console.log(city)
    }, []);

    return (
        <>
            <section className="heroCity" style={{backgroundImage: city? `url(${city.cover})` : 'none'}}>
                <div className="hero-background">
                    {/* Content inside the hero section */}
                    <div className="contentCity">
                        <h1 style={{ color: '#ffbc40', fontWeight: '700' }}>{city && city.name }</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante sapien, non vulputate lorem faucibus vitae. Nunc ac ultrices metus. Nam neque ex, dictum sed velit vitae, vehicula sagittis risus. Aenean volutpat ante ex, et scelerisque dui blandit sed. Morbi pretium lorem nec scelerisque consectetur. Donec odio odio, maximus nec magna sed, congue hendrerit sapien.
                        </p>
                        <Button colorScheme="facebook" className='btn-Itineraries' onClick={scrollToItineraries}>View Itineraries ↓</Button>
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
