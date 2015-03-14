var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _state = {
  notes: [],
  market_id: 0
};

var addNote = function(note){
  _state.notes.push(note);
}

var changeMarket = function(newMarketObj){
  _state = {
    market_id: newMarketObj.market_id,
    notes: newMarketObj.notes
  };
};

var notesStore = objectAssign({}, EventEmitter.prototype, {
  getState: function(){
    return _state;
  },
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeChangeListener(CHANGE_EVENT, cb);
  },
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_NOTE:
      addNote(action.data);
      notesStore.emit(CHANGE_EVENT);
      break;
    case appConstants.CHANGE_MARKET:
      changeMarket(action.data);
      notesStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = notesStore;
