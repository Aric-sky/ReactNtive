
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';


var Dimensions = require('Dimensions');
var {width,height, scale} = Dimensions.get('window');
var mwidth = width *  scale;

export default class LoginView extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }

  render() {
    return (
      <View style={styles.loginCtn}>

        {/*头像*/}
        <Image source={require('../img/icon.png')} style={styles.iconStyle}/>

        {/*账号和密码*/}
        <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} />
        <TextInput placeholder={'请输入密码'}  password={true}  style={styles.textInputStyle} />

        {/*登录*/}
        <View style={styles.loginBtnStyle}>
            <Text style={{color:'white', fontSize:30}}>登录</Text>
        </View>

        {/*设置*/}
        <View style={styles.settingStyle}>
            <Text style={styles.fontRd}>无法登录</Text>
            <Text style={styles.fontRd}>新用户</Text>
        </View> 

        {/*其他的登录方式*/}
        <View style={styles.otherLoginStyle}>
            <Text style={styles.fontRd}>其他登录方式: </Text>
            <Image  source={require('../img/icon3.png')}  style={styles.otherImageStyle} />
            <Image  source={require('../img/icon7.png')}   style={styles.otherImageStyle} />
            <Image  source={require('../img/icon8.png')}   style={styles.otherImageStyle} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  fontRd:{
    fontSize: 30
  },
  loginCtn:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  iconStyle:{
    marginTop:100,
    marginBottom:100,
    width:160,
    height:160,
    borderRadius:80,
    borderWidth:4,
    borderColor:'white'
 },
 textInputStyle:{
    height:80,
    fontSize: 30,
    width: mwidth,
    backgroundColor:'white',
    marginBottom:20,
    textAlign:'center'
},
loginBtnStyle:{
  height: 70,
  width: mwidth*0.9,
  backgroundColor:'blue',
  marginTop:30,
  marginBottom:20,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:8
},
settingStyle:{
  // 设置主轴的方向
  flexDirection:'row',
  // 主轴的对齐方式
  width:mwidth*0.9,
  justifyContent:'space-between'
},
otherLoginStyle:{
  // 设置主轴的方向
  flexDirection:'row',
  // 设置侧轴的对齐方式
  alignItems:'center',
  // 绝对定位
  position:'absolute',
  bottom:20,
  left:30
},
otherImageStyle:{
  width:50,
  height:50,
  borderRadius:25,
  marginLeft:15,
},

});


module.exports = LoginView;