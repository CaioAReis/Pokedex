import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-feather';

import { GenCard } from '../../components/GenCard';

import './styles.css';

export const Generations = () => {
    return(
        <div className="gen-container">
            <section>
                <Link to="/" >
                    <ArrowLeftCircle size={50}/>
                </Link>
            </section>
            
            <ul>
                <GenCard genNum={0}  genName="Kanto" />
                <GenCard genNum={1}  genName="Johto" />
                <GenCard genNum={2}  genName="Hoenn" />
                <GenCard genNum={3}  genName="Sinnoh"/>
                <GenCard genNum={4}  genName="Unova" />
                <GenCard genNum={5}  genName="Kalos" />
                <GenCard genNum={6}  genName="Alola" />
                <GenCard genNum={7}  genName="Galar" />
            </ul>
        </div>
    );
}