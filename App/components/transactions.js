'use strict';

var React = require('react-native');
var Transaction = require('./transaction');
var TransactionsStore = require('../stores/transaction-store')
var _ = require('lodash');

var {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  View,
  Text,
  ListView,
  TouchableHighlight,
} = React;

function getTransactions(){
  return TransactionsStore.getAll()
}


var Transactions = React.createClass({


  getInitialState: function () {
    console.log('initial state is being called')
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
    return (
      <View style={styles.listContainer}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.state.store.transactions)}
          renderRow={this.renderTransaction}
          style={styles.listView}/>
      </View>
    );
  },
  renderTransaction: function(transaction){
    return (
      <TouchableHighlight
        onPress={() => this._rowPress(transaction)}
        underlayColor='#28b761'>
        <View style={styles.row}>
          <Text style={styles.name}>{transaction.name}</Text>
          <View style={styles.rightContainer}>
            <Text style={styles.price}>{'$'+transaction.amount}</Text>
          </View>
        </View>
    </TouchableHighlight>
    );
  },
  _rowPress: function(transaction){
    console.log('transaction')
    console.log(transaction)
    this.props.navigator.push({
        title: 'Transaction',
        component: Transaction,
        props: transaction
      });
  },
  _onChange: function(){
    console.log('did change')
    this.setState({store: getTransactions()})
    console.log('base', this.store)
  },
})

var styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    height: 60,
    borderBottomColor: '#28b761',
    borderBottomWidth: 1/PixelRatio.get(),
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
    color: '#28b761'
  },
  rightContainer: {
    flex: .35,
    alignSelf: 'center'
  },
  price: {
    flex: 1,
    padding: 10,
    textAlign: 'right',
    color: '#28b761'
  },
  balance: {
    flex: 1,
    textAlign: 'right',
    color: '#28b761'
  },
  listView: {
      backgroundColor: '#fff',
  },
  topper: {
      marginTop: 65,
      height: 60,
      padding: 10,
      backgroundColor: '#0ef4e5',
  },
});


module.exports = Transactions;
