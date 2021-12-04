const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  const url1 = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const response1 = await fetch(url1);
  const pokemonColor = await response1.json();
  createPokemonCard(pokemon, pokemonColor);
};

const createPokemonCard = (pokemon, pokemonColor) => {
  console.log(pokemonColor);
  const { color, shape } = pokemonColor;
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  pokemonEl.style.background = `linear-gradient(${color.name}, #ffffff)`;
  const { id, name, sprites, types, base_experience, height, weight } = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
        <div class="img-container">
            <img src="${sprites.front_default}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            
<table class="details">
<tbody>
<tr>
<td><small>Type: <b>${type} &nbsp; </b></small></td>      
<td><small>Exp: <b>${base_experience}</b></small></td>
</tr>
<tr>        
<td><small>Height: <b>${height} &nbsp; </b></small></td>
<td><small>Weight: <b>${weight}</b></small></td>
</tr>
</tbody>
</table>
<div class="center">Shape: <b>${shape.name}</b></div>
    `;
  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
