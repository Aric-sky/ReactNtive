

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native';



class DTouchabel extends Component{

 // 可以改变的值
 constructor(props, context) {
  super(props, context);
  this.state = {
    title:'不透明触摸',
    person: '张三',
    age: 18
    }
  }

  render() {
    return (
        <View ref="topView" style={styles.container}>
          <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=>this.activeEvent('点击')}
              onPressIn={()=>this.activeEvent('按下')}
              onPressOut={()=>this.activeEvent('抬起')}
              onLongPress={()=>this.activeEvent('长按')}
              >
            <View style={styles.innerViewStyle}>
              <Text ref="event" style={styles.fSize}>常用的事件</Text>
            </View>
          </TouchableOpacity>

          <View>
              <Text style={styles.fSize}>{this.state.title}</Text>
              <Text style={styles.fSize}>{this.state.person}</Text>
              <Text style={styles.fSize}>{this.state.age}</Text>
          </View>
        </View>
    );
  }

  activeEvent(event){
    // 更新状态机
     this.setState({
        title: event,
        person:'李四'
     })

    // 拿到View
    this.refs.topView
    this.refs.event
  }
};


const styles = StyleSheet.create({
  fSize:{
    fontSize: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  innerViewStyle:{
    backgroundColor:'red'
  }
});


module.exports = DTouchabel;