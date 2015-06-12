'use strict';

var React = require('react-native');
var TransactionsStore = require('../stores/transaction-store')
var _ = require('lodash');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
} = React;

function getTransactions(){
  return TransactionsStore.getAll()
}

var Transactions = React.createClass({
  getInitialState: function () {
    return {store: getTransactions(),
            dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2,
            })}
  },
  componentDidMount: function() {
    TransactionsStore.addChangeListener(this._onChange);
  },
  componentDidUnount: function() {
    TransactionsStore.removeChangeListener(this._onChange);
  },
  render: function() {
    console.log('render', this.state.store.transactions);
    return (
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.state.store.transactions)}
          renderRow={this.renderTransaction}
          style={styles.listView}/>
    );
  },
  renderTransaction: function(transaction){
    return (
      <View style={styles.row}>
        <Text style={styles.name}>{transaction.name}</Text>
      </View>
    );
  },
  _onChange: function(){
    console.log('did change')
    this.setState({store: getTransactions()})
    console.log('base', this.store)
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  row: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  name: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  listView: {
      height: 40,
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
  },
});


module.exports = Transactions;
