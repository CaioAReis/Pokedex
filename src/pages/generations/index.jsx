import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-feather';

import Kanto from '../../assets/kanto.svg';
import Johto from '../../assets/johto.svg';
import Hoenn from '../../assets/hoenn.svg';
import Sinnoh from '../../assets/sinnoh.svg';
import Unova from '../../assets/unova.svg';
import Kalos from '../../assets/kalos.svg';
import Alola from '../../assets/alola.svg';
import Galar from '../../assets/galar.svg';

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
                <Link to="#">
                    <li>
                        <img src={Kanto} alt="Kanto Dex" />
                        <h2>Kanto</h2>
                    </li>
                </Link>

                <Link to="#">
                    <li>
                        <img src={Johto} alt="Johto Dex" />
                        <h2>Johto</h2>
                    </li>
                </Link>

                <Link to="#">
                    <li>
                        <img src={Hoenn} alt="Hoenn Dex" />
                        <h2>Hoenn</h2>
                    </li>
                </Link>

                <Link to="#">
                    <li>
                        <img src={Sinnoh} alt="Sinnoh Dex" />
                        <h2>Sinnoh</h2>
                    </li>
                </Link>

                <Link to="#">
                    <li>
                        <img src={Unova} alt="Unova Dex" />
                        <h2>Unova</h2>
                    </li>
                </Link>

                <Link to="#">
                    <li>
                        <img src={Kalos} alt="Kalos Dex" />
                        <h2>Kalos</h2>
                    </li>
                </Link>

                <Link to="#">
                    <li>
                        <img src={Alola} alt="Alola Dex" />
                        <h2>Alola</h2>
                    </li>
                </Link>

                <Link to="#">
                    <li>
                        <img src={Galar} alt="Galar Dex" />
                        <h2>Galar</h2>
                    </li>
                </Link>
            </ul>
        </div>
    );
}