import { useState, useEffect } from 'react'
import './Cities.css'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link,useNavigate } from 'react-router-dom';
export default function Cities() {
    const navigate = useNavigate();

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
        navigate(`/city/${cityId}`);
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
