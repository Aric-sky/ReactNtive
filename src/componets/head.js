
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
            幸运抽奖
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
    fontSize: 36,
    height: 60,
    lineHeight: 60,
    color: '#000',
    marginTop: 35,
    marginBottom: 10,
    backgroundColor: 'rgba(255,229,65,1)',
    textAlign:'center'
  },

});


module.exports = Head;