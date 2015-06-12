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
        <Text style={styles.price}>{'$'+transaction.amount}</Text>

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
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
  },
  rightContainer: {
    flex: 1,
  },
  price: {
    flex: .2,
    padding: 10,
    alignSelf: 'center',
    textAlign: 'right'
  },
  listView: {
      height: 40,
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
  },
});


module.exports = Transactions;
