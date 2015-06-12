var AppDispatcher = require('../dispatcher/app-dispatcher.js');
var AppConstants = require('../constants/app-constants.js');

var LoginActions = {

	submitLogin: function(data){

		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
  	if (request.readyState !== 4) {
    return;
  	}

  	if (request.status === 200) {
    	console.log('success', request.responseText);
			var payload = {
	     	 actionType: 'LOGIN_SUBMIT',
	     	 data: data,
				 request: JSON.parse(request.responseText)
	   		};
				AppDispatcher.handleViewAction(payload);
  	} else {
    	console.warn('error');
  	}
	};

	var client_id = 'test_id';
	var secret = 'test_secret';

	request.open('POST', 'https://tartan.plaid.com/connect?client_id='
	 + client_id + '&secret=' + secret +  '&username=' + 'plaid_test'
	 + '&password=' + 'plaid_good' + '&type=wells');
	request.send();


    	//

	},
	fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {

      })
      .done();
  }

}

module.exports = LoginActions;
