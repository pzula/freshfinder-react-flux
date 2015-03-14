var React = require('react');
var Home = require('./Home');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SearchFreshFinder = require('./SearchFreshFinder');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchFreshFinder />
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;
