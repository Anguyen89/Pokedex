var React = require('react');
var ReactDOM = require('react-dom');


var PokemonIndex = require('./components/pokemon_index');
// window.ApiUtil = require('./utils/api_util');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<PokemonIndex/>, document.getElementById('root'));
});
