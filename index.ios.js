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
var Transactions = require('./App/components/transactions.js');

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
    LoginStore.removeChangeListener(this._onChange);
  },
  pageSelect: function(){
    if (this.state.store.loggedIn === false) {
      return <BankLogin error={this.state.store.error}/>
    } else {
      return <Transactions/>
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
