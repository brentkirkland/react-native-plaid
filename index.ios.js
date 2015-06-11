/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
var LoginStore = require('./App/stores/login_store')
var LoginActions = require('./App/actions/login-actions')

var {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
} = React;

var BankLogin = require('./App/components/BankLogin.js');

var MoneyLover = React.createClass({
  getInitialState: function () {
    return {
      store: LoginStore.getAll()
    };
  },
  pageSelect: function(){
    if (this.state.store.loggedIn === false) {
      return <BankLogin submit={this._handlePress}/>
    } else {
      console.log('switch to questions')
    }
  },
  render: function() {
    var page = this.pageSelect();
    return (
      <View style={styles.container}>
        {page}
      </View>
    );
  },
  _handlePress: function (data){
    console.log(data)
    console.log(this.state.store)
    LoginActions.submitLogin();
    //this.forceUpdate();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

AppRegistry.registerComponent('MoneyLover', () => MoneyLover);
