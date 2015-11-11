
var React = require('react-native');
var Object = require('./Object');
var {
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var Vision = React.createClass({
  click: function(){
    this.props.navigator.push({
    title: 'Object',
    component: Object,
    rightButtonTitle: '+',
    });
  },

  render: function() {

    return (
      <View style={styles.container}>
      <TouchableHighlight
        onPress={this.click}>
        <Image
          source={require('./img/vision.png')}
          style={styles.img}
          />
      </TouchableHighlight>
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

module.exports = Vision;
