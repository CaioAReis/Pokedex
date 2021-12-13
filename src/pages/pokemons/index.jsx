import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftCircle, Search } from 'react-feather';

import { allDex } from '../../services/pokeAPI';
import Logo from '../../assets/logo.svg';
import { PokemonCard } from '../../components/pokemonCard';

import './styles.css';

export const PokemonList =  () => {

    const { idGen } = useParams();
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (input) => {
        setfilteredList(pokemonList
            .filter(p => p.name.toString().includes(input)));
    }

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
                    <PokemonCard pokemonList={pokemonList} /> :
                    <PokemonCard pokemonList={filteredList} />
                }
            </main>

        </div>
    );
}