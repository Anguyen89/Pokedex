
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonStore = new Store(AppDispatcher);

var PokemonConstants = require('../constants/pokemon_constants');

var _pokemons = {};


PokemonStore.find = function(id){
  if (_pokemons[id]){
    return _pokemons[id];
  }
};

PokemonStore.all = function(){
  var pokemon = [];
  for (var id in _pokemons){
    if (_pokemons.hasOwnProperty(id)){
      pokemon.push(_pokemons[id]);
    }
  }
  return pokemon;
};

var resetPokemon = function(pokemon){
  _pokemons[pokemon.id] = pokemon;
};

var resetPokemons = function(pokemons){
  console.log("reseting");
  _pokemons = {};
  console.log(pokemons);
  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
};


PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      resetPokemon(payload.pokemon);
      PokemonStore.__emitChange();
      break;
  }
};

module.exports = PokemonStore;
