var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var Home = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

      </View>
    );
  },
});

var styles = StyleSheet.create({
  container:{
    marginTop:60,
  },
  img:{
    width:414,
    height: 650,
  }
});

module.exports = Home;
