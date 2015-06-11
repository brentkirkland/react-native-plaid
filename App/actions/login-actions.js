var AppDispatcher = require('../dispatcher/app-dispatcher.js');
var AppConstants = require('../constants/app-constants.js');

var LoginActions = {

	submitLogin: function(){
		var payload = {
     	 actionType: 'LOGIN_SUBMIT'
   		};
    	AppDispatcher.handleViewAction(payload);
	},

}

module.exports = LoginActions;