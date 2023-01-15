
// função para converter o pokemon em um item da lista da pokedex em html

function converterPokemonParaListaNoHTML(pokemon) {
  return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
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


