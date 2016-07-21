var React = require('react');
var PokemonStore = require('../stores/pokemons');
var PokemonActions = require('../actions/pokemon_actions');


var PokemonIndex = React.createClass({

  getInitialState: function(){
    return { pokemons: PokemonStore.all()};
  },

  componentWillMount: function(){
    PokemonActions.fetchAllPokemons();
  },

  componentDidMount: function(){
    this.pokemonListener = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchAllPokemons();
  },

  componentWillUnmount: function(){
    this.pokemonListener.remove();
  },

  _onChange: function(){
    this.setState({ pokemons: PokemonStore.all()});
  },

  render: function(){
    return (
      <div>{this.state.pokemons.length}</div>
    );
  }
});

module.exports = PokemonIndex;
