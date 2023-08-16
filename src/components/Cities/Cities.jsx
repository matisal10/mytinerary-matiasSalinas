import { useState, useEffect } from 'react'
import './Cities.css'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
export default function Cities() {
    // const cities = [
    //     { name: 'Neo Tokio', imageUrl: '/assets/city1.png' },
    //     { name: 'Buenos Aires', imageUrl: '/assets/city2.png' },
    //     { name: 'Capilla del Monte ', imageUrl: '/assets/city3.png' },
    //     { name: 'Wakatobi', imageUrl: '/assets/city4.png' },
    //     { name: 'Assisi', imageUrl: '/assets/assisi-city-7150611_1280.jpg' },
    //     { name: 'Paris ', imageUrl: '/assets/eiffel-tower-3349075_640.jpg' },
    //     { name: 'Santorini', imageUrl: '/assets/santorini-4996846_1280.jpg' },
    //     { name: 'hungarian', imageUrl: '/assets/hungarian-parliament-building-6933621_640.jpg' },
    //     { name: 'Rio de janeiro', imageUrl: '/assets/rio-de-janeiro-1963744_640.jpg' },
    //     { name: 'Venecia', imageUrl: '/assets/venice-2451047_640.jpg' },
    //     { name: 'Praga', imageUrl: '/assets/prague-4794636_1280.jpg' },
    //     { name: 'Barcelona', imageUrl: '/assets/travel-5188598_1280.jpg' },
    //     // Add more city objects here...
    // ];

    const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const redirectToCity = (cityId) => {
        // Implement your navigation logic here
        // For example, you can use window.location.href to redirect
        window.location.href = `/city/${cityId}`;
    };

    useEffect(() => {
        async function fetchCities() {
            try {
                const response = await fetch('http://localhost:4000/api/cities/');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setCities(data.response);
                console.log(cities)
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }

        fetchCities();
    }, []);

    return (
        <>
            <section className="heroCities">
                <div className="hero-background">
                    {/* Content inside the hero section */}
                    <div className="contentCities">
                        <h1>Cities</h1>
                        <p>
                            Collection of the most beautiful places and experience
                        </p>

                    </div>
                </div>
            </section>
            <section className='containerSection2'>
                <div className='containerInput'>
                    <InputGroup >
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input
                            placeholder='Search your city'
                            // width={'100%'}
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </div>
                <div className='containerCities'>
                    {/* codigo de cities */}
                    {
                        filteredCities.map((city, i) => (
                            <div key={i} className="image-city" onClick={()=>redirectToCity(city._id)}>
                                {/* <Link to={`/city/${city._id}`} > */}
                                    <img src={city.image} alt={city.name} />
                                    <div className="city-name-container" style={{ width: "100%" }}>
                                        <p className="city-name">{city.name}</p>
                                    </div>
                                {/* </Link> */}
                            </div>

                        ))
                    }
                </div>
            </section>
        </>
    )
}
