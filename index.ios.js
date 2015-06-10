/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
} = React;

var BankLogin = require('./App/components/BankLogin.js');

var MoneyLover = React.createClass({
  //check if there is a user, if not load the login
  render: function() {
    return (
      <View style={styles.container}>
        <BankLogin/>
      </View>
    );
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
