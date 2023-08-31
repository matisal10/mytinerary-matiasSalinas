import { useState, useEffect } from 'react'
import './Cities.css'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../../store/actions/cityActions.js'
const { saveCities } = cityActions

export default function Cities() {
    const navigate = useNavigate();

    // const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch()
    const cities = useSelector(store => store.cityReducer.cities)
    const loading = useSelector(store => store.cityReducer.loadingCities)
    let filteredCities

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        dispatch(saveCities())
    }, []);

    if (loading == false) {
        filteredCities = cities.filter((city) =>
            city.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const redirectToCity = (cityId) => {
        navigate(`/city/${cityId}`);
    };

    

    return (
        <>
            <section className="heroCities">
                <div className="hero-background">
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
                    {
                        loading == false && filteredCities.map((city, i) => (
                            <div key={i} className="image-city" onClick={() => redirectToCity(city._id)}>
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
