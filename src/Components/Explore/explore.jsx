import './explore.css'
import React, { useState } from 'react';
import carData from "../../Json/carData.json";

function Explore(props) {

        const [activeIndex, setActiveIndex] = useState(0);
    
        const handleClick = (index) => {
            setActiveIndex(index);
        };
    
        const buttons = carData.buttons;
        const carImages = carData.carImages;

    return(
      <div className='explore-container'>
        <div className='text-container'>
            <h2 className='explore-title'>{props.exploreTitle}</h2>
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