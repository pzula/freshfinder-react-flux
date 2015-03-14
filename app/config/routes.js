var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var MarketProfile = require('../components/MarketProfile')
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="market_profile" path="market_profile/:market_id" handler={MarketProfile} />
    <DefaultRoute handler={Home} />
  </Route>
);
