var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constant/appConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _state = {
  market_id: 0,
  market_data: {},
};

var newMarket = function(market_id){
  _state.market_id = market_id;
};

var setMarketData = function(data){
  _state.market_data = data;
};

var marketStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getMarketId: function(){
    return _state.market_id;
  },
  getMarketData: function(){
    return _state.market_data;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.FRESHFINDER_MARKET_DATA:
      setMarketData(action.data);
      marketStore.emit(CHANGE_EVENT);
      break;
    case appConstants.FRESHFINDER_CHANGE_MARKET:
      newMarket(action.data);
      marketStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = marketStore;
