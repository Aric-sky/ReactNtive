
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



var Dimensions = require('Dimensions');
var {width, height, scale} = Dimensions.get('window');
var maginLen = (width - 300)*2 / 4; // 间隔 
var focNum = 0;
var alertMessage = Math.floor(Math.random()*6).toString();


export default class Lucker extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      focNum: 0,
      imgLinks: ['../img/66.jpg','../img/66.jpg','../img/66.jpg','../img/66.jpg','../img/66.jpg','../img/66.jpg','../img/66.jpg','../img/66.jpg','../img/66.jpg']
    }
  }
  altMsg(){
    var rum = Math.floor(Math.random()*9).toString();
    this.setState({
      focNum: rum,
    })
    return rum
  }
  onPress(){
    Alert.alert(
      'Alert Title',
      this.altMsg(),
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )  
  }

  render() {
    return (
      <View>
          {/* 九宫格 */}
          <View style={styles.imgWrapper}>
            {
              this.state.imgLinks.map((val, index) => {
                return <Image key={index} source={require('../img/66.jpg')} 
                style={[styles.imgBox, {borderColor: this.state.focNum == index ? 'red' : 'transparent'}]} />
              })
            }
          </View>

          <TouchableHighlight style={styles.wrapper}
            onPress={ this.onPress.bind(this) }>
            <View style={styles.btn}>
              <Image source={require('../img/66.jpg')} style={styles.images} />
            </View>
          </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  imgBox: {
    width:200,
    height:200,
    marginTop: 10,
    marginLeft: maginLen,
    borderWidth: 5,
    borderColor: 'transparent'
  },
  fucBox: {
    borderColor: 'red',
  },
  images: {
    width: 250, 
    height: 250, 
    marginTop: 100,
    borderRadius: 125
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  btn: {
    alignItems: 'center'
  }
});


module.exports = Lucker;