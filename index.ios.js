'user strict'

var React = require('react-native');
var Home = require('./Home');
var Navi = require('./Navigator');
var Vision = require('./Vision');
var Profile = require('./Profile');
// var config = require('./config');
var {
  AppRegistry,
  AsyncStorage,
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  } = React;

var homeIcon = 'data:image/png;base64,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';
var homeSelected = 'data:image/png;base64,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';

var userIcon = 'data:image/png;base64,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';
var userSelected = 'data:image/png;base64,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';

// var iMuseum = React.createClass({

var Classroom = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'homeTab',
    };
  },

  _renderTab: function(index) {
    var titles = ['Museum', 'Navigator', 'Vision', 'Me'];
    var component = [Home, Navi, Vision, Profile];
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: titles[index],
            component: component[index],
          }}
        />
    );
  },

  render: function(){
    return (

      <TabBarIOS
        tintColor="#4169E1"
        barTintColor="white">
        <TabBarIOS.Item
          title="Home"
          icon={{uri: homeIcon, scale: 5}}
          selectedIcon={{uri: homeSelected, scale: 5}}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}>
          {this._renderTab(0)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Navigator"
          icon={{uri: homeIcon, scale: 5}}
          selectedIcon={{uri: homeSelected, scale: 5}}
          selected={this.state.selectedTab === 'navigatorTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'navigatorTab',
            });
          }}>
          {this._renderTab(1)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: userIcon, scale: 4.5}}
          selectedIcon={{uri: userSelected, scale: 4.5}}
          title="Vision"
          selected={this.state.selectedTab === 'visionTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'visionTab',
            });
          }}>
          {this._renderTab(2)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: userIcon, scale: 4.5}}
          selectedIcon={{uri: userSelected, scale: 4.5}}
          title="Me"
          selected={this.state.selectedTab === 'profileTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'profileTab',
            });
          }}>
          {this._renderTab(3)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

AppRegistry.registerComponent('Classroom', () => Classroom);
// AppRegistry.registerComponent('iMuseum_Prototype', () => Classroom);

module.exports = Classroom;
