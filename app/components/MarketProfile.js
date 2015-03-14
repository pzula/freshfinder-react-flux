var React = require('react');
var Router = require('react-router');
var notesStore = require('../stores/NotesStore');
var MarketData = require('../components/FreshFinder/MarketData');
var Notes = require('../components/Notes/Notes');

var MarketProfile = React.createClass({
  mixins: [ Router.State ];
  render: function(){
    var market_id = this.getParams().market_id;
      return (
        <div className="row">
          <div className="col-md-8">
            <MarketData market_id={market_id}/>
          </div>
          <div className="col-md-4">
            <Notes market_id={market_id}/>
          </div>
        </div>
      )
  }
});

module.exports = MarketProfile;
