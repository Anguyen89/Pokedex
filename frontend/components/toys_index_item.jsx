var React = require('react');


var ToysIndexItem = React.createClass({

contextTypes: {
  router: React.PropTypes.object.isRequired
},

showDetail: function () {
  var url = '/pokemon/' + this.props.toy.pokemon_id + "/toys/" + this.props.toy.id;
  this.context.router.push(url);
},

  render: function(){
    return (
    <li className="toy-list-item" onClick={this.showDetail}>
      <p>Name: {this.props.toy.name}</p>
      <p>Price: {this.props.toy.price}</p>
      <p>Hapiness: {this.props.toy.happiness}</p>
    </li>
  );
  }
});

module.exports = ToysIndexItem;
