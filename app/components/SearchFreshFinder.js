var React = require('react');
var Router = require('react-router');

var SearchFreshFinder = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function(){
    var market_id = this.refs.market_id.getDOMNode().value;
    this.refs.market_id.getDOMNode().value = ''
    this.transitionTo('market_profile', { market_id: market_id });
  },
  render: function(){
    return (
      <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-sm-7">
              <input type="text" className="form-control" ref="market_id" />
            </div>
            <div className="form-group col-sm-5">
              <button type="submit" className="btn btn-block btn-primary">Search FreshFinder</button>
            </div>
          </form>
        </div>
    )
  }
});

module.exports = SearchFreshFinder;
