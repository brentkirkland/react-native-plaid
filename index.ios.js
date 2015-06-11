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
var BankQuestions = require('./App/components/BankQuestions.js');

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
    console.log('page selected state:', this.state.store.loggedIn)
    if (this.state.store.loggedIn === false) {
      return <BankLogin error={this.state.store.error}/>
    } else {
      return <BankQuestions/>
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
