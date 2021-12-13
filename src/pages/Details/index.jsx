import React from 'react';

import './styles.css';

export const PokemonDetails = ({ pokemon }) => {
    return(
        <h1>{pokemon.name}</h1>
    )
}