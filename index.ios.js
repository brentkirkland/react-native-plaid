/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var Button = require('react-native-button');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
} = React;

var MoneyLover = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           {' Bank of America '}
        </Text>
        <TextInput 
          style={styles.textField} placeholder='username' autoCorrect='No'
          onChangeText={(text) => this.setState({input: text})}
        />
        <TextInput
          style={styles.passwordTextField} placeholder='password' secureTextEntry='YES'
          onChangeText={(text) => this.setState({input: text})}
        />
        <Button 
          style={styles.submit} onPress={this._handlePress}>
          {' Submit '}
        </Button>
      </View>
    );
  }
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
    padding: 9,
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

AppRegistry.registerComponent('MoneyLover', () => MoneyLover);
