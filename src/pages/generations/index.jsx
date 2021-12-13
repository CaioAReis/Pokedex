import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-feather';

import { GenCard } from '../../components/genCard';

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
                <GenCard linkTo="/gen/0"  genName="Kanto" />
                <GenCard linkTo="/gen/1"  genName="Johto" />
                <GenCard linkTo="/gen/2"  genName="Hoenn" />
                <GenCard linkTo="/gen/3"  genName="Sinnoh"/>
                <GenCard linkTo="/gen/4"  genName="Unova" />
                <GenCard linkTo="/gen/5"  genName="Kalos" />
                <GenCard linkTo="/gen/6"  genName="Alola" />
                <GenCard linkTo="/gen/7"  genName="Galar" />
            </ul>
        </div>
    );
}