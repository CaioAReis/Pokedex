import React from 'react';
import { types } from '../../constants/types';

import './styles.css';

export const Types = ({ pokemonTypes }) => {
    return(
        <div className="types-card">
            {pokemonTypes.map(t => (
                <p className="type" style={{
                    backgroundColor: types[`${t.type.name}`.toUpperCase()]
                }}>
                    {`${t.type.name}`.toUpperCase()}
                </p>
            ))}   
        </div>
    );
}