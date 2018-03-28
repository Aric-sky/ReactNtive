
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ScrollView
} from 'react-native';

import Head from '../componets/head'
import Lucker from '../componets/lucker'
import Infos from '../componets/infos'


import Resolution from "../../Resolution";


export default class Home extends Component {

  render() {
    return (
      <Resolution.FixWidthView>
        <ScrollView style={styles.container}>
          {/* 头部 */}
          <Head />

          {/* 九宫格 */}
          <Lucker></Lucker>

          {/* infos */}
          {/* <Infos></Infos> */}

        </ScrollView>   
      </Resolution.FixWidthView>
    );
  }
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    width: 750,
    backgroundColor: '#F5FCFF',
  },


});
