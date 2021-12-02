const species = 'https://pokeapi.co/api/v2/pokemon-species/';
// const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const searchPokemonList = async (dexStart, dexEnd) => {
    const prom = []
    for (let i = dexStart; i <= dexEnd; i++) {
        prom.push(fetch(species + i).then(response => response.json()));
    }

    Promise.all(prom).then(pkm => {console.log(pkm)});
    
}

export const api = {
    getPokemonList: async () => {
        return [
            {
                region: 'kanto',
                pokemons: searchPokemonList(1, 7)
            },
            {
                region: 'johto',
                pokemons: []
            },
            {
                region: 'hoenn',
                pokemons: []
            },
            {
                region: 'sinnoh',
                pokemons: []
            },
            {
                region: 'unova',
                pokemons: []
            },
            {
                region: 'kalos',
                pokemons: []
            },
            {
                region: 'alola',
                pokemons: []
            },
            {
                region: 'galar',
                pokemons: []
            },
        ];
    }
}