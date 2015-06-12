'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

function updateState(){
  return LoginStore.getAll()
}

var Transactions = React.createClass({
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
  render: function() {
    return (
      <View style={styles.container}>
      </View>
    );
  },
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});


module.exports = Transactions;
