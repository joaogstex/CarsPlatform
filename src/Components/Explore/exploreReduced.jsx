// src/Components/Explore/ExploreReduced.jsx

import './explore.css'
import React, { useState } from 'react';
import carData from "../../Json/carData.json";

function ExploreReduced({ exploreTitle }) {
    {/*...carData.carImages.flat(),*/}
    const carImages = [...carData.additionalCarImages.flat()]; // Juntar todos os grupos em um único array
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length);
    };

    return (
        <div className='explore-container'>
            <div className='text-container'>
                <h2 className='explore-title'>{exploreTitle}</h2>
                <button className='explore-btn'>Todos os modelos recomendados para compra</button>
            </div>
            <div className='car-imgs-container'>
                <button className='nav-btn' onClick={handlePrev}>&lt;</button>
                <img src={carImages[currentIndex]} alt={`car-reduced-${currentIndex}`} className='car-img' />
                <button className='nav-btn' onClick={handleNext}>&gt;</button>
            </div>
        </div>
    )
}

export default ExploreReduced;
