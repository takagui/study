angular.module('pokedexApp')
.factory('PokeApiFactory', PokeApiFactory)

function PokeApiFactory() {
  return {
    pokemonList: [
      { name: 'bulbasaur', number: '001' },
      { name: 'pikachu', number: '025' },
      { name: 'mew', number: '151' },
      { name: 'chikorita', number: '152' },
      { name: 'celebi', number: '251' }
    ]
  }
}