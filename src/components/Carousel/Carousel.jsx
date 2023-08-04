import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, autoPlayInterval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    useEffect(() => {
        let intervalId;

        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, autoPlayInterval);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isAutoPlaying, images.length, autoPlayInterval]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-btn prev" onClick={handlePrevImage}>
                    &lt;
                </button>
                <button className="carousel-btn next" onClick={handleNextImage}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
