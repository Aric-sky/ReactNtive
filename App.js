
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image
} from 'react-native';

import Head from './src/componets/head'
import SqurePage from './src/componets/squrePage'
import Lucker from './src/componets/lucker'
import Infos from './src/componets/infos'
import BTextInput from './src/componets/BTextInput'
import LoginView from './src/componets/loginView'
import DTouchabel from './src/componets/touch'
import ScrollView from './src/componets/scrollView'

import Resolution from "./Resolution";


// console.ignoredYellowBox = ['Remote debugger'];


export default class App extends Component {

  render() {
    return (
      <Resolution.FixWidthView style={styles.container}>
        {/* 头部 */}
        {/* <Head /> */}

        {/* 动态渲染 */}
        {/* <SqurePage></SqurePage> */}

        {/* 九宫格 */}
        {/* <Lucker></Lucker> */}

        {/* infos */}
        {/* <Infos></Infos> */}

        {/* BTextInput */}
        {/* <BTextInput></BTextInput> */}

        {/* loginView */}
        {/* <LoginView></LoginView> */}

        {/* DTouch */}
        {/* <DTouchabel></DTouchabel> */}

        {/* ScrollView */}
        <ScrollView></ScrollView>


      </Resolution.FixWidthView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    // flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


});
