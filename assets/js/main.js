
const $pokemonsNaOL = document.getElementById("listaDePokemons");
const $loadMoreButton = document.getElementById('LoadMore');

const maxRecords = 100;
const limit = 6;
let offset = 0;

// função para converter o pokemon em um item da lista da pokedex em html
function converterPokemonParaListaDoHTML(pokemon) {
  return `
    <li class="pokemon ${pokemon.type} ">
                <span class="number">#0${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.image}"
                        alt="${pokemon.name}">
                </div>

            </li>
    `;
}


//função que itera a lista do retorno da função get.Pokemons e adiciona no html
function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
    const newPokemon = pokemonList.map(converterPokemonParaListaDoHTML).join('')
    $pokemonsNaOL.innerHTML += newPokemon;
  });
}

loadPokemonItens(offset, limit)

$loadMoreButton.addEventListener('click', () => {
  offset += limit;
  const qtdRecordsWithNextPage = offset + limit

  if (qtdRecordsWithNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    $loadMoreButton.parentElement.removeChild($loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }
})