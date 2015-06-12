'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var Transactions = React.createClass({
  getInitialState: function () {
    return {null}
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
