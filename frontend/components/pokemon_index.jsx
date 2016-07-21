var React = require('react');
var PokemonStore = require('../stores/pokemons');
var PokemonActions = require('../actions/pokemon_actions');
var PokemonIndexItem = require('./pokemon_index_item');

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
    var pokemons = this.state.pokemons.map(function(pokemon, id){
      return (<PokemonIndexItem pokemon={pokemon} key={id}></PokemonIndexItem>);
    });
    return (
      <div>
        <ul>
          {pokemons}
        </ul>
      </div>
    );
  }
});

module.exports = PokemonIndex;
