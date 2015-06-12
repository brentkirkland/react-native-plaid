var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _transactions = {}

function _storeTransactions(request){
	_transactions = request;
  TransactionsStore.emitChange();
}

var TransactionsStore = merge(EventEmitter.prototype, {
  getAll: function() {
    return _transactions;
  },
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  dispatcherIndex:AppDispatcher.register(function(payload){
  	switch(payload.action.actionType){
  		case AppConstants.LOGIN_SUBMIT:
				_storeTransactions(payload.action.request)
  		default:
  			return true;
  	}
  	LoginStore.emitChange()
  	return true;
  })
})

module.exports = TransactionsStore;
