var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _loginData = {loggedIn: false};

function _submitUserandPassword(payload){
	console.log('store updated')
	_loginData.loggedIn = true
	console.log(_loginData.loggedIn)
}

var LoginStore = merge(EventEmitter.prototype, {
  getAll: function() {
    return _loginData;
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
  			_submitUserandPassword(payload);
  		default:
  			return true;
  	}
  	LoginStore.emitChange()
  	return true;
  })
})

module.exports = LoginStore;