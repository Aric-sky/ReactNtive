
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import SqurePage from '../componets/squrePage'


export default class Home extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* 头部 */}
        <SqurePage />

      </ScrollView>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 750,
    backgroundColor: '#F5FCFF',
  },


});
