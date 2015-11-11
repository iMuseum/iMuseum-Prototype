
var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var Object = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>展品介绍</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container:{
    marginTop:90,
  },
  img:{
    width:414,
    height: 650,
  }
});

module.exports = Object;
