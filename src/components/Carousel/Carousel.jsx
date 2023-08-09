import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { Button, Image } from '@chakra-ui/react'

const Carousel = ({ autoPlayInterval = 3000 }) => {
    const cities = [
        { name: 'Neo Tokio', imageUrl: '/assets/city1.png' },
        { name: 'Buenos Aires', imageUrl: '/assets/city2.png' },
        { name: 'Capilla del Monte ', imageUrl: '/assets/city3.png' },
        { name: 'Wakatobi', imageUrl: '/assets/city4.png' },
        { name: 'Assisi', imageUrl: '/assets/assisi-city-7150611_1280.jpg' },
        { name: 'Paris 6', imageUrl: '/assets/eiffel-tower-3349075_640.jpg' },
        { name: 'Santorini', imageUrl: '/assets/santorini-4996846_1280.jpg' },
        { name: 'hungarian', imageUrl: '/assets/hungarian-parliament-building-6933621_640.jpg' },
        { name: 'Rio de janeiro', imageUrl: '/assets/rio-de-janeiro-1963744_640.jpg' },
        { name: 'Venecia', imageUrl: '/assets/venice-2451047_640.jpg' },
        { name: 'Praga', imageUrl: '/assets/prague-4794636_1280.jpg' },
        { name: 'Barcelona', imageUrl: '/assets/travel-5188598_1280.jpg' },
        // Add more city objects here...
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const handleNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cities.length / 4));
    };

    const handlePrevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + Math.ceil(cities.length / 4)) % Math.ceil(cities.length / 4));
    };

    useEffect(() => {
        let intervalId;

        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cities.length / 4));
            }, autoPlayInterval);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isAutoPlaying, cities.length, autoPlayInterval]);

    return (
        <div className="carousel-container">
            <h2>Popular Mytineraries</h2>
            <div className="carousel">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
                    {Array.from({ length: Math.ceil(cities.length / 4) }).map((_, slideIndex) => (
                        <div key={slideIndex} className="carousel-slide">
                            {cities.slice(slideIndex * 4, slideIndex * 4 + 4).map((city, index) => (
                                <div key={index} className="carousel-image">
                                    <img src={city.imageUrl} alt={`Slide ${slideIndex} - Image ${index}`} />
                                    <div className="city-name-container" style={{ width: "100%" }}>
                                        <p className="city-name">{city.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <Button className="carousel-btn prev" variant='ghost' onClick={handlePrevSlide}>
                    <img
                        src={'/assets/Icons-arrows/icons8-arrow-left.png'}
                        width={20}
                    />
                </Button>
                <Button className="carousel-btn next" variant='ghost' onClick={handleNextSlide}>
                    <img
                        src={'/assets/Icons-arrows/icons8-arrow-right.png'}
                        width={20}
                    />
                </Button>
            </div>
        </div>
    );
};

export default Carousel;