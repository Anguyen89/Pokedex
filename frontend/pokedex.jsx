var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var App = require('./components/app');
// var PokemonDetail = require('./components/pokemon_detail');
// var ToyDetail = require('./components/toy_detail');

var routes = (
  <Router path="/" component={App}>
    <Route path="/pokemon/:pokemonId" component={PokemonDetail}>
      <Route path="toys/:toy_id" component={ToyDetail}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<App/>, document.getElementById('root'));
});
