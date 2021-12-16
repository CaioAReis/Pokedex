import React, { useContext } from 'react';
import { PkmContext } from '../../context/pkmContext';
import { ArrowLeftCircle } from 'react-feather';

import Logo from '../../assets/logo.svg';


import './styles.css';

export const PokemonDetails = () => {

    const { pokemonDetails } = useContext(PkmContext);

    return(
        <div className="details-container">

            <section className="firstS-details">
                <ArrowLeftCircle size={60} />

                <h1>
                    <span>
                        #{pokemonDetails.id.toString().padStart(3,0)}
                    </span>
                    {`${pokemonDetails.name}`
                        .replace(pokemonDetails.name[0], `${pokemonDetails.name[0]}`
                        .toLocaleUpperCase())}
                </h1>

                <section className="image-container">
                    <img src={pokemonDetails.image} alt={pokemonDetails.name} />
                </section>
            </section>

            <section className="secondS-details">
                <img src={Logo} alt="Logo" />

                <section className="base-stats">
                    <h2>Base Stats:</h2>

                    <section className="status">
                        <section>
                            <span>HP:</span>

                            <div>
                                <div />
                            </div>
                        </section>

                        <section>
                            <span>HP:</span>

                            <div>
                                <div />
                            </div>
                        </section>

                        <section>
                            <span>HP:</span>

                            <div>
                                <div />
                            </div>
                        </section>

                        <section>
                            <span>HP:</span>

                            <div>
                                <div />
                            </div>
                        </section>

                        <section>
                            <span>HP:</span>

                            <div>
                                <div />
                            </div>
                        </section>

                        <section>
                            <span>HP:</span>

                            <div>
                                <div />
                            </div>
                        </section>

                        <section>
                            <span>HP:</span>

                            <div>
                                <div />
                            </div>
                        </section>
                    </section>
                </section>

                <section className="hei-wei-types">

                    <div>
                        <h2>Height: 0.8m</h2>
                        <h2>Weight: 9Kgs</h2>
                    </div>

                    <div>
                        <p>GRASS</p>
                        <p>POISON</p>
                    </div>
                </section>

            </section>
        </div>
    )
}