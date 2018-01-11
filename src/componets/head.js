
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


export default class Head extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }

  render() {
    return (
      <View style={styles.headWrap}>
          <Text style={styles.head}>
            React Native!
          </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  headWrap:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  head: {
    flex: 1,
    fontSize: 30,
    height: 40,
    lineHeight: 40,
    color: '#fff',
    marginTop: 35,
    backgroundColor: 'green',
    textAlign:'center'
  },

});


module.exports = Head;