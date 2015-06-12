'use strict';

var React = require('react-native');
var LoginActions = require('../actions/login-actions');

var {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
} = React;

var BankLogin = React.createClass({
  getInitialState: function() {
  	return ({username: '', password: ''})
  },
  showError: function() {
  	if (this.props.error != null) {
  		return (
  		<Text style={styles.welcome}>
           {this.props.error}
        </Text>
        )
  	}
  },
  render: function() {
  	var error = this.showError();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           {' Bank of America '}
        </Text>
        {error}
        <TextInput
          style={styles.textField} placeholder='press' autoCorrect={false}
          onChange={(text) => this.setUsername(text)}/>
        <TextInput
          style={styles.passwordTextField} placeholder='submit' secureTextEntry='YES'
          onChange={(text) => this.setPassword(text)}/>
        <TouchableHighlight
        onPress={this.submitUsernameAndPassword}
        underlayColor='#FF4A4A'>
          <Text style={styles.submitText}>Submit</Text>
      	</TouchableHighlight>
      </View>
    );
  },
  setUsername: function(data){
  	this.setState({username: data.nativeEvent.text})
  },
  setPassword: function(data){
  	this.setState({password: data.nativeEvent.text})
  },
  submitUsernameAndPassword: function() {
 	LoginActions.submitLogin({username: this.state.username, password: this.state.password});
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
    paddingLeft: 9,
    backgroundColor: '#FFF',
    color: '#FF4A4A'
  },
  passwordTextField: {
    height: 40,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 9,
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
  submitText: {
  	padding: 8.5,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  	textAlign: 'left',
    fontSize: 17,
    color: '#FFF',
    borderWidth: 1,
    borderColor: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = BankLogin;
