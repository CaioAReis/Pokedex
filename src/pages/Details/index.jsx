import React, { useContext } from 'react';
import { PkmContext } from '../../context/pkmContext';

import './styles.css';

export const PokemonDetails = ({ pokemon }) => {

    const { name, setName } = useContext(PkmContext);

    return(
        <>
            <h1>{name}</h1>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </>
    )
}