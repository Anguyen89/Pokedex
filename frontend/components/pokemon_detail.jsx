var React = require('react');
var PokemonStore = require('../stores/pokemons');
var PokemonActions = require('../actions/pokemon_actions');


var PokemonDetail = React.createClass({
  getStateFromStore: function(){
    return { pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId))};
  },

  getInitialState: function(){
    return { pokemon: this.getStateFromStore()};
  },

  componentWillReceiveProps: function(newProps){
    PokemonActions.fetchSinglePokemon(this.props.params.pokemonId);
  },

  _onChange: function(){
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function(){
    this.detailListener = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchSinglePokemon(parseInt(this.props.params.pokemonId));
  },

  componentWillUnmount: function(){
    this.detailListener.remove();
  },

  render: function(){
    return (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={this.state.pokemon.image_url} />
                  {['name', 'attack', 'defense', 'poke_type', 'moves'].map((attr) => {
                      return <p key={attr}>{attr}: {this.state.pokemon[attr]}</p>;
                  })}
            </div>
          </div>
        </div>
    );
  }
});


module.exports = PokemonDetail;
