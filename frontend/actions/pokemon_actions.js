var Dispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require('../constants/pokemon_constants');
var ApiUtil = require('../utils/api_util');


var PokemonActions = {


  receiveAllPokemons: function(pokemons){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function(pokemon){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  },

  fetchPokemon: function(id){
    ApiUtil.fetchPokemon(id, this.receiveSinglePokemon);
  },

  fetchAllPokemons: function(){
    ApiUtil.fetchAllPokemons(this.receiveAllPokemons);
  }

};

module.exports = PokemonActions;
