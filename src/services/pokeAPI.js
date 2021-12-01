
export const fetchPokemon = (startGEN, endGEN) => {

    const getPokemonUrl = id => `https://pokeapi.glitch.me/v1/pokemon/${id}`;
    const pokemonPromises = [];

    for (let i = startGEN; i < endGEN; i++) {
        pokemonPromises.push(
            fetch(getPokemonUrl(i)).then(response => response.json())
        );
    }

    Promise.all(pokemonPromises).then(pokemons => {
        console.log(pokemons)
    });

}