/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput   
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height, scale} = Dimensions.get('window');
var textWidth = width*scale * 0.8;

class BTextInput extends Component {
  render() {
    return (
      <View style={styles.bTxtcontainer}>
         <TextInput
             style={styles.inputStyle}
             // value={'我是默认文字'}
             keyboardType={'number-pad'}
             // 多行显示
            //  multiline={true}
             // password={true}
             placeholder={'请输入内容'}
             clearButtonMode={'always'}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bTxtcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#fff',
    height:70,
    marginTop:60,

  },

  inputStyle:{
    width: textWidth,
    fontSize: 50,
    height:70,
    textAlign: 'center',
    // 背景
    // backgroundColor:'black',
    // 边框
    borderWidth:1,
    borderColor:'#ddd'
  }
});

module.exports = BTextInput;

