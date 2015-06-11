var AppDispatcher = require('../dispatcher/app-dispatcher.js');
var AppConstants = require('../constants/app-constants.js');

var LoginActions = {

	submitLogin: function(data){
		var payload = {
     	 actionType: 'LOGIN_SUBMIT',
     	 data: data
   		};
    	AppDispatcher.handleViewAction(payload);
	},

}

module.exports = LoginActions;