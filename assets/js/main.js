


// função para converter o pokemon em um item da lista da pokedex em html
function converterPokemonParaListaNoHTML(pokemon) {
  return `
    <li class="pokemon ${pokemon.type} ">
                <span class="number">#0${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.image}"
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


