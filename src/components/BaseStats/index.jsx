import React from 'react';

import './styles.css';

export const BaseStats = ({ pokemonDetails }) => {

    const handleCalcStat = (index) => {
        const stat = pokemonDetails.stats[index].base_stat;
        const porcentStats = (stat * 100) / 255;
        return porcentStats;
    }

    return (
        <section className="status">
           <div>
                <section>
                    <span>HP:</span>
                    <div>
                        <div style={{width: `${handleCalcStat(0)}%`}} />
                    </div>
                </section>
                <section>
                    <span>SpAtk:</span>
                    <div>
                        <div style={{width: `${handleCalcStat(3)}%`}}/>
                    </div>
                </section> 
            </div>

            <div>
                <section>
                <span>Atk:</span>
                    <div>
                        <div style={{width: `${handleCalcStat(1)}%`}}/>
                    </div>
                </section>
                <section>
                    <span>SpDef:</span>
                        <div>
                            <div style={{width: `${handleCalcStat(4)}%`}}/>
                        </div>
                </section> 
            </div> 

            <div>
                <section>
                <span>Def:</span>
                    <div>
                        <div style={{width: `${handleCalcStat(2)}%`}}/>
                    </div>
                </section>
                <section>
                    <span>Spd: </span>
                        <div>
                            <div style={{width: `${handleCalcStat(5)}%`}}/>
                        </div>
                </section> 
            </div> 
        </section>
    );
}