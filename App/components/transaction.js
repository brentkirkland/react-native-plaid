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
  TouchableHighlight,
} = React;

var Transaction = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.amount}>
          {'$'+this.props.route.props.amount}
          </Text>
        <Text style={styles.welcome}>
           {' '+this.props.route.props.name+' '}
        </Text>
        <Text style={styles.date}>
           {this.props.route.props.date}
        </Text>
      </View>
    );
  },
  _handlePress(){

  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#51cc82',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    backgroundColor: '#FFF',
    color: "#51cc82",
  },
  amount: {
    fontSize: 60,
    fontWeight: "200",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    color: "#FFF",
  },
  date: {
    fontSize: 17,
    fontStyle: 'italic',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    color: "#FFF",
  }

});

module.exports = Transaction;
