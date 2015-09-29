/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Main');
var ParseReact = require('parse-react');
var Parse = require('parse').Parse;

Parse.initialize(
  'wXOdZABhQqjhOZ1rqeRH2NOqU1TgqUHPqYkPjXQr',
  'rlCSayxSoBbmHPazttzMdhSYcGBxYMVcmJF4O2uW'
);

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var IpostClient = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Info',
          component: Main
        }} />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('IpostClient', () => IpostClient);
