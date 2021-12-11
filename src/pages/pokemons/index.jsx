import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftCircle, Search } from 'react-feather';

import { allDex } from '../../services/pokeAPI';
import Logo from '../../assets/logo.svg';

import './styles.css';

export const PokemonList =  () => {

    const { idGen } = useParams();
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const buscarPKMs = async () => {
            try {
                const pkm = await allDex[idGen];
                setPokemonList(pkm);
            } catch (e) {
                alert("Ops ocoreu um erro!");
            }
        }
        buscarPKMs();
    }, [idGen]);


    
    return (
        <div className="list-container">
            {/* {pokemonList.length > 0 && (
                <div>
                    <h1>{pokemonList[0].id}</h1>
                    <h1>{pokemonList[0].name}</h1>
                    <img src={pokemonList[0].image} alt={pokemonList[0].name}/>
                </div>
            )} */}

            <header className="header">
               <div>
                    <Link to="/gens">
                        <ArrowLeftCircle size={50} />
                    </Link>
               </div>

                <img src={Logo} alt="Pokemon Logo"/>

                <div className="input-container">
                    <input type="text" placeholder="Pesquisar pokemon" />
                    <button>
                        <Search size={20} />
                    </button>
                </div>
            </header>

            <main className="pokemon-list">
                <ul>
                    <Link to="#">
                        <li>
                            <div className="image-container">
                                <img src={Logo} alt="Pokemon Name" />
                            </div>

                            <div className="content">
                                <p>#001</p>
                                <h2>PokemonName</h2>
                                <div className="types">
                                    <p>Grass</p>
                                    <p>Poison</p>
                                </div>
                            </div>
                        </li>
                    </Link>

                    <Link to="#">
                        <li>
                            <div className="image-container">
                                <img src={Logo} alt="Pokemon Name" />
                            </div>

                            <div className="content">
                                <p>#001</p>
                                <h2>PokemonName</h2>
                                <div className="types">
                                    <p>Grass</p>
                                    <p>Poison</p>
                                </div>
                            </div>
                        </li>
                    </Link>

                    <Link to="#">
                        <li>
                            <div className="image-container">
                                <img src={Logo} alt="Pokemon Name" />
                            </div>

                            <div className="content">
                                <p>#001</p>
                                <h2>PokemonName</h2>
                                <div className="types">
                                    <p>Grass</p>
                                    <p>Poison</p>
                                </div>
                            </div>
                        </li>
                    </Link>

                    <Link to="#">
                        <li>
                            <div className="image-container">
                                <img src={Logo} alt="Pokemon Name" />
                            </div>

                            <div className="content">
                                <p>#001</p>
                                <h2>PokemonName</h2>
                                <div className="types">
                                    <p>Grass</p>
                                    <p>Poison</p>
                                </div>
                            </div>
                        </li>
                    </Link>

                    <Link to="#">
                        <li>
                            <div className="image-container">
                                <img src={Logo} alt="Pokemon Name" />
                            </div>

                            <div className="content">
                                <p>#001</p>
                                <h2>PokemonName</h2>
                                <div className="types">
                                    <p>Grass</p>
                                    <p>Poison</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                </ul>
            </main>

        </div>
    );
}