import './services.css'
import React, { useState } from 'react'

function ServicesReduced() {

    const [activeIndex] = useState(0);
    
    const serviceImages = [
        [
            './src/assets/conserto-img.png',
            './src/assets/mundo-img.png',
            './src/assets/servico-img.png',
        ]
    ];

    const serviceText = [
        [
            'CONSERTO PARA VOCÊ',
            'MUNDO CARRO NOVO',
            'SERVIÇOS 24 HORAS',
        ]
    ];

    const serviceInfo = [
        [
            'Tenha acesso a consertos limitados de acordo com o plano pago por você.',
            'Acompanhe a relação entre meio ambiente e os nossos carros. Entenda como ajudar o próximo e ter consciência.',
            'Saiba os serviços 24 horas disponíveis para você de acordo com o carro adquirido.',
        ]
    ];

    const buttons = [
        'Conserte aqui',
        'Acesse aqui',
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

export default ServicesReduced