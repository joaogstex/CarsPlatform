import './services.css'
import React, { useState } from 'react'

function Services() {

    const [activeIndex] = useState(0);
    
    const serviceImages = [
        [
            './src/assets/alugar-img.png',
            './src/assets/contato-img.png',
            './src/assets/oferta-img.png',
        ]
    ];

    const serviceText = [
        [
            'ALUGUE CONOSCO',
            'ENTRE EM CONTATO',
            'OFERTAS',
        ]
    ];

    const serviceInfo = [
        [
            'Tenha um dos nossos carros sempre que precisar. Reserve o modelo que preferir e aproveite a viagem.',
            'Tem dúvidas ou críticas? Fale com a nossa equipe e estaremos aqui para te atender.',
            'Saiba as ofertas disponíveis para você em um só lugar.',
        ]
    ];

    const buttons = [
        'Alugar',
        'Entrar em contato',
        'Saiba mais',
    ];    

    return(
        <div className='services-container'>
            <div className='services-img-container'>
            {serviceImages[activeIndex].map((src, index) => (
                <div key={index} className='service-item'>
                    <img key={index} src={src} alt={`service-${activeIndex}-${index}`} className='service-img' />
                <h3 className='service-text'>{serviceText[activeIndex][index]}</h3>
                <p className='service-info'>{serviceInfo[activeIndex][index]}</p>
                <button className='service-btn'>{buttons[index]}</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Services