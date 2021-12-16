import React, { createContext, useEffect, useState } from 'react';
import { allDex } from '../services/pokeAPI';

export const PkmContext = createContext({
    setGen: () => {},
    pokemonList: [],
    pokemonDetails: {},
    setPokemonDetails: () => {}
});

export default function PkmProvider({ children }) {

    const [gen, setGen] = useState(-1);
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState({});

    useEffect(() => {
        const buscarPKMs = async () => {
            try {
                const pkm = await allDex[gen];
                setPokemonList(pkm);
            } catch (e) {
                alert("Ops ocoreu um erro!");
            }
        }
        buscarPKMs();
    }, [gen]);

    return(
        <PkmContext.Provider 
            value={{
                setGen,
                pokemonList,
                pokemonDetails,
                setPokemonDetails
            }}
        >
            {children}
        </PkmContext.Provider>
    );
}