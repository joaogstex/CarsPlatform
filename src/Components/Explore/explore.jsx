import './explore.css'
import React, { useState } from 'react';

function Explore() {

        const [activeIndex, setActiveIndex] = useState(0);
    
        const handleClick = (index) => {
            setActiveIndex(index);
        };
    
        const buttons = [
            'Carros de passeio',
            'SUVs',
            'Esportivos',
            'Híbridos',
            'Pick-ups'
        ];    

        const carImages = [
            [
                './src/assets/car-1.png',
                './src/assets/car-2.png',
                './src/assets/car-3.png',
            ],
            [
                './src/assets/car-4.png',
                './src/assets/car-5.png',
                './src/assets/car-6.png',
            ],
            [
                './src/assets/car-7.png',
                './src/assets/car-8.png',
                './src/assets/car-9.png',
            ],
            [
                './src/assets/car-10.png',
                './src/assets/car-11.png',
                './src/assets/car-12.png',
            ],
            [
                './src/assets/car-13.png',
                './src/assets/car-14.png',
            ]
        ];

    return(
      <div className='explore-container'>
        <div className='text-container'>
            <h2 className='explore-title'>Explore os nossos carros</h2>
            {buttons.map((label, index) => (
                <button
                    key={index}
                    className={`explore-btn ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    {label}
                </button>
            ))}
        </div>
        <div className='car-imgs-container'>
        {carImages[activeIndex].map((src, index) => (
                    <img key={index} src={src} alt={`car-${activeIndex}-${index}`} className='car-img' />
                ))}
        </div>
      </div>
    )
}

export default Explore