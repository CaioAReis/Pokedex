import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const PokemonCard = ({ pokemon }) => {
    return(
        <Link to="#" className="pokemonCard">
            <li>
                <div className="image-container">
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>

                <div className="content">
                    <p>#{pokemon.id}</p>
                    <h2>
                        {`${pokemon.name}`
                        .replace(pokemon.name[0], `${pokemon.name[0]}`
                        .toLocaleUpperCase())}
                    </h2>
                    <div className="types">
                        {pokemon.types.map(type => (
                            <p>{type.type.name}</p>
                        ))}
                    </div>
                </div>
            </li>
        </Link>
    );
}