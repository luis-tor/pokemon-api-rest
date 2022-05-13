const URL = () =>{
    const idPokemon = Math.floor(Math.random() * 898);
    const API = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    return API;
}

const pokemonRes = async (API) => {
    try{
        const response = await fetch(API);
        const pokemon = await response.json();
        const data = {
            name: pokemon.name,
            id: pokemon.id,
            image: pokemon.sprites.other.dream_world.front_default,
            sprite: pokemon.sprites.front_default,
            types: pokemon.types.map(type => type.type.name),
            heigth: pokemon.height,
            weight: pokemon.weight,
        }
        return data;
    }catch{
        console.log(error);
    }
}

const renderPokemon = async () => {
    const pokemon = await pokemonRes(URL());
    console.log(pokemon);
    const img = document.getElementById("pokemon-image");
    if(pokemon.image)
        img.src = pokemon.image;
    else
        img.src = pokemon.sprite;
    const name = document.getElementById("pokemon-name");
    name.innerHTML = pokemon.name.toUpperCase();
    const id = document.getElementById("pokemon-id");
    id.innerHTML = pokemon.id;
    const types = document.getElementById("pokemon-type");
    types.innerHTML = pokemon.types.map(type => `<span class="type">${type.toUpperCase()}</span>`).join("");
}


renderPokemon()