const specie = 'https://pokeapi.co/api/v2/pokemon/';
const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const fetchPokemon = async (id) => {
    try {
        let pokemon = await fetch(`${specie + id}/`)
        .then(response => response.json());
        const pokeImage = `${image + id}.png`;
        return pokemon = {
            ...pokemon, 
            image: pokeImage, 
        };
    } catch (e) {
        alert("Ops ocorreu um erro!");
    }
}

const searchPokemonList = async (dexStart, dexEnd) => {
    try {
        const list = []
        for (let i = dexStart; i <= dexEnd; i++) {
            list.push(await fetchPokemon(i));
        }
        return list;
    } catch (e) {
        alert("Ops ocorreu um erro!");
    }
}

const kantoDex = async () => {
    // 151
    return await searchPokemonList(1, 151);
}

const johtoDex = async () => {
    // 251
    return await searchPokemonList(152, 251);
}

const hoennDex = async () => {
    // 386
    return await searchPokemonList(252, 386);
}

const sinnohDex = async () => {
    // 493
    return await searchPokemonList(387, 493);
}

const unovaDex = async () => {
    // 649
    return await searchPokemonList(494, 649);
}

const kalosDex = async () => {
    // 721
    return await searchPokemonList(650, 721);
}

const alolaDex = async () => {
    // 809
    return await searchPokemonList(722, 809);
}

const galarDex = async () => {
    // 898
    return await searchPokemonList(810, 898);
}

export const allDex = [
    kantoDex(),
    johtoDex(),
    hoennDex(),
    sinnohDex(),
    unovaDex(),
    kalosDex(),
    alolaDex(),
    galarDex()
];