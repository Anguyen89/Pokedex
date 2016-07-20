
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonStore = new Store(AppDispatcher);

var PokemonConstants = require('../constants/pokemon_constants');

var _pokemons = {};


PokemonStore.all = function(){
  var pokemon = [];
  for (var id in _pokemons){
    if (_pokemons.hasOwnProperty(id)){
      pokemon.push(_pokemons[id]);
    }
  }
  return pokemon;
};

PokemonStore.resetPokemon = function(pokemon){
  _pokemons[pokemon.id] = pokemon;
};

PokemonStore.resetPokemons = function(pokemons){
  _pokemons = {};
  pokemons.forEach(function(pokemon, id){
    _pokemons[id] = pokemon;
  });
};
