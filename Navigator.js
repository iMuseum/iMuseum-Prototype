
var React = require('react-native');

var {
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;

var Navigator = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/navi.png')}
          style={styles.img}/>
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

module.exports = Navigator;
