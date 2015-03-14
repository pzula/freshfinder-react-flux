var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants')
var freshFinderUtils = require('../utils/FreshFinderUtils');

var freshFinderActions = {
  getMarket: function(market_id){
    freshFinderUtils.getMarket(market_id)
    .then(function(response){
      actionType: appConstants.FRESHFINDER_MARKET_DATA,
      data: response.data
    });
  },
  changeMarket: function(market_id){
    AppDispatcher.handleAction({
      actionType: appConstants.CHANGE_MARKET,
      data: market_id
    });
  }
};

module.exports = freshFinderActions;
