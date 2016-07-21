
var PokemonActions = require('../actions/pokemon_actions');



var ApiUtil  = {


  fetchSinglePokemon: function(id, cb){
    $.ajax({
      url: 'api/pokemon/' + id,
      success: cb
    });
  },
  fetchAllPokemons: function(cb){
    $.ajax({
      url: "api/pokemon",
      success: cb

    });
  }
};


module.exports = ApiUtil;
