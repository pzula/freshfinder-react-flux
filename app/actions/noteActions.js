var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants')
var firebaseUtils = require('../utils/firebaseUtils');

var noteActions = {
  addNote: function(noteObj){
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_NOTES,
      data: noteObj.note
    });
    firebaseUtils.addNote(noteObj);
  },
  changeMarket: function(market_id){
    firebaseUtils.homeInstance().child(market_id).on('value', function(snapshot){
      AppDispatcher.handleAction({
        actionType: appConstants.CHANGE_MARKET
        data: {
          market_id: market_id,
          notes: firebaseUtils.toArray(snapshot.val());
        }
      });
    });
  }
};

module.exports = noteActions;
