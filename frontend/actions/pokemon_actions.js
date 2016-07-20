var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemon_constants');
var ApiUtil = require('../utils/api_util');


var PokemonActions = {

  receiveAllPokemons: function(pokemons){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  fetchAllPokemons: function(){
    ApiUtil.fetchAllPokemons();
  }

};

module.exports = PokemonActions;
