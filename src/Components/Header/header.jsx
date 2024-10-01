import './header.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState('Homepage'); // é o estado para o item ativo inicial

    const handleItemClick = (item) => {
        setActiveItem(item); // vai atualizar o item ativo ao clicar
        // mapeia os itens do menu para suas respectivas rotas
        const routes = {
            'Modelos': '/modelos',
            'Compra': '/compra',
            'Aluguel': '/aluguel',
            'Meu Carro': '/meu-carro',
            'Mundo Carro': '/mundo-carro',
            'Contato': '/contato',
        };
        // navega para a rota correspondente
        if (routes[item]) {
            navigate(routes[item]);
        }

    };

    const menuItems = [
        'Modelos',
        'Compra',
        'Aluguel',
        'Meu Carro',
        'Mundo Carro',
        'Contato',
    ];

    return (
        <header>
            <nav>
                <ul>
                    {/*<img src="./src/assets/Car-Logo-Transparent.png" id="logo" alt="Logo" width={70} />*/}
                    
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className={`header-text ${activeItem === item ? 'active' : ''}`}
                            onClick={() => handleItemClick(item)}
                        >
                            {/*para evitar que a página recarregue*/}
                            <a href="#" onClick={(e) => e.preventDefault()}>{item}</a>
                        </li>
                    ))}

                    <li className='header-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header

