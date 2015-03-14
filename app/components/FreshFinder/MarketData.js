var React = require('react');
var freshFinderActions = require('../actions/freshFinderActions');
var marketStore = require('../store/MarketStore');

var MarketData = React.CreateClass({
  getInitialState: function(){
    return {
      market_id: marketStore.getMarketId(),
      market_data: marketStore.getMarketData
    }
  },
  componentWillReceiveProps: function(obj){
    freshFinderActions.changeMarket(obj.market_id);
    freshFinderActions.getMarket(obj.market_id);
  },
  componentDidMount: function(){
    freshFinderActions.changeMarket(this.props.market_id);
    freshFinderActions.getMarket(this.props.market_id);
    marketStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    marketStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({
      market_id: marketStore.getMarketId(),
      market_data: marketStore.getMarketData()
    });
  },
  render: function(){
    return (
      <div>
        <h3> Market Profile </h3>
        <ul className="list-group">
          {this.state.market_data.market.name <li className="list-group-item"> Name: {this.state.market_data.market.name} </li>}
        </ul>
      </div>
    )
  }
};
