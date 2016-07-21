var React = require('react');

var PokemonIndex = require('./pokemon_index.jsx');

var App = React.createClass({
  render: function(){
    return (
    <div>
      <div id="pokedex" className="pokemon-index-pane">
        <PokemonIndex />
      </div>
      {this.props.children}
    </div>
    );
  }
});

module.exports = App;
