
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
      arr: [1,2,3,4,5,6,7,8,9],
      focNum: 0,
      boxStyle: ['transparent','transparent','transparent','red','transparent','transparent','transparent','transparent','transparent']
    }
  }
  altMsg(){
    this.setState = ({
      boxStyle: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    })
    return Math.floor(Math.random()*6).toString();
  }

  render() {
    return (
      <View>
          {/* 九宫格 */}
          <View style={styles.imgWrapper}>
            {
              this.state.arr.map((val, index) => {
                return <Image key={index} source={require('../img/66.jpg')} 
                style={[styles.imgBox, {borderColor: this.state.boxStyle[index]}]} />
              })
            }
          </View>

          <TouchableHighlight style={styles.wrapper}
            onPress={() => Alert.alert(
              'Alert Title',
              this.altMsg(),
              [
                {text: 'OK', onPress: () => console.log('OK Pressed!')},
              ]
            )}>
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