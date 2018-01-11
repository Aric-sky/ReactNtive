
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
var {width, height} = Dimensions.get('window');

// 定义一些全局的变量
var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;
var BadgeData = require('../data/BadgeData.json')


export default class SqurePage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }

  // 返回所有的包
  renderAllBadge(){
    // 定义数组装所有的子组件
    var allBadge = [];
    // 遍历json数据
    for(var i=0; i<BadgeData.data.length; i++){
       // 取出单独的数据对象
      var badge = BadgeData.data[i];
       // 直接转入数组
      allBadge.push(
          <View key={i} style={styles.outViewStyle}>
             <Image source={{uri: badge.icon}} style={styles.imageStyle}/>
             <Text style={styles.mainTitleStyle}>
               {badge.title}
             </Text>
          </View>
      );
    }
    // 返回数组
    return allBadge;
  }

  render() {
    return (
      <View style={styles.container}>
        {/*返回6个包, this代表这个类,调用类里面的方法 */}
        {this.renderAllBadge()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // 确定主轴的方向
    flexDirection:'row',
    // 换行显示
    flexWrap:'wrap'
  },

  outViewStyle:{
     backgroundColor:'red',
     // 设置侧轴的对齐方式
     alignItems:'center',
     width:boxW,
     height:boxW,
     marginLeft:vMargin,
     marginTop:hMargin
  },

  imageStyle:{
     width:80,
     height:80
  },

});


module.exports = SqurePage;