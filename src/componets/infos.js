
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var Dimensions = require('Dimensions');
var {width, height, scale} = Dimensions.get('window');

export default class Infos extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }

  render() {
    return (
      <View style={styles.headWrap}>
        <Text style={styles.instructions}>
          width:{width} - height:{height} - scale: {scale}
        </Text>
        <Text style={styles.instructions}>
           {instructions}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  instructions: {
    fontSize: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 25,
    marginTop: 20
  },

});


module.exports = Infos;