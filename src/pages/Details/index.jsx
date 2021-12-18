import React, { useContext } from 'react';
import { PkmContext } from '../../context/pkmContext';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-feather';

import Logo from '../../assets/logo.svg';

import './styles.css';
import { BaseStats } from '../../components/BaseStats';
import { Types } from '../../components/Types'

export const PokemonDetails = () => {

    const { pokemonDetails } = useContext(PkmContext);

    return(
        pokemonDetails !== undefined && (
            <div className="details-container">

                <section className="firstS-details">
                    <Link to="/gen">
                        <ArrowLeftCircle size={60} />
                    </Link>

                    <h1>
                        <span>
                            #{pokemonDetails.id.toString().padStart(3,0)}
                        </span>
                        {`${pokemonDetails.name}`.replace(pokemonDetails.name[0], 
                            `${pokemonDetails.name[0]}`.toLocaleUpperCase())}
                    </h1>

                    <section className="image-container">
                        <img 
                            src={pokemonDetails.image} 
                            alt={pokemonDetails.name} 
                        />
                    </section>
                </section>

                <section className="secondS-details">
                    <img src={Logo} alt="Logo" />

                    <section className="base-stats">
                        <h2 className="details-title" >Base Stats:</h2>

                        <BaseStats pokemonDetails={pokemonDetails}/>
                    </section>

                    <section className="hei-wei-types">

                        <div className="hei-wei">
                            <h2 className="details-title">
                                Height: 
                                <span>
                                    {(pokemonDetails.height) / 10}m
                                </span>
                            </h2>
                            <h2 className="details-title">
                                Weight: 
                                <span>
                                    {(pokemonDetails.weight) / 10}Kg
                                </span>
                            </h2>
                        </div>

                        <div className="types">
                            <Types pokemonTypes={pokemonDetails.types} />
                        </div>
                    </section>

                    <section className="sprites">
                        <div>
                            <img 
                                src={pokemonDetails.sprites.front_default} 
                                alt={`${pokemonDetails.name} front`}
                            />
                            <span>Front</span>
                        </div>

                        <div>
                            <img 
                                src={pokemonDetails.sprites.back_default} 
                                alt={`${pokemonDetails.name} back`}
                            />
                            <span>Back</span>
                        </div>

                        <div>
                            <img 
                                src={pokemonDetails.sprites.front_shiny}
                                alt={`${pokemonDetails.name} shiny`}
                            />
                            <span>Shiny</span>
                        </div>
                    </section>

                </section>
            </div>
        )
    );
}