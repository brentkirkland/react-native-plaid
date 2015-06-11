/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
var LoginStore = require('./App/stores/login_store')


var {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
} = React;

var BankLogin = require('./App/components/BankLogin.js');

function updateState(){
  return LoginStore.getAll()
}

var MoneyLover = React.createClass({
  getInitialState: function () {
    return {
      store: updateState()
    };
  },
  componentDidMount: function() {
    LoginStore.addChangeListener(this._onChange);
  },
  componentDidUnount: function() {
    LoginSTore.removeChangeListener(this._onChange);
  },
  pageSelect: function(){
    if (this.state.store.loggedIn === false) {
      return <BankLogin/>
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
  _onChange: function() {
    this.setState(updateState())
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
