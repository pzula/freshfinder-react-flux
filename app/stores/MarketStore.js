var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constant/appConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _state = {
  name: '',
  address: {},
  payment_types: [],
  products: [],
  seasons: []
};

var newMarket = function(market_name){
  _state.name = market_name;
};

var setAddress = function(address_data){
  _state.address = address_data;
};

var setPaymentTypes = function(payment_data){
  _state.payment_types = payment_data;
};

var setProducts = function(product_data){
  _state.products = product_data;
};

var setSeasons = function(season_data){
  _state.seasons = season_data;
};

var marketStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getMarketName: function(){
    return _state.name;
  },
  getMarketAddress: function(){
    return _state.address;
  },
  getMarketPaymentTypes: function(){
    return _state.payment_types;
  },
  getProducts: function(){
    return _state.products;
  },
  getSeasons: function(){
    return _state.seasons;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.FRESHFINDER_MARKET_ADDRESS:
      setAddress(action.data);
      marketStore.emit(CHANGE_EVENT);
      break;
    case appConstants.FRESHFINDER_MARKET_PAYMENT_TYPES:
      setPaymentTypes(action.data);
      marketStore.emit(CHANGE_EVENT);
      break;
    case appConstants.FRESHFINDER_MARKET_PRODUCTS:
      setProducts(action.data);
      marketStore.emit(CHANGE_EVENT);
      break;
    case appConstants.FRESHFINDER_MARKET_SEASONS:
      setSeasons(action.data);
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
