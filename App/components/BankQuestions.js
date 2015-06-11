'use strict';
var LoginActions = require('../actions/login-actions');
var LoginStore = require('../stores/login_store');
var Button = require('react-native-button');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
} = React;

var BankLogin = React.createClass({
  getInitialState: function() {
    return {loggedIn: false}
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           {' What is '}
        </Text>
        <TextInput 
          style={styles.textField} placeholder='answer' autoCorrect={false}
          onChangeText={(text) => {this.setState({username: text})}}
        />
        <Button 
          style={styles.submit} onPress={this._handlePress}>
          {' Submit '}
        </Button>
      </View>
    );
  },
  _handlePress(){
  	LoginActions.submitLogin();
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF4A4A',
  },
  textField: {
    height: 40, 
    marginLeft: 20, 
    marginRight: 20, 
    paddingLeft: 5, 
    backgroundColor: '#FFF', 
    color: '#FF4A4A'
  },
  passwordTextField: {
    height: 40, 
    marginTop: 5,
    marginLeft: 20, 
    marginRight: 20, 
    paddingLeft: 5, 
    backgroundColor: '#FFF', 
    color: '#FF4A4A'
  },
  seperator: {
    height: 1,
    width: 100,
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 5,
    backgroundColor: '#FFF',
    color: "#FF4A4A",
  },
  submit: {
    padding: 8.5,
    fontSize: 17,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'white',
    color: "#FFF",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = BankLogin;