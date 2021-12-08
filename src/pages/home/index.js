import React from 'react';

import Logo from '../../assets/logo.svg';
import PokeBall from '../../assets/pokeball.svg';
import Rayquaza from '../../assets/rayquaza.svg';

import { Instagram, GitHub, Linkedin } from 'react-feather';

import './styles.css';

export const Home = () => {
    return (
        <div className="home-container">
            <section className="first-side">
                <img className="logo" src={Logo} alt="Pokémon"/>
                <main>
                    <h1>Practicing React JS with pokemons</h1>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. At error eveniet qua! 
                    </p>

                    <button>
                        Go to Dex
                        <img src={PokeBall} alt="Pokeball icon" />
                    </button>

                    <section className="links">
                        <a 
                            href="http://" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Linkedin"
                        >
                            <Linkedin size={35}/>
                        </a>
                        <a 
                            href="http://" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="GitHub"
                            style={{marginInline: 30}}
                        >
                            <GitHub size={35}/>
                        </a>
                        <a 
                            href="http://" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Instagram"
                        >
                            <Instagram size={35}/>
                        </a>
                    </section>
                </main>
            </section>
            <section className="second-side">
                <img src={Rayquaza} alt="Rayquaza"/>
            </section>
        </div>
    );
}