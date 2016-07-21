var React = require('react');
var PokemonStore = require('../store/pokemons');

var PokemonDetail = React.createClass({
  getStateFromStore: function(){
    return { pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId))};
  },

  getInitialState: function(){
    return { pokemon: this.getStateFromStore()};
  }
});
