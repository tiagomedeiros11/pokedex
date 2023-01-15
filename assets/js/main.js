


function converterTiposDePokemonsParaLi(pokemonType) {
  return pokemonType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

// função para converter o pokemon em um item da lista da pokedex em html
function converterPokemonParaListaNoHTML(pokemon) {
  return `
    <li class="pokemon">
                <span class="number">#0${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${converterTiposDePokemonsParaLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}"
                        alt="${pokemon.name}">
                </div>

            </li>
    `;
}

const $pokemonsNaOL = document.getElementById("listaDePokemons");

//função que itera a lista do retorno da função get.Pokemons e adiciona no html

pokeApi.getPokemons().then((pokemonList = []) => {
  $pokemonsNaOL.innerHTML += pokemonList.map(converterPokemonParaListaNoHTML).join('')
});


