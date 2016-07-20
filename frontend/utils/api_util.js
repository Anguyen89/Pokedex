
var PokemonActions = require('../actions/pokemon_actions');

var ApiUtil  = {
  fetchAllPokemons: function(cb){
    $.ajax({
      url: "api/pokemon",
      method: "GET",
      success: function(pokemon){
        console.log(pokemon);
        PokemonActions.receiveAllPokemons(pokemon);
      }
    });
  }
};


module.exports = ApiUtil;
