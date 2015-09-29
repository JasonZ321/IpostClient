'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
var Query = require('./Util/Query');
// var ParseReact = require('parse-react');

var {
  ActivityIndicatorIOS,
  ListView,
  StyleSheet,
  Text,
  View
} = React;

// Parse.initialize(
//   'wXOdZABhQqjhOZ1rqeRH2NOqU1TgqUHPqYkPjXQr',
//   'rlCSayxSoBbmHPazttzMdhSYcGBxYMVcmJF4O2uW'
// );

var url = 'https://api.parse.com/1/classes/Post';
var appId = 'wXOdZABhQqjhOZ1rqeRH2NOqU1TgqUHPqYkPjXQr';
var restfulId = 'rlCSayxSoBbmHPazttzMdhSYcGBxYMVcmJF4O2uW';
var baseDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var Main = React.createClass({
  // mixins: [ParseReact.Mixin],

  // observe: function(props, state) {
  //   return {
  //     posts: (new Parse.Query('_User'))
  //   };
  // },

  getInitialState: function() {
    return {
      isLoading: true,
      dataSource: baseDataSource
    };
  },
  fetchData: function() {
    this.setState({
      isLoading: true
    });
    Query.getResults("Post")
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          isLoading: false,
          dataSource: baseDataSource.cloneWithRows(responseData),
        });
      })
      .catch((error) => {
        console.log('error!');
      })
      .done();
    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'X-Parse-Application-Id': 'wXOdZABhQqjhOZ1rqeRH2NOqU1TgqUHPqYkPjXQr',
    //     'X-Parse-REST-API-Key': 'rlCSayxSoBbmHPazttzMdhSYcGBxYMVcmJF4O2uW',
    //     'Content-Type': 'application/json',
    //   }
    // })
    // .then((response) => response.json())
    //
    // .then((responseData) => {
    //   console.log(responseData);
    //   this.setState({
    //     isLoading: false,
    //     dataSource: baseDataSource.cloneWithRows(responseData),
    //   });
    // })
    // .done();
  },

  componentDidMount: function () {
    this.fetchData();
  },
  renderRow: function(info: Object) {
    return (
      <View></View>
    );
  },

  render: function() {
    var results = <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                  />;
    return(
      <View>
        {results}
      </View>
    );

  }

})

module.exports = Main;
