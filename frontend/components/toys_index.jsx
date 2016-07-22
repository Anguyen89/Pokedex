var React = require('react');

var ToysIndexItem = require('./toys_index_item.jsx');

var ToysIndex = React.createClass({

  render: function(){
    return(
      <ul>
        {this.props.toys && this.props.toys.map(function(toy){
          return <ToysIndexItem key={toy.id} toy={toy}/>;
        })}
      </ul>
    );
  }
});

module.exports = ToysIndex;
