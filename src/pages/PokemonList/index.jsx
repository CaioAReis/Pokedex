import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle, Search } from 'react-feather';
import { PkmContext } from '../../context/pkmContext';

import Logo from '../../assets/logo.svg';
import { PokemonCard } from '../../components/PokemonCard';

import './styles.css';

export const PokemonList = () => {

    const { pokemonList } =  useContext(PkmContext);

    const [filteredList, setfilteredList] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (input) => {
        setfilteredList(pokemonList
            .filter(p => p.name.toString().includes(input)));
    }

    return (
        <div className="list-container">
            <header className="header">
               <div>
                    <Link to="/gens">
                        <ArrowLeftCircle size={50} />
                    </Link>
               </div>

                <img src={Logo} alt="Pokemon Logo"/>

                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="Pesquisar pokemon" 
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            handleSearch(e.target.value);
                        }}
                    />
                    <button>
                        <Search size={20} />
                    </button>
                </div>
            </header>

            <main className="pokemon-list">
                {search === '' ? 
                    <PokemonCard 
                        pokemonList={pokemonList !== undefined ? pokemonList : null} 
                    /> :
                    <PokemonCard 
                        pokemonList={filteredList !== undefined ? filteredList : null} 
                    />
                }
            </main>
        </div>
    );
}