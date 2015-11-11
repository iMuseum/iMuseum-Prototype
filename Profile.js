
var React = require('react-native');

var {
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;

var Profile = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/me.jpg')}
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
    // marginLeft: 30,
    width:414,
    height: 550,
  }
});


module.exports = Profile;
