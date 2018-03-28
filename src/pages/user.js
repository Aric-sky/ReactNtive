
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import LoginView from '../componets/loginView'


import Resolution from "../../Resolution";



export default class User extends Component {

  render() {
    return (
      <Resolution.FixWidthView>
        <LoginView></LoginView>
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
